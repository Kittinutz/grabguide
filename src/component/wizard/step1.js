import React ,{Component} from 'react';
import { Input } from 'antd';
class Step1 extends Component{
    constructor(props){
        super(props)
            this.state={
                name:'',
                surname:'',
                email:'',

        }
    }
    componentWillUnmount(){
        console.log(this.state);
    }
    handlechange=(event)=>{
        let name = event.target.id;
        let v = event.target.value;
        this.setState({[name]:v},()=>{console.log(this.state)})
    };
    handleClick = ()=>{
        console.log(this.state);
    }
    render(){
        console.log('step1');
        return(
            <div>
                <label >Name</label>
                <Input id="name" placeholder="Surname" onKeyUp={(e)=>{this.handlechange(e)}}/>
                <label >Surname</label >
                <Input id="surname" placeholder="Surname" onKeyUp={(e)=>{this.handlechange(e)}}/>
                <label >Email</label>
                <Input id="email" placeholder="Email" onKeyUp={(e)=>{this.handlechange(e)}} />
            </div>
        )
    }
}
export default Step1;