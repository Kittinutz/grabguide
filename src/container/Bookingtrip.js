import React, {Component} from 'react';
import {Steps, Button, message,Icon} from 'antd';
import Step1 from '../component/wizard/step1';
import Step2 from '../component/wizard/step2';
import Step3 from '../component/wizard/step3';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: <Step1/>,
    icon:'user'
}, {
    title: 'Second',
    content: <Step2/>,
    icon:'solution'
}, {
    title: 'Last',
    content: <Step3/>,
    icon:'loading'
},{
    title: 'Last',
    content: <Step3/>,
    icon:'smile-o'
}];

class Bookingtrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }

    render() {
        const {current} = this.state;
        return (
            <div>
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="step-antd">
                            <Steps

                                current={current}>
                                {steps.map(item =>
                                    <Step key={item.title}
                                          title={item.title}
                                          icon={<Icon type={item.icon}/>}
                                                       />)}
                            </Steps>
                        </div>
                        <div className="steps-content">{steps[this.state.current].content}</div>
                        <div className="steps-action">
                            {
                                this.state.current > 0
                                &&
                                <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            }
                            {
                                this.state.current < steps.length - 1
                                &&
                                <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                this.state.current === steps.length - 1
                                &&
                                <Button type="primary"
                                        onClick={() => message.success('Processing complete!')}>Done</Button>
                            }

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Bookingtrip