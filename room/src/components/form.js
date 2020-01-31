import React, { Component } from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../index.css'
import $ from 'jquery';
import axios from 'axios'
import Navbar from './Navbar';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            fname: '',
            Lemail: '',
            Semail: '',
            loginPassword: '',
            signupPassword: ''
        };
    }

    handleSignup = () => {
        $("#main").animate({left:"22.5%"},450);
        $("#main").animate({left:"30%"},500);
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"25%"},450);
    
        $("#signupform").animate({left:"17%"},450);
        $("#signupform").animate({left:"30%"},500);
        $("#signupform").css("visibility","visible");
    }

    handleLogin = () => {
    $("#main").animate({left:"77.5%"},450);
    $("#main").animate({left:"70%"},500);
    $("#signupform").css("visibility","hidden");
    $("#signupform").animate({left:"75%"},450);

    $("#loginform").animate({left:"83%"},450);
    $("#loginform").animate({left:"70%"},500);
    $("#loginform").css("visibility","visible");
    }

    handleChange=(e)=>
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin2=async (e)=>{
        e.preventDefault();
        console.log(this.state.Lemail + " " + this.state.loginPassword);
        var res = await axios.post(`http://localhost:5000/auth/login`, {
            email:this.state.Lemail,
            password:this.state.loginPassword
        });
        console.log(res.data);
        if(res.status === 200){
            localStorage.setItem("authenticated", res.data.authenticate);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            this.props.history.push('/')
        }
    }

    handleSignup2 = async (e)=>{
        e.preventDefault();
        var res = await axios.post(`http://localhost:5000/auth/register`, {
            name:this.state.fname,
            email:this.state.Semail,
            password:this.state.signupPassword
        });
        console.log(res)
        if(res.status === 200){
            localStorage.setItem("authenticated", true);
            localStorage.setItem("user", JSON.stringify(res.data));
            this.props.history.push('/')
        }
    }

    componentDidMount() {
        if(localStorage.getItem("authenticated") === true) { this.props.history.push('/') }
    }
    

    render()
    {
        return(
            <div>
            <Navbar />
            <div id="form-div">
            <div id="box">
                <div id="main">

                </div>
                <form id="loginform" onSubmit={this.handleLogin2}>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" name="Lemail" value={this.props.value} onChange={this.handleChange} /><br />
                    <input type="password" placeholder="Password" name="loginPassword" value={this.props.value} onChange={this.handleChange} /><br />
                    <button type="submit" name="button">Login</button>
                </form>
                <form id="signupform"  onSubmit={this.handleSignup2}>
                    <h1>SIGN UP</h1>
                    <input type="text" placeholder="Full Name" name="fname" value={this.props.value} onChange={this.handleChange} /><br />
                    <input type="email" placeholder="Email" name="Semail" value={this.props.value} onChange={this.handleChange} /><br />
                    <input type="password" placeholder="Password" name="signupPassword" value={this.props.value} onChange={this.handleChange} /><br />
                    <button type="submit">SIGN UP</button>
                </form>

                <div id="login_msg">
                Have an account?
                </div>

                <div id="signup_msg">
                Create an account?
                </div>
                <div>
                    <button type="button" name="button" id="login_btn" onClick={this.handleLogin}>LOGIN</button>
                    <button type="button" name="button" id="signup_btn" onClick={this.handleSignup}>SIGN UP</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
