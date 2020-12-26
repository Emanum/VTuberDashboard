import React from 'react';
import VideoElement from './VideoElement.jsx'

class VideoContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            creatorGroupName: "",
            creators: []
        }
    }

    componentDidMount(){
        fetch(this.props.json)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.vtuber);
                    this.setState({
                        isLoaded: true,
                        creatorGroupName: result.name,
                        creators: result.creators
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            );
    }

    render(){
        const { error, isLoaded, creators, creatorGroupName } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section>
                    <h2>{creatorGroupName}</h2>
                    <ul>
                        {
                            creators.map(creator => (
                                <VideoElement name={creator.name}/>
                            ))
                        }
                    </ul>
                </section>
            );
        }
    }
}

export default VideoContainer;