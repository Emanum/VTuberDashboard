import React from 'react';

class Youtube {

    testCall(){
        window.gapi.load('client', () => {
            // 2. Initialize the JavaScript client library.
            window.gapi.client.init({
                'apiKey': "AIzaSyBty8a5Hbr-NyZ2O4-EpAgB3PlQgL8eXpM",
                // Your API key will be automatically added to the Discovery Document URLs.
                'discoveryDocs': ['https://youtube.googleapis.com/$discovery/rest'],
                // clientId and scope are optional if auth is not required.
                // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
                // 'scope': 'profile',
            }).then(function() {
                // 3. Initialize and make the API request.
                return window.gapi.client.youtube.channels.list({
                    "part": [
                        "snippet,contentDetails,statistics"
                    ],
                    "id": [
                        "UC_x5XG1OV2P6uZZ5FSM9Ttw"
                    ]
                })
            }).then(function(response) {
                console.log(response.result);
            }, function(reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        });
    }

    loadData2(){
        return window.gapi.client.init({
            'apiKey': "AIzaSyBty8a5Hbr-NyZ2O4-EpAgB3PlQgL8eXpM",
            // Your API key will be automatically added to the Discovery Document URLs.
            'discoveryDocs': ['https://youtube.googleapis.com/$discovery/rest'],
            // clientId and scope are optional if auth is not required.
            // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
            // 'scope': 'profile',
        }).then(function() {
            // 3. Initialize and make the API request.
            return window.gapi.client.youtube.channels.list({
                "part": [
                    "snippet,contentDetails,statistics"
                ],
                "id": [
                    "UC_x5XG1OV2P6uZZ5FSM9Ttw"
                ]
            })
        })
    }

    loadLiveVideos(channelID){
        return window.gapi.client.init({
            'apiKey': "AIzaSyBty8a5Hbr-NyZ2O4-EpAgB3PlQgL8eXpM",
            'discoveryDocs': ['https://youtube.googleapis.com/$discovery/rest'],
        }).then(function (){
            return window.gapi.client.youtube.search.list({
                "part": [
                    "snippet"
                ],
                "channelId": channelID,
                "eventType": "live",
                "maxResults": 25,
                "type": [
                    "video"
                ]
            })
        });
    }


}

export default Youtube;