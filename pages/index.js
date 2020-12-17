import React from 'react'
import styled from 'styled-components'
import Carousel, {consts} from 'react-elastic-carousel'
import Kemeja from '../products_data/kemeja'
import Item from '../components/item'
import Link from 'next/link'
import Head from 'next/head'


const StyledHome = styled.div`
   display: flex;
   flex-direction: column;
      .slider {
        .rec.rec-carousel{
         
        }
     
      .category{
      margin-left: 0;
      text-align: center;
      font-size: 1.75em;
      margin-bottom: 0;
      } 
   }
  

   @media (min-width: 426px){
    .slider{

      .category {
        margin-left: 40px;
        text-align: left;
      
      }
    }
  }
  
`

const RightButton = styled.div`
  padding: 55px 0;
  height: 170px;
  width: 40px;
  font-size: 20px;
  text-align: right;
  cursor: pointer;
`

const LeftButton = styled.div`
  padding: 55px 0;
  height: 170px;
  width: 40px;
  font-size: 20px;
  cursor: pointer;
`

const Home = () => {

  const planel = Kemeja.filter(value => value.categories.includes('planel'))
  const polos = Kemeja.filter(value => value.categories.includes('kemeja polos'))
  

 const  myArrow =({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? 
    <LeftButton onClick={onClick} disabled={isEdge}>
      <p>◄</p>
    </LeftButton> 
  
    : 
    <RightButton onClick={onClick} disabled={isEdge}>
      <p>►</p>
    </RightButton>
   
    
    return (
      <div>
        {pointer}
      </div>
      
    )
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 355, itemsToShow: 2},
    { width: 600, itemsToShow: 3 },
    { width: 780, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 1000, itemsToShow: 5 },
    { width: 1250, itemsToShow: 6, itemsToScroll: 2 },
    { width: 1400, itemsToShow: 6 },
    { width: 1750, itemsToShow: 7 },
  ]
  return (
    <>
      <Head>
        <title>Geniouz Official Catalogue</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />   
      </Head>
      <StyledHome>  
        <div className="slider">
          <h1 className="category">Flannel Shirt </h1>
          <Carousel  renderArrow={myArrow} breakPoints={breakPoints} pagination={false} itemPadding={[5,5]}>
          {planel.map(value => { 
                return (
                  <Link href={`/products/${value.code}`} key={value.code} passHref>
                  <a><Item  image={value.image} name={value.name} price={value.price}/></a>
                  </Link>
                )
              })
          }
          </Carousel>
        </div> 
        <div className="slider">
          <h1 className="category">Plain Shirt </h1>
          <Carousel  renderArrow={myArrow} breakPoints={breakPoints} pagination={false} itemPadding={[5,5]}>
          {polos.map(value => { 
                return (
                  <Link href={`/products/${value.code}`} key={value.code} passHref>
                  <a><Item  image={value.image} name={value.name} price={value.price}/></a>
                  </Link>
                )
              })
          }
          </Carousel>
        </div> 
        
      </StyledHome>
    </>
  )
}

export default Home
