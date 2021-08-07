import React, { Component } from 'react';
import photo1 from "../images/photo_1.jpg";
import photo2 from "../images/photo_2.jpg";
import photo3 from "../images/photo_3.jpg";
import photo4 from "../images/photo_4.jpg";
import photo5 from "../images/photo_5.jpg";
import photo6 from "../images/photo_6.jpg";
import photo7 from "../images/photo_7.jpg";
import photo8 from "../images/photo_8.jpg";
import photo9 from "../images/photo_9.jpg";
import heart from "../images/heart.png";
import reply from "../images/reply.png";

import '../css/Posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(props);
    }
    handleSave(event) {
        console.log(this.event);
    }

    render() {
        return (
            <div className="posts">
                <table>
                    <tr>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo1} alt="photo1" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    50
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    9
                                </span>
                            </div>
                        </td>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo2} alt="photo2" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    27
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    10
                                </span>
                            </div>
                        </td>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo3} alt="photo3" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    63
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    5
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo4} alt="photo4" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    48
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    3
                                </span>
                            </div>
                        </td>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo5} alt="photo5" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    76
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    15
                                </span>
                            </div>
                        </td>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo6} alt="photo6" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    52
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    8
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo7} alt="photo7" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    47
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    7
                                </span>
                            </div>
                        </td>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo8} alt="photo8" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    72
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    23
                                </span>
                            </div>
                        </td>
                        <td className="post">
                            <div className="photodiv">
                                <img className="photo" src={photo9} alt="photo9" />
                            </div>
                            <div className="postInfo">
                                <span className="hearts">
                                    <img src={heart} alt="heart" />
                                    23
                                </span>
                                <span className="replies">
                                    <img src={reply} alt="reply" />
                                    2
                                </span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Posts;