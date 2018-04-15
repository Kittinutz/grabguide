import React, {Component} from 'react';
import enhance from './HOCMyplan'
import Footer from '../../component/Footer/index';
import Header from '../../component/Header/Header';
import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from '../../action/index'
import {
    Form, Select, Radio,
     DatePicker,Card,Avatar,Icon
} from 'antd';
import {Link} from 'react-router-dom'
const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Meta } = Card;


const Myplan =(props)=>{
    console.log(props)
    return (
      <div>
          Helloworld
      </div>
    )
}
export default enhance(Myplan)

// class Myplan extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             place: [],
//             plus: false,
//         }
//     }
//
//     componentWillMount() {
//     =
//         this.props.GetActivitiesAPi();
//         this.props.querybooking();
//
//     };
//
//
//     HandleClickIcon = () => {
//         this.props.history.push('/createtrip/')
//     };
//
//     render() {
//         console.log(this.props);
//
//         if (this.props.mytrip) {
//             return (
//
//                 <div>
//                     <Header icon="plus-circle-o" handleClick={this.HandleClickIcon}/>
//                     <div className="content">
//                         {
//                             _.map(this.props.mytrip,data=>{
//                                 console.log(data)
//                                 return(
//                                     <Card
//                                         key={data.id}
//                                         style={{ width: "100%" ,marginTop:"10%" }}
//                                         cover={<img alt={data.name} src={data.trip.image} />}
//                                         actions={[<Link to={`/myplan/${data.id}`}><Icon type="book" /></Link>, <Icon type="edit" />, <Icon type="ellipsis" />]}
//                                     >
//                                         <Meta
//                                             avatar={<Avatar src={data.trip.guide.image} />}
//                                             title={data.trip.name}
//                                             description={data.trip.description}
//                                         />
//                                     </Card>
//
//                                 )
//                             })
//
//                         }
//                     </div>
//                     <Footer/>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <Header icon="plus-circle-o" handleClick={this.HandleClickIcon}/>
//                     <div className="content">
//                         <div className="container">
//
//                         </div>
//                     </div>
//                     <Footer/>
//                 </div>
//             )
//         }
//     }
// }
//
// function mapStateToProps({place, activities, mytrip}) {
//     return {
//         mytrip
//     }
//
// }
//
// export default connect(mapStateToProps, actions)(Myplan);