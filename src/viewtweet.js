import React from 'react';

class ViewTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        if (this.props.data.enable == 'true') {
            return (
                <div>
                    <h3>View Tweet History</h3>
                    <ul> {
                        this.props.data.tweetStore.map((name, index) => {
                            return <li key={index}>{name}</li>})
                    }
                    </ul>
                </div>
            );

        } else {
            return null;
        }
    }
}

export default ViewTweet;
