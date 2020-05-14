import React, {Component, useEffect} from 'react'; 
import RegisterComponent from '../modules/register-component'
import {message} from 'antd'
import axios from 'axios';
import { history } from "../common/router/store";

class RegisterPage extends Component {
    state ={
        name : '',
        email : '',
        password : '',
    }

    componentDidMount(){

    }

    handleChange = (e) => {
      let target = e.target.name;
      let value = e.target.value;
      this.setState({
          [target]: value
      })
    }

    handleSubmit = () => {
      const params = {
        name : this.state.name,
        email : this.state.email,
        password: this.state.password,
      }
      console.log(params)
      axios.post('http://localhost:8000/api/auth/register',params)
      .then(res=>{
        console.log(res)
        if(res.status === 200){
          localStorage.setItem('token', res.data.access_token)
          message.success('Berhasil registrasi');
          history.push("/kms");
        }
      })
    }
   

    render(){
        return (
            <RegisterComponent
                initialData = {this.state}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
        );
    }
}

export default RegisterPage;