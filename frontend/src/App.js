import './App.css';
import React from 'react';
import VideoContainer from './components/VideoContainer.jsx';
import Youtube from "./service/Youtube";

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            youtubeAPIKey: "AIzaSyBty8a5Hbr-NyZ2O4-EpAgB3PlQgL8eXpM",
            youtubeAPI: undefined
        }
        // window.gapi.load('client', () => {
        //     // this.setState()
        //     // this.state.youtubeAPILoaded =  true;
        //     new Youtube().loadData2()
        //         .then(function(response) {
        //             console.log(response.result);
        //         }, function(reason) {
        //             console.log('Error: ' + reason.result.error.message);
        //         });
        // });

    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Vtuber Dashboard</h1>
                </header>
                <main>
                    <nav>
                        <ul>
                            <li>Menu1</li>
                            <li>Menu2</li>
                            <li>Menu3</li>
                        </ul>
                    </nav>
                    <article>
                        <h2>live Vtuber</h2>
                        <VideoContainer json={"data/hololive.json"}/>
                        <VideoContainer json={"data/nijisanji.json"}/>
                        <h2>subscribed Vtuber</h2>
                    </article>
                    <aside>
                        <ul>
                            <li>Side1</li>
                            <li>Side2</li>
                            <li>Side3</li>
                        </ul>
                    </aside>
                </main>
                <footer>
                    <h4>Footer text</h4>
                </footer>
            </div>
        );
    }
}

export default App;
