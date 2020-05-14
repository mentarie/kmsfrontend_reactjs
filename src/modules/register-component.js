import React, { Component } from 'react'; 
import { Layout, Row, Col, Card , Button} from 'antd'; 
import '../assets/css/portofolio.css' 
import '../assets/css/style.css' 
import InputForm from '../app/input-form.js'
import Form from 'antd/lib/form/Form';

const { Meta } = Card;
const { Content } = Layout; // membuat konstanta content 

class RegisterComponent extends Component{
    
    render(){
        const{handleChange,handleSubmit, initialData}=this.props;
        
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Register
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Daftar Akun Kader Posyandu.
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#7d5e2a',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Form>
                                    <Row>
                                        <Col lg={24} md={24} sm={24}>
                                            <div>
                                                <span className="auth-input-label text-black">Nama Kader</span>
                                            </div>
                                            <div>
                                                <InputForm 
                                                    name='name'
                                                    placeholder="Masukkan nama anda"
                                                    className="input-event mt-5 mb-20"
                                                    onChange={handleChange}
                                                    value={initialData.name}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={24} md={24} sm={24}>
                                            <div>
                                                <span className="auth-input-label text-black">Email</span>
                                            </div>
                                            <div>
                                                <InputForm 
                                                    name='email'
                                                    placeholder="Masukkan alamat email"
                                                    className="input-event mt-5 mb-20"
                                                    onChange={handleChange}
                                                    value={initialData.email}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={24} md={24} sm={24}>
                                            <div>
                                                <span className="auth-input-label text-black">Password</span>
                                            </div>
                                            <div>
                                                <InputForm 
                                                    name='password'
                                                    placeholder="Masukkan password"
                                                    className="input-event mt-5 mb-20"
                                                    onChange={handleChange}
                                                    type="password"
                                                    value={initialData.password}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Button type="primary" onClick={()=> handleSubmit()} style={{textAlign:"center",margin:"16px auto"}}>Login</Button>
                                </Form>
                            </Col>
                           
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default RegisterComponent;