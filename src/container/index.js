import React, {Component} from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Tripcontent from  '../component/Tripcontent';
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="content">
                    <div className="content header">
                        <h1>content pic bg</h1>
                    </div>
                    <div className="recommencetripbyguide">
                        <h1>Recommence Trip</h1>
                    </div>
                    <Tripcontent/>
                    <div className="">
                        <h1>ggwp</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;