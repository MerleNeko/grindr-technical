import React from 'react';
import { PaginationButton } from '../PaginationButton/PaginationButton';
import './Pagination.css';

export class Pagination extends React.Component<{currentId: number, maxId: number}> {

    public middleButton = (position: number) => {
        // Depends on where we are
        if (this.props.currentId >= this.props.maxId - 5) {
            // We're near the end, so these are fixed
            let newId = this.props.currentId - (5-position);
            return <PaginationButton active={this.props.currentId === newId} disabled={false} display={newId.toString()} id={newId} />;
        } else {
            return <PaginationButton active={false} disabled={false} display={(this.props.currentId + position).toString()} id={this.props.currentId + position} />;
        }
    }

    render() {
        return <nav aria-label='Page navigation'>
            <ul className="pagination">
                <PaginationButton aria-label="First" active={false} disabled={this.props.currentId === 1} display='&laquo;' id={1} />
                <PaginationButton aria-label="Previous" active={false} disabled={this.props.currentId === 1} display='&lt;' id={this.props.currentId - 1} />
                {this.middleButton(1)}
                {this.middleButton(2)}
                {this.middleButton(3)}
                {this.middleButton(4)}
                {this.middleButton(5)}
                <PaginationButton aria-label="Next" active={false} disabled={this.props.currentId === this.props.maxId} display='&gt;' id={this.props.currentId + 1} />
                <PaginationButton aria-label="Last" active={false} disabled={this.props.currentId === this.props.maxId} display='&raquo;' id={this.props.maxId} />
            </ul>
        </nav>;
    }
}