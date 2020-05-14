import React, { Component } from 'react'; 
import { Layout, Row, Col, Card , Modal} from 'antd'; 
import '../assets/css/portofolio.css' 
import '../assets/css/style.css' 
import ButtonHome from '../common/component/button/button-home'; 

const { Meta } = Card;
const { Content } = Layout; // membuat konstanta content 

class NewsComponent extends Component{
    state = { visible: false }
    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    handleChange = (e) => {
        let target = e.target.name;
        let value = e.target.value;
        this.setState({
            [target]: value
        })
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        })
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        })
    }

    render(){
        const{data}=this.props;
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Berita Kesehatan Terbaru
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Berita kesehatan baru-baru ini di Indonesia.
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
                            <Col lg={300} className="mt-20">
                                <Row
                                    type="flex" gutter={[16,16]}
                                    className="card-why-container"
                                >
                                    
                                {
                                    data.map( data =>
                                        <Col lg={8} md={12} sm={12} className="">
                                            <Card
                                            hoverable
                                            >
                                                <div className="card-why-content" style={{marginLeft:"0px", marginTop:"0px", maxWidth:"none", borderRadius:"10px"}}>
                                                    <img style={{minHeight:"150px", minWidth:"360px", borderRadius:"8px"}} src={data.urlToImage}  className="card-why-image"/>
                                                    <br></br>
                                                    <br></br>
                                                    <Meta title={data.title} description={data.description} />
                                                    
                                                    <div className="mt-10">
                                                        <br></br>
                                                        <p>Penulis : {data.author} <br></br>
                                                        Tanggal Terbit : {data.publishedAt}</p>
                                                        <a >
                                                            <ButtonHome
                                                                text="Baca Selengkapnya ..."
                                                                background="#7e6752"
                                                                textColor="#fff"
                                                                borderRadius="8px"
                                                                className='button-participate'
                                                                onClick = {()=>this.showModal()}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    )
                                }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default NewsComponent;