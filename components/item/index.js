import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'


const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  /* padding-top: 5px;
  border-style: solid;
  border-radius: 13px;
  border-color: #b8b8b8; */
  border-width: 2px;
  .imagee{
      object-fit: cover;
  }
  .description{
      padding: 0;
     .title {
         text-align: center;
         font-size: 1em;
         margin-top: 20px;
         margin-bottom: 10px;
         text-transform: uppercase;
         letter-spacing: 1px;
         font-weight: 400px;
         
     } 
     .price {
        text-align: center;
        margin: 0;
        font-weight: 400;
        color: grey;
     }
  }
  
  `
const Item = ({image,name,price}) => {
  AOS.init({
    once : true,
    
  })
  return(
    <StyledItem>
     
        <Image 
          className="imagee" 
          src={image} width="190" 
          height="190" 
          layout="fixed"
          quality="100"
          data-aos="fade-up"
        ></Image>
        <div className="description">
            <h3 className="title"> {name} </h3>
            <div className="price">{price}</div>

        </div>
     
    </StyledItem>

  )
}
export default Item
