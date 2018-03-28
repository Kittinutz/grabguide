import React, {Component} from 'react';
import Footer from '../../component/Footer/index';
import Header from '../../component/Header/Header';
import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from '../../action/index'
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, DatePicker
} from 'antd';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


function handleChange(value) {
    console.log(`Selected: ${value}`);
}

function onChange(date, dateString) {
    console.log(date, dateString);
}

class Myplan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: [],
            plus: false,
        }
    }

    componentWillMount() {
        this.props.GetPlaceApi();
        this.props.GetActivitiesAPi();
        this.props.querybbooking();

    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    HandleClickIcon = () => {
        this.setState({plus: !this.state.plus});
    };

    render() {
        console.log(this.props);
        const place = [];
        const activities = [];
        // const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
            marginLeft: 20,
        };
        if (this.props.place.places) {
            _.map(this.props.place.places, value => {
                place.push(<Option key={value.id} value={value.id}>{value.name}</Option>)
            });
        }
        if (this.props.activities.activities) {
            _.map(this.props.activities.activities, value => {
                activities.push(<Option key={value.id} value={value.id}>{value.name}</Option>)
            });
        }
        if (this.state.plus) {
            return (
                <div>
                    <Header icon="plus-circle-o" handleClick={this.HandleClickIcon}/>
                    <div className="content">
                        <div className="container">
                            <div className="form-myplan">
                                <Form onSubmit={this.handleSubmit}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Choose Your Place interesting"
                                    >
                                        <Select mode="multiple" placeholder="Please select Your Place interesting"
                                                onChange={handleChange}>
                                            {place}
                                        </Select>
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Choose Your favourite Activities"
                                    >
                                        <Select mode="multiple"
                                                placeholder="Please select Your favourite Activities"
                                                onChange={handleChange}>
                                            {activities}
                                        </Select>
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Pick you Appointment"
                                    >
                                        <DatePicker onChange={onChange}/>
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Number Of Person"
                                    >
                                        <Select key={2}
                                                placeholder="Number Of Person"
                                                onChange={handleChange}>
                                            <Option value="1">1</Option>
                                            <Option value="2">2</Option>
                                            <Option value="3">3</Option>
                                            <Option value="4">4</Option>
                                            <Option value="5">5</Option>
                                            <Option value="6">6</Option>
                                        </Select>
                                    </FormItem>

                                </Form>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
        if (this.props.mytrip.trip) {
            return (

                <div>
                    <Header icon="plus-circle-o" handleClick={this.HandleClickIcon}/>
                    <div className="content">
                        <div className="container">
                            <div className='imgmytrip'
                                 style={{backgroundImage: `url(\'${this.props.mytrip.trip.image}\')`}}>
                            </div>
                            <div className="mytripcontent">
                                <p>{this.props.mytrip.trip.name}</p>
                                <p>Appointment: {this.props.mytrip.appointment}</p>
                                <p>Price :{this.props.mytrip.price} THB</p>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        } else {
            return (
                <div>
                    <Header icon="plus-circle-o" handleClick={this.HandleClickIcon}/>
                    <div className="content">
                        <div className="container">

                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
    }
}

function mapStateToProps({place, activities, mytrip}) {
    return {
        place,
        activities,
        mytrip
    }

}

export default connect(mapStateToProps, actions)(Myplan);