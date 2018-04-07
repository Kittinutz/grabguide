import React from 'react'
import enhance from './HOCActivities'
import entertain from '../../../asset/icon/001-drama.png'
import photo from '../../../asset/icon/002-photos.png'
import relax from '../../../asset/icon/003-exercise.png'
import culture from '../../../asset/icon/004-great-buddha-of-thailand.png'
import festival from '../../../asset/icon/005-stage.png'
import watersport from '../../../asset/icon/006-rowing.png'
import sport from '../../../asset/icon/007-football.png'
import cooking from '../../../asset/icon/008-salad.png'
import street from '../../../asset/icon/009-stand.png'
import shopping from '../../../asset/icon/010-cart.png'
import adventure from '../../../asset/icon/011-climbing.png'
import history   from '../../../asset/icon/012-book.png'
import farming from '../../../asset/icon/nature.png'
import Spinner from "../../../component/Spinner/index";
const ROOT_URL = "http://dev.werapun.com:5011";

const Activities = (props)=>{
    const {activities} = props;
    console.log(props)
    if(activities) {
        return (
            <div className="content">
                <div className="container">
                    <div className="content-header">
                        <h3> Choose your Activities</h3>
                    </div>

                    <div className="activitiesshowdown">
                        {
                            activities.map(data => {
                                return (
                                   <ActivitiesItem key={data.id}
                                                   id={data.id}
                                                   image={data.image}
                                                   name={data.name}
                                                   {...props}/>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }else{
        return <Spinner/>
    }
}
const ActivitiesItem = (props)=>{
    const {id,image,name,history,handlcerClick} = props

    return (
                <div className="imageactivities">
                    <img  src={`${ROOT_URL}/${image}`}
                          alt={name}
                          onClick={handlcerClick}
                          id={id}
                    />
                    <p>{name}</p>
                </div>
    )
}
export default enhance(Activities);