import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'



const StyledImage = styled.div`
    .bgWrap{
        position: relative;
        z-index: -1;
        .bgText{
        p {
            margin: 0;
        }
        position: absolute;
        bottom: ${props => props.postionY}px;
        right: ${props => props.postionX}px;
        margin: 0;
        font-size: 1.4rem;
        /* line-height: 3rem; */
        letter-spacing: 0.5px;
        /* text-shadow: 1px 1px 1px #3c5c5e; */
    }
    }
    
`

const Banner = ({image, categories, bannerTitle, postionX, postionY, aos}) => {
    return (
        <div>
            <Link href={`/categories/${categories}`}>
                <StyledImage postionX={postionX} postionY={postionY}>
                    <div className="bgWrap">
                        <Image
                                src={image}
                                width="400" 
                                height="300"
                                quality="100"
                        >
                        </Image>
                        <div className="bgText" data-aos={aos}>
                            <p>{bannerTitle}</p>
                            <p> Collection</p>
                        </div>
                    </div>
                   
                </StyledImage>
               
          </Link>
          {/* <StyledBanner image={image}>

          </StyledBanner> */}
        </div>
    )
}

// const StyledBanner = styled.div`
//     width: 400px;
//     height: 300px;
//     background-image: url(${props => props.image});
// `



export default Banner
