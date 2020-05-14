import React, { Component } from 'react'; 
import { Layout, Row, Col, Input, Table } from 'antd'; 
import '../assets/css/landing.css' 

const { Content } = Layout; 
const { Search } = Input;

class LandingComponent extends Component{
    render(){
        const{data_makanan,columns,searchGizi}=this.props;
        const image1 = require(`../assets/images/picture.jpg`); 
        
        
        return(
            <Layout className="landing-container">
                {/*<Navbar/>  {}*/}
                <Content style={{ overflow: "hidden" }}> {}
                    <Row className="section-container" style={{marginBottom:"0px"}}>
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '80%', marginLeft:"100px"}}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="text-soft-blue title-big bold">Food Calculator</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>
                                    <div className="description-container desc-medium">
                                    Cari makanan untuk melihat detail gizinya!
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="button-section-1-container">                                
                                        <Search
                                        placeholder="Masukkan Nama Makanan"
                                        onSearch={value => searchGizi(value)}
                                        style={{ width: 320 }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                        <Row className="section-container">                
                            <Col lg={24} className="mt-20">
                                <br></br>
                                <br></br>
                                <Table columns={columns} dataSource={data_makanan} />
                            </Col>
                        </Row>
                </Content>
                
            </Layout>
        );
    }
}

export default LandingComponent;