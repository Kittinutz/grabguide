import React from 'react'
import Header from "../../component/Header/Header";
import Footer from '../../component/Footer'
import enhance from './HOCMyplanselect'
const Myplanselect = (props)=>{
    return (
        <div>
            <Header/>

            Hello Selected 1
            <Footer/>
        </div>
    )
}
export default enhance(Myplanselect)