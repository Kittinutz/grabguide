import React ,{Component} from 'react';
import _ from 'lodash';
class Guidecontent extends Component{
    constructor(props){
        super(props);
    }
    renderguide=()=>{
        return _.map(this.props.guides,value => {
            return (
                <div className="guide-placedhold">
                    <img src={value.image} alt=""/>
                    <h1>{value.name}</h1>

                </div>
            );
        });

    }
    render(){

        return(
            <div className="recommencetripbyguide">
                <h1>Guide Recommance</h1>
                <div className="guide-content">
                    <div  className="guiderecommence">
                        {this.renderguide()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Guidecontent