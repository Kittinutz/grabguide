import React, {Component} from 'react';
import composeHOC from './HOCBookingtrip';
import {connect} from 'react-redux';
import * as action from '../../action/index';
import {Steps, Button, message, Icon} from 'antd';
import Step1 from '../../component/wizard/step1';
import Step2 from '../../component/wizard/step2';
import Step3 from '../../component/wizard/step3';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/index';

const Step = Steps.Step;


const Bookingtrip = (props) => {
  const {authentication, bookingdetail, current, next, prev, SendToserver} = props;

  const steps = [{
    title: 'Booking',
    content: <Step1/>,
    icon: 'user'
  }, {
    title: 'Second',
    content: <Step2/>,
    icon: 'solution'
  }];
  return (
    <div key={current}>
      <Header/>
      <div className="content">
        <div className="container step">
          <div className="step-antd">
            <Steps
              progressDot
              current={current}>
              {steps.map(item =>
                <Step key={item.title}
                      title={item.title}
                      icon={<Icon type={item.icon}/>}
                />)}
            </Steps>
          </div>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {
              current > 0
              &&
              <Button style={{marginLeft: 8}} onClick={() => prev()}>
                Previous
              </Button>
            }
            {
              current < steps.length - 1
              &&
              <Button type="primary" onClick={() => next()}>Next</Button>
            }
            {
              current === steps.length - 1
              &&
              <Button type="primary"
                      onClick={SendToserver}>Done</Button>
            }
          
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  
  )
};
export default composeHOC(Bookingtrip);

// class Bookingtrip extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             current: 0,
//         };
//     }
//
//     next() {
//         const current = this.state.current + 1;
//         this.setState({current});
//     }
//
//     prev() {
//         const current = this.state.current - 1;
//         this.setState({current});
//     }
//     SendToserver = () =>{
//      message.success('Processing complete!');
//      this.props.booking(this.props.bookingdetail.stepone,()=>{
//          this.props.history.push('/myplan');
//      })
//
//     };
//     render() {
//         const {current} = this.state;
//         return (
//             <div key={current}>
//                 <Header/>
//                 <div  className="content">
//                     <div className="container step">
//                         <div className="step-antd">
//                             <Steps
//                                 progressDot
//                                 current={current}>
//                                 {steps.map(item =>
//                                     <Step key={item.title}
//                                           title={item.title}
//                                           icon={<Icon type={item.icon}/>}
//                                                        />)}
//                             </Steps>
//                         </div>
//                         <div className="steps-content">{steps[this.state.current].content}</div>
//                         <div className="steps-action">
//                             {
//                                 this.state.current > 0
//                                 &&
//                                 <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
//                                     Previous
//                                 </Button>
//                             }
//                             {
//                                 this.state.current < steps.length - 1
//                                 &&
//                                 <Button type="primary" onClick={() => this.next()}>Next</Button>
//                             }
//                             {
//                                 this.state.current === steps.length - 1
//                                 &&
//                                 <Button type="primary"
//                                         onClick={this.SendToserver}>Done</Button>
//                             }
//
//                         </div>
//                     </div>
//                 </div>
//                 <Footer/>
//             </div>
//         );
//     }
// }
// function mapStateToProps({bookingdetail}){
//     return {
//         bookingdetail,
//     }
// }
//
// export default connect(mapStateToProps,action)(Bookingtrip);