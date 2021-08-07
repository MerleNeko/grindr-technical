import React from 'react';
import { IXkcdInfo } from '../xkcdViewer/xkcdViewer';
import './ComicViewer.css';


export class ComicViewer extends React.Component<{data: IXkcdInfo}> {
    private formatDate(year: string, month: string, day: string) {
        // For safety
        let numYear = parseInt(year);
        let numMonth = parseInt(month);
        let numDay = parseInt(day);

        if(isNaN(numYear) || isNaN(numMonth) || isNaN(numDay)) {
            return '';
        }

        // Month is 0 based
        return new Date(numYear, numMonth-1, numDay).toLocaleDateString();
    }

    render() {
        return <div>
            <div>{this.props.data.safe_title}</div>
            <div>{this.formatDate(this.props.data.year, this.props.data.month, this.props.data.day)}</div>
            <img src={this.props.data.img} 
                title={this.props.data.title} 
                alt={this.props.data.alt}>
            </img>
        </div>;
    }
}