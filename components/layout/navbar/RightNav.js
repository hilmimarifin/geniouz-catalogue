import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.1em;
  letter-spacing: 1px;
  z-index: 20;
  li {
    cursor: pointer;
    padding: 18px 10px;
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, clicked }) => {
 
  return (
    <Ul open={open}>
      <Link href="/panduan" passHref><li onClick={clicked}>Panduan</li></Link>
      <Link href="/kontak" passHref><li onClick={clicked}>Kontak</li></Link>
    </Ul>
  )
}

export default RightNav