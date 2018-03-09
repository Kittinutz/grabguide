import React,{Component} from 'react';
import Icon from 'antd/lib/icon';
class Header extends Component{
    render(){
        return(
           <header>
               <div className="navbarbody">
                   <div className="navbarbody navbar">
                    <div className="logo">
                        <h1>GRAB GUIDE</h1>
                    </div>
                    <div className="icon">

                        <Icon type={this.props.icon} style={{fontSize:20}}/>
                    </div>
                   </div>


               </div>
           </header>
        )
    }
}
export default Header;