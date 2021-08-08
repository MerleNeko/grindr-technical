import React from 'react';
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
}

export class XkcdViewer extends React.Component<{}, {data: IXkcdInfo, maxId: number}> {
    httpCall$: any;

    constructor(props: any) {
        super(props);

        // State has to be initialized at the start
        this.state = { 
            data: {
                month: '',
                num: 0,
                link: '',
                year: '',
                news: '',
                safe_title: '',
                transcript: '',
                alt: '',
                img: '',
                title: '',
                day: ''
            },
            maxId: 5
        }

        this.httpCall$ = ajax.getJSON<IXkcdInfo>('https://getxkcd.now.sh/api/comic?num=latest').subscribe((response) => {
            this.setState({
                data: response,
                maxId: response.num
            });
        });
    }

    public GoToPage: IGoToFunction = (id: number) => {
        if (id < 1 || id > this.state.maxId) {
            //Ignore
            return;
        }

        this.httpCall$ = ajax.getJSON<IXkcdInfo>('https://getxkcd.now.sh/api/comic?num=' + id).subscribe((response) => {
            this.setState({
                data: response
            });
        });
    }

    componentWillUnmount() {
        this.httpCall$.unsubscribe();
    }

    render() {
        return <div className='container'>
            <div className='row'>
                <div className='col-xs-auto col-sm-auto col-md-auto col-lg-1 col-xl-1'></div>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 filled-column bottom-row'>
                    <div className='center-text auto-block-center mx-auto'>
                        <ComicViewer data={this.state.data} />
                        <Pagination currentId={this.state.data.num} maxId={this.state.maxId} goTo={this.GoToPage}/>
                    </div>
                </div>
                <div className='col-xs-auto col-sm-auto col-md-auto col-lg-1 col-xl-1'></div>
            </div>
        </div>;
    }
}