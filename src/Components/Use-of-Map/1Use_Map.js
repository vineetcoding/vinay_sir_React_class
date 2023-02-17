import React, { Component } from 'react'
import "./1Use_Map.css";

export default class Use_Map extends Component {
  constructor(){
    super();
    this.state = {
      products:[
        { id: 1,
          image: "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1",
          name: "Mobile",
          discription:"It is mobile"
        },
        { id: 2,
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
          name: "Leptop",
          discription:"It is Leptop"
        },
        { id: 3,
          image: "https://cdn.mos.cms.futurecdn.net/CAo7Mx8d9yBnCVuFGEJ3R4.jpeg",
          name: "Headphone",
          discription:"It is headphone"
        },
        { id: 4,
          image: "https://www.cartoq.com/wp-content/uploads/2021/12/apple-car-render-fb.jpg",
          name: "car",
          discription:"It is a Car"
        },
        { id: 5,
          image: "https://i5.walmartimages.com/asr/9d0eb54b-9a47-436b-9092-d17b204964fb.6a5e181469e04cf8c426039ce55c6703.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
          name: "Calculator",
          discription:"It is a calculator"
        }
      ]}
  }
    
  render() {
    return (
      <div className='products_outer_div'>
        {this.state.products.map((value, index)=>{
          return(
            <div className="product_div">
              <img src={value.image}/>
              <h3>{value.name}</h3>
              <h4>{value.discription}</h4>
            </div>
          )
        })}        
      </div>
    )
  }
}
