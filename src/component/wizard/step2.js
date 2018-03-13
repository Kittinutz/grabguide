import React ,{Component} from 'react';
import { Input } from 'antd';
import {connect} from 'react-redux';
import * as actions from '../../action';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
class Step2 extends Component{
    constructor(props){
        super(props);
        this.state={
          number:'',
            name:'',
            expiry:'',
            focused:'',
            cvc:'',

        }
    }
    componentWillUnmount(){
        console.log(this.state);
    }
    handlechange=(event)=>{
        let name = event.target.id;

        let v = event.target.value;
        this.setState({[name]:v,focused:name},()=>{console.log(this.state)})

    };

    render(){
        if(this.props.tripseleted){
            console.log(this.props.tripseleted)
        }
        return(
            <div>
                <Cards
                    number={this.state.number}
                    name={this.state.name}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc}
                    focused={this.state.focused}
                    preview={true}
                />
                <label>Number</label>
                <Input id="number" placeholder="number" onKeyUp={(e) => {
                    this.handlechange(e)
                }}/>
                <label>Name</label>
                <Input id="name" placeholder="name" onKeyUp={(e) => {
                    this.handlechange(e)
                }}/>
                <label>Cvc</label>
                <Input id="cvc" placeholder="cvc" onKeyUp={(e) => {
                    this.handlechange(e)
                }}/>
                <label>expiry</label>
                <Input id="expiry" placeholder="expiry" onKeyUp={(e) => {
                    this.handlechange(e)
                }}/>

            </div>
        )
    }
}
function mapStateToProps({tripseleted}) {
    return{
        tripseleted
    }

}
export default connect(mapStateToProps)(Step2);