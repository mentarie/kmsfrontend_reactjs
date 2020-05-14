import React, { Component } from 'react'; 
import { Layout, Row, Col, Table, Button, Modal} from 'antd'; 
import '../assets/css/portofolio.css' 
import '../assets/css/style.css' 
import InputForm from '../app/input-form.js'
import Form from 'antd/lib/form/Form';

const { Content } = Layout; // membuat konstanta content 
  
class KmsComponent extends Component{
    render(){
        const {columns,anak,showModal,initialData,handleOk,handleChange,handleCancel,handleCancelEdit,handleOkEdit} = this.props
        return(
            <Layout className="landing-container">
                <Content style={{ 
                    overflow: "hidden",
                    padding:15,
                    minHeight:280,
                    borderRadius:"8px",
                    }}
                > 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Data KMS Anak
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Platform pengisian data KMS oleh Admin Posyandu.
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
                                <Button key="tambah_data" className="editable-add-btn"  type="primary" onClick={()=>showModal()}>Tambah Data
                                </Button>
                                <br></br>
                                <br></br>
                                <Table columns={columns} dataSource={anak} />
                            </Col>
                        </Row>
                </Content>
                <Modal
                    title="Tambah Kategori"
                    visible={initialData.visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                <Form>
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Nama Anak</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='name'
                                    placeholder="Masukkan nama anak..."
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
                                <span className="auth-input-label text-black">Usia</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='age'
                                    placeholder="Masukkan usia anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.age}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Berat Badan</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='weight'
                                    placeholder="Masukkan berat badan anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.weight}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Tinggi Badan</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='height'
                                    placeholder="Masukkan tinggi badan anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.height}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Lokasi</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='location'
                                    placeholder="Masukkan lokasi ..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.location}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Institusi</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='institution'
                                    placeholder="Masukkan institusi..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.institution}
                                />
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Modal
                    title="Edit Kategori"
                    visible={initialData.visible_edit}
                    onOk={handleOkEdit}
                    onCancel={handleCancelEdit}
                >
                <Form>
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Nama Anak</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='name_edit'
                                    placeholder="Masukkan nama anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.name_edit}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Usia</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='age_edit'
                                    placeholder="Masukkan usia anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.age_edit}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Berat Badan</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='weight_edit'
                                    placeholder="Masukkan berat badan anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.weight_edit}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Tinggi Badan</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='height_edit'
                                    placeholder="Masukkan tinggi badan anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.height_edit}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Lokasi</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='location_edit'
                                    placeholder="Masukkan lokasi ..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.location_edit}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Institusi</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='institution_edit'
                                    placeholder="Masukkan institusi..."
                                    className="input-event mt-5 mb-20"
                                    onChange={handleChange}
                                    value={initialData.institution_edit}
                                />
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </Layout>
        );
    }
}

export default KmsComponent;