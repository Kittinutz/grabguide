import React, {Component} from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate,
} from 'antd';
import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from '../action'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const place = [];
const activities = [];
class Myplan extends Component {
    constructor(props) {
        super(props);
        this.state={
            place:[],
        }
    }
    componentWillMount(){
        this.props.GetPlaceApi();
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleChange = (value)=>{
       console.log(value);

    };


    render() {
        // const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
            marginLeft: 20,
        };
        if(this.props.place.places){
           _.map(this.props.place.places,value=>{
               place.push(<Option key={value.id} value={value.id}>{value.name}</Option>)
           });
        }
        return (
            <div>
                <Header icon="plus-circle-o"/>
                <div className="content">
                    <div className="container">
                        <div className="form-myplan">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                {...formItemLayout}
                                label="Choose Your Place interesting"
                            >
                                <Select mode="multiple" placeholder="Please select Your Place interesting" onChange={this.handleChange}>
                                    {place}
                                </Select>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="Choose Your favourite Activities"
                            >
                                <Select mode="multiple" placeholder="Please select Your favourite Activities" onChange={this.handleChange}>
                                    {place}
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
}
function mapStateToProps({place}) {
    return{
        place,
    }

}

export default connect(mapStateToProps,actions)(Myplan);