import React, {Component, useEffect} from 'react'; 
import SigninComponent from '../modules/signin-component'
import {message} from 'antd'
import {history} from '../common/router/store'
import axios from 'axios';

class SigninPage extends Component {
    state ={
        email : '',
        password : '',
    }

    handleSubmit = () =>{
      const params = {
        email : this.state.email,
        password: this.state.password,
      }
      console.log(params)
      axios.post('http://localhost:8000/api/auth/login',params)
      .then(res=>{
        console.log(res)
        if(res.status === 200){
          localStorage.setItem('token', res.data.access_token)
          message.success('Berhasil registrasi');
          history.push("/kms");
        }
      })
    }

  
    handleChange = (e) => {
      let target = e.target.name;
      let value = e.target.value;
      this.setState({
          [target]: value
      })
    }

    render(){
        return (
            <SigninComponent
                initialData = {this.state} 
                showModal = {this.showModal} 
                handleChange = {this.handleChange} 
                handleSubmit = {this.handleSubmit} 
            />
        );
    }
}

export default SigninPage;