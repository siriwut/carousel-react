import React from 'react';

export default class Navigation extends React.Component {
    render() {
        let navBtns = [];

        for (let i = 0, pn = this.props.pageNumber; i < pn; i++) {
            navBtns.push(
                <div key={i} className="navigation-btn" >
                    <span 
                    className={(this.props.active === i)? 'navigation-page active': 'navigation-page'} 
                    onClick={this.props.onUserClick.bind(this, i)}>
                    </span>
                </div>
            );
        }

        return (
            <div className="navigation" >
                {navBtns}
            </div>
        );
    }
}
