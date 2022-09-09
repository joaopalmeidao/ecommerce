import React from 'react'
import Link from 'next/link'


const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.smallText}</p>
            </div>
            <h3>#TODO:MID TEXT</h3>
            <img src="" alt="headphones" className='hero-banner-image' />

            <div>
                <Link href="/Product/ID">
                    <button type='button'>#TODO:BUTTON TEXT</button>

                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>#TODO:DESCRIPTION</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner