import React from 'react'
import About from '../widgets/footer/about'
import Contact from '../widgets/footer/contact'
import LatestTweets from '../widgets/footer/latest_tweets'


const Footer = () => {
    return (
        <div className='layout-footer'>
            <About />
            <LatestTweets />
            <Contact />
        </div>
    )
}

const FooterSection = () => {
    return <div className='layout-footer-section'><Footer /></div>
}

export default FooterSection