import React from 'react';
import { ComicViewer } from '../ComicViewer/ComicViewer';
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

export class XkcdViewer extends React.Component<{}, {data: IXkcdInfo}> {
    constructor(props: any) {
        super(props);

        // Sample Data
        this.state = { 
            data: {
                "month": "8",
                "num": 2499,
                "link": "",
                "year": "2021",
                "news": "",
                "safe_title": "Abandonment Function",
                "transcript": "",
                "alt": "Remember to only adopt domesticated drones that specifically request it. It's illegal to collect wild ones under the Migratory Drone Treaty Act.",
                "img": "https://imgs.xkcd.com/comics/abandonment_function.png",
                "title": "Abandonment Function",
                "day": "6"
            }
        }
    }

    render() {
        return <div>
            <ComicViewer data={this.state.data} />
            <nav aria-label='Page navigation'>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="First">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&lt;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&gt;</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Last">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
            </nav>
        </div>;
    }
}