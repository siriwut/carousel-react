require('normalize.css');
require('styles/App.css');

import React from 'react';
import Carousel from './Carousel';

export default class App extends React.Component {
    render() {
        return (
            <div className="index" >
      			<div className="content">
      				<Carousel />
      			</div>
     		</div>
        );
    }
}

App.defaultProps = {};