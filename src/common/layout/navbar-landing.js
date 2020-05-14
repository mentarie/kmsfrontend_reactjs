import React, { Component } from 'react';
import { Menu,Dropdown,message,Button } from 'antd';
import axios from 'axios';
import '../layout/css/navbar-style.css';
import {
  BarChartOutlined,
  PicLeftOutlined,
  SolutionOutlined,
  DownOutlined 
} from '@ant-design/icons';
import { history } from "../router/store";
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'calc',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  

  handleLogout = () => {
    let headers = {};
    let input = {};
    let token = localStorage.getItem("token");
    // console.log('token', token)
    if(token !== null){
      headers.Authorization = `Bearer ${token}`;
    }

    axios.post('http://localhost:8000/api/auth/logout',input,{headers : headers})
    .then(res=>{
      if(res.status === 200){
        message.success('Berhasil Logout');
        history.push("/signin");
      }
    })
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="3">
            <Button
                onClick={this.handleLogout}
            >Logout</Button>
        </Menu.Item>
      </Menu>
    );
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="calc">
          <BarChartOutlined />
          <Link to="/">Food Calculator</Link> 
        </Menu.Item>
        <Menu.Item key="news">
          <PicLeftOutlined />
          <Link to="/news">Health News</Link>
        </Menu.Item>
        <Menu.Item key="kms">
          <SolutionOutlined />
          <Link to="/kms">Data Anak KMS</Link>
        </Menu.Item>
        <Menu.Item key="github">
          <a href="https://github.com/mentarie/beritagizi_API" color = "#7e6752" target="_blank" rel="noopener noreferrer">
            Repositori Github
          </a>
        </Menu.Item>
        <Menu.Item key="logout">
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              Logout <DownOutlined />
            </a>
          </Dropdown>,
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
