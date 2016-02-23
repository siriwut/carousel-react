import React from 'react';
import Caption from './Caption';
import Slide from './Slide';
import Navigation from './Navigation';


export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }

    tick() {
        (this.state.page === this.props.photos.length - 1) ?
        this.setState({ page: 0 }): this.setState({ page: this.state.page + 1 });
    }

    changePage(page) {
        this.setState({ page: page });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (
            <div className="carousel" >
                <Slide photos={this.props.photos} page={this.state.page} />
                <Caption text={this.props.photos[this.state.page].caption} />
                <Navigation 
                pageNumber={this.props.photos.length} 
                onUserClick={this.changePage.bind(this)} 
                active={this.state.page} />
            </div>
        );
    }
}

Carousel.defaultProps = {
    photos: [],
    interval: 3000
}
