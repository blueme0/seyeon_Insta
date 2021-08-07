import React, { Component } from 'react';
import story_th from "../images/story_th.png";

import '../css/Story.css';

class Story extends Component {
    render() {
        return (
            <div className="stories">
                <div className="story">
                    <div className="story_img">
                        <div className="story_img_border">
                            <img src={story_th} alt="story_th" />
                        </div>
                    </div>
                    <div className="story_title">하이라이트</div>
                </div>
            </div>
        );
    }
}

export default Story;
