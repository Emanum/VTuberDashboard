import React from 'react';

class VideoElement extends React.Component{
    render(){
        return (
            <li>{this.props.name}</li>
        );
    }
}

export default VideoElement;