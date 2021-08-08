import React from 'react';
import './PaginationButton.css';

export class PaginationButton extends React.Component<{active: boolean, disabled: boolean, display: string, id: number}> {
    public click = () => {
        //Do something
        console.log('clicked: ' + this.props.id.toString());
    }

    render() {
        return <li className={'page-item' + (this.props.disabled ? ' disabled' : '') + (this.props.active ? ' active' : '')}>
                    <button className="page-link" onClick={this.click}>{this.props.display}</button>
                </li>;
    }
}