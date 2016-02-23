import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Slide extends React.Component {
    render() {
        let photo = null,
            photos = this.props.photos;

        photo = photos[this.props.page] || {};

        return (
            	<div className="slide" >
            		<ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
            			<img key={this.props.page} className="photo" src={photo.url || '' }  />
            		</ReactCSSTransitionGroup>
				</div>
        );
    }
}
