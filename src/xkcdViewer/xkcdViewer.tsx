import React from 'react';
import xkcd_example from '../xkcd_example.png';
import './xkcdViewer.css';

export class XkcdViewer extends React.Component {
    render() {
        return <div>
            <div>Abandonment Function</div>
            <img src={xkcd_example} 
                title="Remember to only adopt domesticated drones that specifically request it. It's illegal to collect wild ones under the Migratory Drone Treaty Act." 
                alt="Abandonment Function">
            </img>
        </div>;
    }
}