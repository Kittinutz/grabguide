import React, {Component} from 'react';
import Icon from 'antd/lib/icon';
import logo from '../../asset/image/grabguide.png';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.icon) {
      return (
        
        <header>
          <div className="navbarbody">
            <div className="navbarbody navbar">
              <div className="logo">
                <img src={logo} alt=""/>
              </div>
              <div className="icon">
                <a onClick={this.props.handleClick}><Icon type={this.props.icon}
                                                          style={{fontSize: 20}}/></a>
              
              </div>
            </div>
          
          
          </div>
        </header>
      )
    } else {
      return (
        <header>
          <div className="navbarbody">
            <div className="navbarbody navbarinverse ">
              <div className="icon ">
                <a onClick={() => {
                  this.props.history.goBack();
                }}><Icon type="left" style={{fontSize: 20}}/></a>
              
              </div>
            </div>
          
          
          </div>
        </header>
      )
    }
  }
}

export default Header;