import React, {Component, useEffect} from 'react'; 
import LandingComponent from '../modules/landing-component'

import axios from 'axios';

class LandingPage extends Component {
    state ={
        visible: false,
        makanan : []
    }

    componentDidMount(){
      // this.getGizi("pizza");

    }
    
    searchGizi=(value)=>{
      console.log(value);
      this.getGizi(value);
    };

    getGizi=(ingr)=>{
      axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${ingr}&app_id=897d1eb6&app_key=78e388625db412c233349cab2c3f68c6`)
      .then(res => {
        console.log(res.data.hints);
        this.setState({ makanan : res.data.hints})
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

    render(){

      const columns = [{
          title: 'Ukuran Penyajian',
          dataIndex: 'satuan_ingr',
          key: 'satuan_ingr',
        },{
          title: 'Makanan',
          dataIndex: 'makanan_ingr',
          key: 'makanan_ingr',
        },{
          title: 'Nutrisi',
          dataIndex: 'nutrisi_ingr',
          key: 'nutrisi_ingr',
        },
      ]

        const data_makanan =  this.state.makanan.map(({food,measures}, index) => ({
            food_id: food.foodId,
            makanan_ingr : food.label,
            nutrisi_ingr : ['Energi:  ', <b>{(food.nutrients.ENERC_KCAL).toFixed(1)}</b>,<b> kcal</b>,<br></br>,'Protein:  ',<b>{(food.nutrients.PROCNT).toFixed(1)}</b> ,<b> g</b>,<br></br>,'Lemak:  ' ,<b>{(food.nutrients.FAT).toFixed(1)}</b>, <b> g</b>,<br></br>, 'Karbohidrat:  ', <b>{(food.nutrients.CHOCDF).toFixed(1)}</b> ,<b> g</b>],
            satuan_ingr : '1 porsi/potong/buah',
        }))
        return (
            <LandingComponent
                initialData = {this.state} 
                showModal = {this.showModal} 
                handleCancel = {this.handleCancel} 
                handleOk = {this.handleOk} 
                data_makanan = {data_makanan} //merujuk konstanta data
                columns = {columns} 
                searchGizi = {this.searchGizi}
            />
        );
    }
}

export default LandingPage;