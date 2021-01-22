import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <>
            <StyledContact>
                <div className="description">
                    <div className="lokasi-toko">
                        <h3>Lokasi Toko</h3>
                        <p> Pasar Baru Trade Center <br/>Lantai 5 Blok B2 No.1 <br/> Jln. Otto Iskandar Dinata No.45<br/>Kb. Jeruk, Kec. Andir<br/> Kota Bandung<br/> Jawa Barat <br/> 40181 
                        </p>
                    </div>
                    <div className="customer-service">
                        <h3>Customer Service</h3>
                        <p>Telephone<br/>083844982006</p>
                        <p>Email<br/>support@geniouz.id</p>
                        <p>Instagram<br/>@geniouz.official</p>
                        <p>Jam Operasional <br/> Setiap Hari 10.00 - 17.00</p>
                    </div>
                </div>
                <iframe src="https://maps.google.com/maps?q=Grosir%20Kemeja%20Bandung%20Berkualitas%20Geniouz&t=&z=13&ie=UTF8&iwloc=&output=embed" title="location" className="loc">

                </iframe>

            </StyledContact>
        </>
    )
}

const StyledContact = styled.div`
    margin: 0 30px;
    line-height: 1.5;
    font-size: 15px;
    iframe {
        width:100%;
        border: none;
        height: 460px;
    }
    @media (min-width: 768px){
        display: flex;
        align-items: center;
        .description{
            padding-right: 10px;

        }
    }
`

export default Contact