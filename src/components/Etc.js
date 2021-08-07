import React, { Component } from 'react';

import '../css/Etc.css';

class Etc extends Component {
    render() {
        return (
            <div className="etc">
                <div>
                    <span>소개</span>
                    <span>채용 정보</span>
                    <span>블로그</span>
                    <span>도움말</span>
                    <span>API</span>
                    <span>개인정보처리방침</span>
                    <span>약관</span>
                    <span>인기계정</span>
                    <span>해시태그</span>
                    <span>위치</span>
                </div>
                <div>
                    <span>한국어</span>
                    <span>© 2021 Instagram from Facebook</span>
                </div>
                
            </div>
        );
    }
}

export default Etc;