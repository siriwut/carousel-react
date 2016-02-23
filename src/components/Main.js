require('normalize.css');
require('styles/App.css');

import React from 'react';
import Carousel from './Carousel';

export default class App extends React.Component {
    render() {

    	//virtual photos rest api
        let photos = [
            { 
            	url: 'http://placekitten.com/700/350?image=1', 
            	caption: 'Kitten1'
            },
            { 
            	url: 'http://placekitten.com/700/350?image=2',
            	caption: 'Kitten2'
            },
            { 
            	url: 'http://placekitten.com/700/350?image=3',
            	caption: 'Kitten3'
            },
            { 
            	url: 'http://placekitten.com/700/350?image=4',
            	caption: 'Kitten4'
            },
            { 
            	url: 'http://placekitten.com/700/350?image=5',
            	caption: 'Kitten5'
            }
        ];

        //Render Carousel
        return (
            <div className="index" >
      			<div className="content">
      				<Carousel photos={photos} interval={5000} />
      			</div>
     		</div>
        );
    }
}

App.defaultProps = {};
