require('normalize.css');
require('styles/App.css');

import React from 'react';
import Carousel from './Carousel';

export default class App extends React.Component {
    render() {
        let photos = [
            { url: 'http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg' },
            { url: 'http://dreamatico.com/data_images/kitten/kitten-1.jpg' }
        ];

        return (
            <div className="index" >
      			<div className="content">
      				<Carousel photos={photos} />
      			</div>
     		</div>
        );
    }
}

App.defaultProps = {};
