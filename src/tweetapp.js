import React from 'react';
import ButtonPanel from "./buttonpanel";

class Tweetapp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tweetCount: 0,
            retweetCount:0,
            viewTweet:false,
        };
    }

    handleTweetClick = () => {
        this.setState({tweetCount: this.state.tweetCount + 1});
        this.setState({viewTweet: true});
    };

    handleReTweetClick = () => {
        this.setState({retweetCount: this.state.retweetCount + 1});
    };

    render() {

        let info ={
            handleTweet:this.handleTweetClick,
            handleRetweet:this.handleReTweetClick,
            TweetCount:this.state.tweetCount,
            RetweetCount:this.state.retweetCount,
            viewTweet:this.state.viewTweet,
        };

        return (

            <div>
                <ButtonPanel page = {info}/>
            </div>
        );
    }
}

Tweetapp.propTypes = {};

export default Tweetapp;