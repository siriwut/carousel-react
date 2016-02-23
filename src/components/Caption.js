import React from 'react';


export default class Caption extends React.Component {
    render() {
        return (
            <div className="caption" >
            	<h2 className="caption-text" >{this.props.text}</h2>
        	</div>
        );
    }
}
