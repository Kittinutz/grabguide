import React, {Component} from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Myplan extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        // const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
            marginLeft: 20,
        };
        return (
            <div>
                <Header icon="plus-circle-o"/>
                <div className="content">
                    <div className="container">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                {...formItemLayout}
                                label="Choose Your Place interesting"
                            >
                                <Select mode="multiple" placeholder="Please select You Place interestin">
                                    <Option value="red">Red</Option>
                                    <Option value="green">Green</Option>
                                    <Option value="blue">Blue</Option>
                                </Select>
                            </FormItem>
                            
                        </Form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Myplan;