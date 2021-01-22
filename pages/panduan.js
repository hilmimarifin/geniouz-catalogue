import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <>
            <StyledAbout>
                <h2>Panduan Pelanggan</h2>
                <div className="tatacara">
                    <h3>Tata Cara Pembelian</h3>
                    <ol>
                        <li>Pilih produk yang akan dibeli</li>
                        <li>Pilih metode pembelian yang akan digunakan. Kami menyediakan 3 metode yaitu: Shopee, Tokopedia, dan transfer langsung dengan menghubungi via Whatsapp</li>
                        <li>Apabila produk tidak ditemukan pada marketplace yang tersedia, hubungi admin melalui Whatsapp yang tertera.</li>
                    </ol>
                </div>
                <div className="metode">
                    <h3>Metode Pembayaran</h3>
                    <p>Melalui transfer Bank BCA dan Mandiri. Untuk nomor rekening harap komunikasikan terlebih dahulu pada admin</p>
                </div>
                <div className="pengiriman">
                    <h3>Pengiriman</h3>
                    <ol>
                        <li>Untuk pengiriman di luar Kota Bandung menggunakan JNE dan J&T</li>
                        <li>Untuk wilayah Kota Bandung dapat menggunakan Go-send atau COD</li>
                    </ol>
                </div>
            </StyledAbout>
        </>
    )
}

const StyledAbout = styled.div`
    margin:0 40px;
    line-height: 1.5;
    font-size: 13px;
    @media (min-width: 768px){
        font-size: 15px;
    }
`

export default About
