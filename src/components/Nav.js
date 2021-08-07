import React, { Component } from 'react';

import '../css/Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="navi">
                <table>
                    <tr>
                        <td className="nav_blank1"></td>
                        <td className="nav_posts">
                            게시물
                        </td>
                        <td className="nav_blank2"></td>
                        <td className="nav_tagged">
                            태그됨
                        </td>
                        <td className="nav_blank3"></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Nav;