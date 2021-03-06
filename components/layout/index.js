import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Navbar from './navbar'
import Image from 'next/image'
import Burger from './navbar/Burger'

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    header {

    }
    .content {
        flex-grow: 2;
        margin-top: 90px;
        .contact {
            width: 50px;
            height: 50px;
            border-radius: 100px;
            text-align: center;
            position: fixed;
            bottom: 45px;
            right: 10px;
        }
        }
    footer {
        width: 100%;
        font-size: 0.9em;
        color: white;
        height: 40px;
        background-color: black;

        padding: 10px;
        text-align: center;
    }
`

const Layout = ({children, title}) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <StyledLayout>
                <header>
                    <Navbar/>
                </header>
                <div className="content">
                    {children}
                    <div className="contact">
                        <a href={`https://api.whatsapp.com/send?phone=6283844982006&`} target="_blank">
                            <Image src="/icons/whatsapp.svg" height="40" width="40"></Image>
                        </a>

                    </div>
                </div>


                <footer>&#169; 2021 Geniouz official</footer>
            </StyledLayout>
        </div>
    )
}

export default Layout
