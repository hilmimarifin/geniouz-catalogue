import { useRouter } from 'next/router'
import React from 'react'
import Products_data from '../../products_data/products'
import Baju_Muslim from '../../products_data/baju_muslim'
import Item from '../../components/item'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Categories = () => {
    const router = useRouter()
    const {categories} = router.query

    const cat = Products_data.filter(value => value.categories.includes(categories))
    return (
        <div>
            <Head>
                <title>Kategori {categories}</title>
            </Head>
            <StyledCategories>
                <h1>{categories}</h1>
                <div className="product-list">
                    {cat.map(value => { 
                            return (
                            <Link href={`/products/${value.code}`} key={value.code} passHref>
                            <a><Item  image={value.image} name={value.name} price={value.price}/></a>
                            </Link>
                            )
                        })
                    }
                </div>
            </StyledCategories>
        </div>
    )
}

    const StyledCategories = styled.div`
        display: flex;
        flex-direction: column;
        h1 {
            text-align: center;
            border-style: solid;
            display: inline;
            padding: 10px;
            width: 230px;
            align-self: center;
            text-transform: capitalize;
        }
        .product-list{
            display:flex;
            flex-flow: row wrap;
            justify-content: center;
            a {
                margin: 0px
            }
        }

        @media (min-width: 768px){
            .product-list{
                a{
                    margin: 10px 20px;
                }
            }
        }

    `

export default Categories
