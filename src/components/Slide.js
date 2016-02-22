import React from 'react';

export default class Slide extends React.Component {
    render() {
        let photo = null,
            photos = this.props.photos;

        photo = photos[this.props.page] || {};

        return (
            <div className="slide" >
            	<img className="photo" src={photo.url || '' }  />
			</div>
        );
    }
}