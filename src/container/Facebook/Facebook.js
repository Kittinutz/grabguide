import React from 'react';
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/'
import {Icon,Button} from 'antd';

import composeHOC from './HOCFacebook';
const Facebook= (props) => {
    const {handleLogin} = props;
    return (
        <div>
            <Header {...props}/>
            <div className="content">
                <div className="container">
                    <div className="facebook">
                        <div className="textwelcome">
                            <p className="welcometext">Welcome to Grabguide Application</p>
                            <p>Grab your guide</p>
                            <p>Plase Login</p>
                            <div>
                                <Button onClick={handleLogin} size="large" type="primary" icon="facebook" >
                                    Login Facebook
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
};

export default composeHOC(Facebook);
