import React from 'react';
import VideoElement from './VideoElement.jsx';
import Youtube from "../service/Youtube";

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
                    this.setState({
                        isLoaded: true,
                        creatorGroupName: result.name,
                        creators: result.creators,
                        liveStreams: [],
                    });
                    this.loadLiveVideos();
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            );
    }

    loadLiveVideos(){
        let self = this;
        this.state.creators
            .filter( creator => creator.platform === 'youtube')
            .forEach(creator => {
                window.gapi.load('client', () => {
                    new Youtube().loadLiveVideos(creator.channelID)
                        .then(function(response) {
                            console.log(response.result);
                            // self.setState({isLoaded: true})
                            // self.setState({
                            //     liveStreams: [...this.state.liveStreams, response.items]
                            // });
                        }, function(error) {
                            self.setState({
                                isLoaded: false,
                                error
                            });
                        });
                });
            });
    }

    render(){
        const { error, isLoaded, creators, creatorGroupName , liveStreams} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section>
                    <h2>{creatorGroupName} - Member</h2>
                    <ul>
                        {
                            creators.map(creator => (
                                <VideoElement name={creator.name}/>
                            ))
                        }
                    </ul>
                    <h3>{creatorGroupName} - current Live shows</h3>
                    <ul>
                        {
                            liveStreams.map(stream => (
                                <VideoElement name={stream.snippet.channelTitle + stream.snippet.title}/>
                            ))
                        }
                    </ul>
                </section>
            );
        }
    }
}

export default VideoContainer;