import React from 'react';
import Icon from 'antd/lib/icon';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div className="footerbody">
            <div className="footerbody footer">
                <Link to="/">
                    <div className="footericon">
                        <Icon type="appstore" style={{fontSize: 16}}/>
                        <h2>Home</h2>

                    </div>
                </Link>
                <Link to="/express">
                    <div className="footericon">
                        <Icon type="eye" style={{fontSize: 16}}/>
                        <h2>Express</h2>
                    </div>
                </Link>
                <Link to="/myplan">
                    <div className="footericon">
                        <Icon type="rocket" style={{fontSize: 16}}/>
                        <h2>My Plan</h2>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="footericon">
                        <Icon type="user" style={{fontSize: 16}}/>
                        <h2>Profile</h2>
                    </div>
                </Link>


            </div>
        </div>
    )
}
