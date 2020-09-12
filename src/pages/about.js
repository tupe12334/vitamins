import React from 'react';
import AboutText from '../components/AboutText'
import SignupForm from '../components/SignupForm'
export default class MainPage extends React.Component{
    constructor(){
super();
    }
    render(){
        return(
            <div dir="rtl">
                <AboutText/>
                <SignupForm/>
            </div>
        )
    }
}