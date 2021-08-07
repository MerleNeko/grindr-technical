import React from 'react';
import xkcd_example from '../xkcd_example.png';
import './xkcdViewer.css';


export class XkcdViewer extends React.Component {
    render() {
        return <div>
            <div>Abandonment Function</div>
            <div>8/7/2021</div>
            <img src={xkcd_example} 
                title="Remember to only adopt domesticated drones that specifically request it. It's illegal to collect wild ones under the Migratory Drone Treaty Act." 
                alt="Abandonment Function">
            </img>
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