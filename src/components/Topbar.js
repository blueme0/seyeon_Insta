import React, { Component } from 'react';
import logo_insta from "../images/logo_insta.png";
import logo_search from "../images/logo_search.png";
import logo_home from "../images/logo_home.png";
import logo_dm from "../images/logo_dm.png";
import logo_news from "../images/logo_news.png";
import logo_heart from "../images/logo_heart.png";
import logo_profile from "../images/logo_profile.png";

import '../css/Topbar.css';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
                <div className="topbar_logo">
                    <img src={logo_insta} alt="logo_insta"/>
                </div>
                <div className="topbar_search">
                    <img src={logo_search} alt="logo_search" />
                    <span className="searchbar_text">검색</span>
                </div>
                <div className="topbar_icon">
                    <img src={logo_home} alt="logo_home" />
                    <img src={logo_dm} alt="logo_dm" />
                    <img src={logo_news} alt="logo_news" />
                    <img src={logo_heart} alt="logo_heart" />
                    <img src={logo_profile} alt="logo_profile" />
                    
                </div>
            </div>
        );
    }
}

export default Topbar;