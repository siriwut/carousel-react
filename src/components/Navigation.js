import React from 'react';

export default class Navigation extends React.Component {
    render() {
        let navBtns = [],
            slides = (this.props.slides && this.props.slides.length) ? this.props.slides : [];

        for (let i = 0; i < 6; i++) {
            navBtns.push(
                <div className="navigation-btn" >
					<span className="navigation-page" ></span>
				</div>
            );
        }

        return (
            <div className="navigation" onClick={this.props.handleClick}>
            	{navBtns}
			</div>
        );
    }
}
