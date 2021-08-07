import React, { Component } from 'react';
import logo_profile from "../images/logo_profile.png";
import '../css/Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile_img">
                    <div className="profile_img_border">
                        <img src={logo_profile} alt="profile_img" />
                    </div>
                </div>
                <div className="profile_info">
                    <div className="profile_id">
                        <span className="profile_id_text">seye0n_</span>
                        <span className="profile_follow">팔로우</span>
                        <span className="profile_more">▼</span>
                        <span className="profile_etc">···</span>
                    </div>
                    <div className="profile_num">
                        <span className="profile_num_post">
                            <span className="profile_text_kor">게시물</span>
                            <span className="profile_text_num">9</span>
                        </span>
                        <span className="profile_num_follower">
                            <span className="profile_text_kor">팔로워</span>
                            <span className="profile_text_num">240</span>
                        </span>
                        <span className="profile_num_follow">
                            <span className="profile_text_kor">팔로우</span>
                            <span className="profile_text_num">214</span>
                        </span>
                    </div>
                    <div className="profile_text">
                        <div className="profile_text_name">세연</div>
                        <div className="profile_text_intro">coding test</div>
                        <div className="profile_text_address">m.blog.naver.com/blueme_</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;