import React from 'react';
import { PaginationButton, IPaginationButton, IPaginationButtonClick } from '../PaginationButton/PaginationButton';
import './Pagination.css';

export interface IGoToFunction { (id: number): void };

export class Pagination extends React.Component<{currentId: number, maxId: number, goTo: IGoToFunction}> {
    public middleButton = (position: number) => {
        // Depends on where we are
        let newId = this.props.currentId + position;
        if (this.props.currentId >= this.props.maxId - 2) {
            // We're near the end, so these are fixed
            newId = this.props.maxId - (5-position);
            
        } else if (this.props.currentId <= 3) {
            // At the begining
            newId = position;
        } else {
            // Current is in the middle
            switch(position) {
                case 1:
                    newId = this.props.currentId - 2;
                    break;
                case 2:
                    newId = this.props.currentId - 1;
                    break;
                case 3:
                    newId = this.props.currentId;
                    break;
                case 4:
                    newId = this.props.currentId + 1;
                    break;
                case 5:
                    newId = this.props.currentId + 2;
                    break;
            }
        }

        const buttonInfo: IPaginationButton = {
            active: this.props.currentId === newId, 
            disabled: false,
            display: newId.toString(), 
            id: newId
        }
        return <PaginationButton buttonInfo={buttonInfo} onButton={this.buttonClick} />;
    }

    public buttonClick: IPaginationButtonClick = (id: number) => {
        this.props.goTo(id);
    }

    render() {
        return <nav aria-label='Page navigation'>
            <ul className="pagination">
                <PaginationButton buttonInfo={ {active:false, disabled: this.props.currentId === 1, display: '<<', id: 1} } onButton={this.buttonClick} />
                <PaginationButton buttonInfo={ {active:false, disabled: this.props.currentId === 1, display: '<', id: this.props.currentId - 1} } onButton={this.buttonClick} />
                {this.middleButton(1)}
                {this.middleButton(2)}
                {this.middleButton(3)}
                {this.middleButton(4)}
                {this.middleButton(5)}
                <PaginationButton buttonInfo={ {active:false, disabled: this.props.currentId === this.props.maxId, display: '>', id: this.props.currentId + 1} } onButton={this.buttonClick} />
                <PaginationButton buttonInfo={ {active:false, disabled: this.props.currentId === this.props.maxId, display: '>>', id: this.props.maxId} } onButton={this.buttonClick} />
            </ul>
        </nav>;
    }
}