import React from 'react';
import { catchError, first, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { ComicViewer } from '../ComicViewer/ComicViewer';
import { IGoToFunction, Pagination } from '../Pagination/Pagination';
import './xkcdViewer.css';

export interface IXkcdInfo {
    month: string,
    num: number,
    link: string,
    year: string,
    news: string,
    safe_title: string,
    transcript: string,
    alt: string,
    img: string,
    title: string,
    day: string
};

export class XkcdViewer extends React.Component<{}, {data: IXkcdInfo, maxId: number, loading: boolean}> {
    static defaultXKCDInfo = {
        month: '',
        num: 5,
        link: '',
        year: '',
        news: '',
        safe_title: '',
        transcript: '',
        alt: '',
        img: '',
        title: '',
        day: ''
    }

    constructor(props: any) {
        super(props);

        // State has to be initialized at the start
        this.state = { 
            data: XkcdViewer.defaultXKCDInfo,
            maxId: 5, 
            loading: true
        }
    }

    public GoToPage: IGoToFunction = (id: number) => {
        if (id < 1 || id > this.state.maxId) {
            //Ignore
            return;
        }

        this.setState({
            loading: true
        });

        this.DoHttpCall(id);
    }

    private DoHttpCall = (id: number | string = 'latest') => {
        ajax.getJSON<IXkcdInfo>('https://getxkcd.now.sh/api/comic?num=' + id).pipe(
            first(), 
            catchError((err, caught) => {
                return of(this.state.data);
            })).subscribe((response) => {
            if (id === 'latest') {
                this.setState({
                    data: response,
                    maxId: response.num,
                    loading: false
                });
            } else {
                this.setState({
                    data: response,
                    loading: false
                });
            }
        });
    }

    componentDidMount() {
        this.DoHttpCall();
    }

    render() {
        return <div className='container'>
            <div className='row'>
                <div className='col-xs-auto col-sm-auto col-md-auto col-lg-1 col-xl-1'></div>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 filled-column'>
                    <div className='center-text auto-block-center mx-auto'>
                        <ComicViewer data={this.state.data} loading={this.state.loading} />
                        <Pagination currentId={this.state.data.num} maxId={this.state.maxId} goTo={this.GoToPage}/>
                    </div>
                </div>
                <div className='col-xs-auto col-sm-auto col-md-auto col-lg-1 col-xl-1'></div>
            </div>
        </div>;
    }
}