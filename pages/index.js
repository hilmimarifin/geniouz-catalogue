import React, { useEffect } from 'react'
import styled from 'styled-components'
import Carousel, {consts} from 'react-elastic-carousel'
import Kemeja from '../products_data/products'
import Baju_Muslim from '../products_data/baju_muslim'
import Item from '../components/item'
import Link from 'next/link'
import Head from 'next/head'
import Banner from '../components/banner'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const StyledHome = styled.div`
   display: flex;
   flex-direction: column;
      .slider {
        h1{
          text-transform: capitalize;
        }
      
     
        .category{
        margin-left: 0;
        text-align: center;
        font-size: 1.75em;
        margin-bottom: 0;
        } 
      }
  

   @media (min-width: 426px){
     display: flex;
     flex-direction: row;
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
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <>
      <Head>
        <title>Geniouz Official Catalogue</title>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="co6f9_gCPzNm6OpKGJoXsvoV9SwUBn1KgLP-g0iAxsQ" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Distro pakaian berkualitas dengan harga terjangkau berlokasi di Pasar Baru Banduung. Geniouz menjual berbagai macam variasi outwear seperti kemeja, kaos, jaket, dan berbagai jenis busana lainnya yang disesuaikan dengan trend fashion kekinian"/> 
        <meta name="keywords" content="kemeja, fashion, outfit, atasan, bawahan, jaket, jeans, celana, bandung, jawa barat, indonesia, geniouz, busana, outwear, jual " />  
        <meta name="title" content="Tempatnya Outfit Berkualitas dan Terjangkau | Geniouz"/>

            
        <meta property="og:url" content="https://geniouz.id/"/>
        <meta property="og:title" content="Tempatnya Outfit Berkualitas dan Terjangkau | Geniouz"/>
        <meta property="og:description" content="Distro pakaian berkualitas dengan harga terjangkau berlokasi di Pasar Baru Banduung. Geniouz menjual berbagai macam variasi outwear seperti kemeja, kaos, jaket, dan berbagai jenis busana lainnya yang disesuaikan dengan trend fashion kekinian"/>
        <meta property="og:image" content="/images/twitter.jpg"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://geniouz.id/"/>
        <meta property="twitter:title" content="Geniouz | Tempatnya Outfit Berkualitas dan Terjangkau"/>        
        <meta property="og:type" content="website"/>
        <meta property="twitter:description" content="Distro pakaian berkualitas dengan harga terjangkau berlokasi di Pasar Baru Banduung. Geniouz menjual berbagai macam variasi outwear seperti kemeja, kaos, jaket, dan berbagai jenis busana lainnya yang disesuaikan dengan trend fashion kekinian"/>
        <meta property="twitter:image" content="/images/twitter.jpg"/>

      
      </Head>
      <StyledHome>  
        <Banner image="/images/banner/banner flannel.jpg"
                categories="Flannel"
                bannerTitle="Flanel Shirt"
                postionX={225}
                postionY={140}
                aos="fade-right"
        />
        <Banner image="/images/banner/banner kemeja polos.jpg"
                categories="kemeja polos"
                bannerTitle="Casual Shirt"
                postionX={35}
                postionY={140}
                aos="fade-left"
        />
        <Banner image="/images/banner/Banner Muslim.jpg"
                categories="baju muslim"
                bannerTitle="Muslim Shirt"
                postionX={225}
                postionY={140}
                aos="fade-right"
        />
        {/* <Slider categories="Flannel" />
        <Slider categories="kemeja polos"/>
        <Slider categories="baju muslim"/> */}
      </StyledHome>
    </>
  )
}

const Slider = ({categories, title}) => {
  const products = Kemeja.filter(value => value.categories.includes(categories))


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
  return(
    <div className="slider">
          <Link href={`/categories/${categories}`}>
            <h1 className="category">{categories} </h1>
          </Link>
          <Carousel  renderArrow={myArrow} breakPoints={breakPoints} pagination={false} itemPadding={[5,5]}>
          {products.map(value => { 
                return (
                  <Link href={`/products/${value.code}`} key={value.code} passHref>
                  <a><Item  image={value.image} name={value.name} price={value.price}/></a>
                  </Link>
                )
              })
          }
          </Carousel>
      </div> 
  )
}

export default Home
