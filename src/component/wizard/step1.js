import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../action';

import {Input, DatePicker, Icon, InputNumber} from 'antd';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
const price = 800;
function onChange(value) {
    console.log('changed', value);
}

class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            surname: '',
            email: '',
            price:1234,
            child:0,
            adult:1,
            priceadult:1234,
            pricechild:1234/2,
            totaladultprice:1234,
            totalchildprice:0,
            totalprice:1234,
            date:''


        }
    }

    componentWillUnmount() {
        this.props.Step1(this.state);

    }
    componentDidMount(){
        console.log(this.props);
        if(this.props.tripseleted.tripseleted){
            this.SetPrice();
        }
    }

    handlechange = (event) => {
        let name = event.target.id;
        let v = event.target.value;
        this.setState({[name]: v}, () => {
            console.log(this.state)
        })
    };
    handleClick = () => {
        console.log(this.state);
    };
    handleChangeAdult=(value)=>{

        this.setState({adult:value,totaladultprice:this.state.priceadult*value},()=>{
            this.setState({totalprice:this.state.totaladultprice+this.state.totalchildprice});
        })
    };
    handleChangechild=(value)=>{

        let adp = this.state.totaladultprice;
        let cdp = this.state.totalchildprice;
        cdp = this.state.pricechild*value;
        let total = adp+cdp;
        console.log(this.state,value,adp,cdp,total);
        this.setState({child:value,totalchildprice:this.state.pricechild*value},()=>{
            this.setState({totalprice:total});
        });

    };
    SetPrice = () =>{
        let price = parseInt(this.props.tripseleted.tripseleted.price);
        this.setState({price:price,priceadult:price,pricechild:price/2,totalprice:price});


    };
    // componentWillUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState)
    // }
    datepicker =(data ,dateString)=>{
       this.setState({date:dateString});
}

    render() {
        // if(this.props.tripseleted.tripseleted){
        //     this.SetPrice();
        // }
        const vet = (this.state.totalprice*0.07).toFixed(1);
        const totalprice = this.state.totalprice;
        const ggwp = Number((vet));
        return (
            <div className="from-step1">
                <label>Name</label>
                <Input id="name" placeholder="Surname" onKeyUp={(e) => {
                    this.handlechange(e)
                }}/>
                <label>Surname</label>
                <Input id="surname" placeholder="Surname" onKeyUp={(e) => {
                    this.handlechange(e)
                }}/>
                <label>Email</label>
                <Input id="email" placeholder="Email" onKeyUp={(e) => {
                    this.handlechange(e)
                }}/>
                <label>Trip Date</label><br/>
                <DatePicker onChange={this.datepicker}/><br/>
                <div className="inputnumber">
                    <div className="inputdetail">
                        <label><Icon type="user-add"/>Adult</label>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={this.handleChangeAdult}/>
                    </div>
                    <div className="inputdetail">
                        <label><Icon type="user-add"/>Child</label>
                        <InputNumber min={0} max={10} defaultValue={0} onChange={this.handleChangechild}/>
                    </div>
                </div>
                <div className="trip-cost">
                    <div className="trip-cost-detail">
                        <p>Trip cost:</p><p>{totalprice} THB</p>
                    </div>
                    <div className="trip-cost-detail">
                        <p>Trip cost:</p><p>{vet} THB</p>
                    </div>
                    <div className="trip-cost-detail">
                        <p>Total price:</p><p>{totalprice+ggwp} THB</p>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps({bookingdetail,tripseleted}) {
    return {
        bookingdetail,
        tripseleted
    }
}

export default connect(mapStateToProps, actions)(Step1);