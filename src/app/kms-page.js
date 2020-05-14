import React, {Component} from 'react'; 
import KmsComponent from '../modules/kms-component'
import axios from 'axios';
import { message, Button, Modal } from 'antd';

const {confirm} = Modal;

class KmsPage extends Component {
    state ={
        visible: false,
        visible_edit : false,
        anak:[],
        document_id: '',
        name : '',
        age : '',
        weight : '',
        height: '',
        institution : '',
        location : '',
        name_edit : '',
        age_edit : '',
        weight_edit : '',
        height_edit: '',
        institution_edit : '',
        location_edit : '',
    }
   
    componentDidMount(){
        this.getAnak();
    }

    getAnak = () => {
      let headers = {};

      let token = localStorage.getItem("token");
      // console.log('token', token)
      if(token !== null)
          headers.Authorization = `Bearer ${token}`;
      let config = {
          headers : headers,
      }
      axios.get(`http://localhost:8000/api/datakms`,config)
      .then(res => {
        console.log(res);
        this.setState({anak: res.data.data.kms});
      })
    }

    handleChange = (e) => {
      let target = e.target.name;
      let value = e.target.value;
      this.setState({
          [target]: value
      })
    }

    insertAnak = () =>{
      let headers = {};

      let token = localStorage.getItem("token");
      // console.log('token', token)
      if(token !== null){
        headers.Authorization = `Bearer ${token}`;
      }
      const params = new FormData()
      params.set('name',this.state.name)
      params.set('age',this.state.age)
      params.set('weight',this.state.weight)
      params.set('height',this.state.height)
      params.set('location',this.state.location)
      params.set('institution',this.state.institution)

      axios.post('http://localhost:8000/api/createkms',params,{headers : headers})
      .then(res=>{
        if(res.status === 200){
          message.success('Data Anak berhasil Ditambahkan');
          this.componentDidMount();
        }
      })
    }

    editAnak = () => {
      let headers = {};

      let token = localStorage.getItem("token");
      // console.log('token', token)
      if(token !== null){
        headers.Authorization = `Bearer ${token}`;
      }
      const params = new FormData()
      // params.set('document_id',this.state.document_id)
      params.set('name',this.state.name_edit)
      params.set('age',this.state.age_edit)
      params.set('weight',this.state.weight_edit)
      params.set('height',this.state.height_edit)
      params.set('location',this.state.location_edit)
      params.set('institution',this.state.institution_edit)

      axios.post(`http://localhost:8000/api/update-kms/${this.state.document_id}`,params,{headers : headers})
      .then(res=>{
        if(res.status === 200){
          message.success('Data Anak berhasil Diubah');
          this.componentDidMount();
        }
      })
    }

    deleteAnak = () => {

      let headers = {};

      let token = localStorage.getItem("token");
      // console.log('token', token)
      if(token !== null){
        headers.Authorization = `Bearer ${token}`;
      }

      let config = {
        headers : headers,
    }
      const params = new FormData()

      axios.delete(`http://localhost:8000/api/delete/${this.state.document_id}`,config)
      .then(res=>{
        if(res.status === 200){
          message.success('Data Anak berhasil Dihapus');
          this.componentDidMount();
        }
      })

    }

    showModalEdit = ( document_id,nama_anak,usia_anak,bb,tb,lokasi,instansi,tanggal) => {
      console.log(document_id,nama_anak,usia_anak,bb,tb,lokasi,instansi,tanggal)
      this.setState({
        visible_edit: true,
        document_id : document_id,
        name_edit :nama_anak,
        age_edit : usia_anak,
        weight_edit : bb,
        height_edit: tb,
        location_edit : lokasi, 
        institution_edit : instansi,  
      });
    };
    

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.insertAnak();
        this.setState({
          visible: false,
        });
    };
    
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
        // visible_edit: true,
      });
    };
    //handleOk dan handleCancel digunakan untuk close modal

    handleOkEdit = e => {
      console.log(e);
      this.editAnak();
      this.setState({
        visible_edit: false,
      });
    };
    
    handleCancelEdit = e => {
      console.log(e);
      this.setState({
        visible_edit: false,
      });
    };

    showDeleteConfirm = (id) => {
      confirm({
          title: 'Yakin untuk menghapus ?',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk: () => {
              this.deleteAnak(id)
          },
          onCancel(){
              console.log('Cancel')
          }
      });
  }

    render(){
    
    const columns = [{
        title: 'Nama Anak',
        dataIndex: 'nama_anak',
        key: 'nama_anak',
        render: text => <a href="#">{text}</a>,
      }, {
        title: 'Usia',
        dataIndex: 'usia_anak',
        key: 'usia_anak',
      },
      {
        title: 'Berat Badan',
        dataIndex: 'bb',
        key: 'bb',
      }, {
        title: 'Tinggi Badan',
        dataIndex: 'tb',
        key: 'tb',
      }, {
        title: 'Instansi',
        dataIndex: 'instansi',
        key: 'instansi',
      }, {
        title: 'Lokasi',
        dataIndex: 'lokasi',
        key: 'lokasi',
      },{
        title: 'Tanggal',
        dataIndex: 'tanggal',
        key: 'tanggal',
      }, {
        title: 'Action',
        key: 'action',
        render: (anak) => (
          <span>
            <Button key="edit_data" className="editable-add-btn" type="primary" onClick={()=>this.showModalEdit(
            anak.document_id,anak.nama_anak,anak.usia_anak,anak.bb,anak.tb,anak.lokasi,anak.instansi,anak.tanggal,
            )}>Edit data</Button>
            <span className="ant-divider" />
            <Button key="edit_data" className="editable-add-btn" type="danger" onClick={()=>this.showDeleteConfirm(
            anak.document_id
            )}>Hapus data</Button>
            <span className="ant-divider" />
            <a href="#" className="ant-dropdown-link">
            </a>
          </span>
        ),
    }];
    
    const anak = this.state.anak.map(data => ({
        document_id : data.id,
        nama_anak : data.name,
        usia_anak : data.age,
        bb : data.weight,
        tb : data.height,
        instansi : data.institution,
        lokasi : data.location,
        tanggal : data.created_at,
    }))

  
    
      return (
            <KmsComponent
                initialData = {this.state} //ini maksudnya membuat varibel initalData yg isinya semua state yang telah dibuat
                showModal = {this.showModal} //ini maksudnya membuat variabel showmodal yang akan dipanggil, this.showmodal mksdnya itu manggil functin show modal, karena masih satu halaman pakainya this.
                handleCancel = {this.handleCancel} //sama seperti showmodal
                handleOk = {this.handleOk} //sama seperti showmodal
                columns = {columns}
                anak={anak}
                handleChange = {this.handleChange}
                insertAnak = {this.insertAnak}
                handleOkEdit={this.handleOkEdit}
                handleCancelEdit={this.handleCancelEdit}
            />
        );
    }
}

export default KmsPage;