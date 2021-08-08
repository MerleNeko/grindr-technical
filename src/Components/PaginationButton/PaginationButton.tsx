import React from 'react';
import './PaginationButton.css';

export interface IPaginationButton {
    active: boolean, 
    disabled: boolean, 
    display: string, 
    id: number
}

export interface IPaginationButtonClick { (id: number): void };

export class PaginationButton extends React.Component<{buttonInfo: IPaginationButton, onButton: IPaginationButtonClick}> {
    public click = () => {
        this.props.onButton(this.props.buttonInfo.id);
    }

    render() {
        return <li className={'page-item'}>
                    <button className={'xkcd-button' + (this.props.buttonInfo.disabled ? ' disabled' : '') + (this.props.buttonInfo.active ? ' active' : '')} onClick={this.click}>{this.props.buttonInfo.display}</button>
                </li>;
    }
}