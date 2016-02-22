import React from 'react';
import Caption from './Caption';
import Slide from './Slide';
import Navigation from './Navigation';


class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel" >
                <Slide />
                <Caption />
                <Navigation />
            </div>
        );
    }
}

export default Carousel;
