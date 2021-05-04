import Image from 'next/image'
import React from 'react'
import Link from 'next/link'



const Banner = ({image, categories}) => {
    return (
        <div>
            <Link href={`/categories/${categories}`}>
                <Image
                        src={image}
                        width="400" 
                        height="300"
                        quality="100"
                    />
          </Link>
        </div>
    )
}

export default Banner
