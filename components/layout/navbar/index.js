import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Image from 'next/image'
import Link from 'next/link'

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  border-bottom: 2px solid #f1f1f1;
  background-color: black;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top:0;
  z-index:20;

  .logo {
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    margin: 0 auto;

    @media (min-width: 768px){
      padding: 20px 0;
      margin-left:20px;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link href="/" passHref>
      <a className="logo">
        <Image src="/images/logo.jpg" height="50" width="190" quality={100}></Image>
      </a>
      </Link>
    <Burger />
    </Nav>
  )
}

export default Navbar