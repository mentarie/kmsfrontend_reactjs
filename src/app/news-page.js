import React, {Component} from 'react'; 
import NewsComponent from '../modules/news-component'

import axios from 'axios';

class NewsPage extends Component {
    state ={
        visible: false,
        berita: []
    }
   
    componentDidMount(){
      this.getNews();
    }
    
    getNews=()=>{
      axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=67ad75d27dcc4815b2c1925aa55d7b4f`)
      .then(res => {
        // const persons = res.data;
        console.log(res.data.articles);
        this.setState({ berita: res.data.articles});
      })
    };

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    //handleOk dan handleCancel digunakan untuk close modal

    render(){
        const data =  this.state.berita.map(data => ({
            author: data.author,
            title : data.title,
            urlToImage : data.urlToImage,
            description : data.description,
            publishedAt : data.publishedAt,
            content : data.content,
        }))
        return (
            <NewsComponent
                initialData = {this.state} //ini maksudnya membuat varibel initalData yg isinya semua state yang telah dibuat
                showModal = {this.showModal} //ini maksudnya membuat variabel showmodal yang akan dipanggil, this.showmodal mksdnya itu manggil functin show modal, karena masih satu halaman pakainya this.
                handleCancel = {this.handleCancel} //sama seperti showmodal
                handleOk = {this.handleOk} //sama seperti showmodal
                data = {data} //merujuk konstanta data 
            />
        );
    }
}

export default NewsPage;
