import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Products_data from '../../products_data/kemeja'
import Head from 'next/head'

    export async function getStaticPaths() {
        const res = await Products_data
        const paths = res.map((products) => `/products/${products.code}`)
    
        return { paths, fallback: false }
    }

    export async function getStaticProps() {

    const res = await Products_data
    const products = await res
  
    return { props: { products } }
    }

const Products = ({products}) => {
    const router = useRouter()
    const { pid } = router.query
    const product0 =  products
    const product = product0.find(value => value.code === pid)

   
    return (
        <>
            <Head>
                <title>Geniouz | {product.name}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />   
            </Head>
            <StyledProducts>
                <div className="firstBlock">
                    <div  className="image">
                        <Image        
                            src={product.image}
                            width= "330"
                            height= "330" 
                            quality= {100}
                    
                        ></Image>
                    </div>
                    <div className="description">
                        <div className="title"><h1>{product.name}</h1></div>
                        <div className="brand">by : Geniouz</div>
                        <div className="price">{product.price}</div>
                        <div className="sizeProduct">
                            <h3>Size</h3>
                            <div className="sizeBoxes">
                                {product.size.map(value => { return <span key={value} className="sizeBox">{value}</span>}) }
                            </div>
                        </div>
                        <div className="socmed">
                            <a className="socmedItem" href="https://shopee.co.id/geniouz.official" target="_blank">Shopee</a>
                            <a  className="socmedItem" href={`https://api.whatsapp.com/send?phone=6283844982006&text=Saya%20tertarik%20untuk%20membeli%20${product.name}`} target="_blank">
                                Whatsapp
                            </a>
                            <div className="socmedItem">Tokped</div>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="title">Detail</div>
                    <p className="desc">
                        {product.name} dibuat dengan menggunakan 100% bahan cotton dengan jahitan yang rapi. Kemeja klasik untuk segala acara. Regular-fit, motif plaid dan checkered penuh gaya untuk tampilan kasual.<br></br><br></br>

                        - Bahan katun 100% pre-washed untuk tekstur yang lembut<br></br>
                        - Bahan Flannel klasik memberikan kenyamanan yang solid dan tahan lama<br></br>
                        - Proses fine brushing menambah kelembutan<br></br>
                        - Jahitan yang kuat dan rapi (Side Seamed)<br></br>
                        - Kerah jenis straight point collar<br></br>
                        - Satu saku pada bagian dada kiri<br></br>
                        - Potongan Regular Fit Unisex<br></br><br></br>

                        Panduan Ukuran Baju<br></br>
                        Lebar baju diukur mulai dari ujung kiri sampai ke ujung kanan, sedangkan panjang baju diukur mulai dari bahu sampai ke ujung bawah kemeja. Toleransi ukuran kurang lebih 1cm - 2cm. Jika menginginkan baju yang lebih longgar, harap pilih satu ukuran lebih besar.<br></br><br></br>

                        Size Chart Shirt<br></br>
                        S (L 49cm x P 69cm)<br></br>
                        M (L 51cm x P 71cm)<br></br>
                        L (L 53cm x P 73cm)<br></br>
                        XL (L 55cm x P 75cm)
                    </p>
                </div>
            
            </StyledProducts>
        </>
    )
}

    const StyledProducts = styled.div`
        display: flex;
        flex-direction: column;
        .firstBlock{
            display: flex;
            flex-direction: column;
            .image {
                text-align: center;
            }
            .description{
                background-color: #F8F3F0;
                margin: 0 20px;
                text-align: center;
                .title {
                    border-style: solid;
                    margin-top: 15px;
                    margin-left: 15px;
                    margin-right: 15px;
                    text-align: center;
                }
                .brand {
                    margin-top: 60px;
                    font-weight: bold;
                    font-size: 1.4em;
                }
                .price {
                    color: red;
                    font-size: 1.4em;
                    margin-top: 10px;
                }
                .sizeProduct {
                    margin-top: 40px;
                    h3 {
                        margin: 4px;
                    }
                    .sizeBoxes{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .sizeBox{
                            width: 40px;
                            height: 40px;
                            border-style: solid;
                            margin: 0 10px;
                            padding: 8px 0;
                        }
                    }
                }
                .socmed {
                    display: flex;
                    flex-direction: row;
                    margin-top: 30px;
                    background-color: black;
                    color: white;
                    height: 35px;
                    .socmedItem{
                        flex: 1;
                        justify-content: center;
                        align-items: center;
                        padding: 7px 0;
                    }
                }
            }
        }
        .detail {
            background-color: #F8F3F0;
            margin-top: 40px;
            .title {
                margin-left: auto;
                margin-right: auto;
                margin-top: 15px;
                font-weight: bold;
                font-size: 1.5em;
                border-style: solid;
                height: 40px;
                width: 100px;
                padding: 4px 12px;
            }
            .desc {
                margin: 20px 20px;
                line-height: 1.5;
                font-size: 13px;
            }
        }

        @media (min-width: 768px){
            display: flex;
            flex-direction: column;
            .firstBlock{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-top: 40px;
                .image {
                    border-style: solid;
                    height: 388px;
                    padding-top: 30px;
                }
                .description{
                    width: 400px;
                    .title {}
                    .brand {}
                    .sizeProduct {
                        .sizeBoxes {
                            display: flex;
                            .sizeBox {
                                border-style: solid;
                            }
                        }
                    }
                    .socmed {}
                }
            }
            .detail {
                .title {
                }
                .desc {
                    margin: 20px 200px;
                }
            }
        }
    `

export default Products