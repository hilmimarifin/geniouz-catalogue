import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Navbar from './navbar'
import Burger from './navbar/Burger'

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
 
    header {
      
    }
    .content {
        flex-grow: 2;
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
                </div>


                <footer>&#169; 2021 Geniouz official</footer>
            </StyledLayout>
        </div>
    )
}

export default Layout
