import React from 'react';
import { IXkcdInfo } from '../xkcdViewer/xkcdViewer';
import './ComicViewer.css';


export class ComicViewer extends React.Component<{data: IXkcdInfo}> {
    private formatDate(year: string, month: string, day: string) {
        let numYear = parseInt(year);
        let numMonth = parseInt(month);
        let numDay = parseInt(day);

        // For safety
        if(isNaN(numYear) || isNaN(numMonth) || isNaN(numDay)) {
            return '';
        }

        // Month is 0 based
        return new Date(numYear, numMonth-1, numDay).toLocaleDateString();
    }

    render() {
        return <span>
            <span className='auto-block-center mx-auto'>{this.props.data.safe_title}</span>
            <span className='auto-block-center mx-auto'>{this.formatDate(this.props.data.year, this.props.data.month, this.props.data.day)}</span>
            <img className='auto-block-center mx-auto' src={this.props.data.img} 
                title={this.props.data.title} 
                alt={this.props.data.alt}>
            </img>
        </span>;
    }
}