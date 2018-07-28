import React from 'react'
import Home from '../pages/home'
import Author from '../widgets/body/author'
import PopularPosts from '../widgets/body/popular_posts'
import LatestPosts from '../widgets/body/latest_posts'
import Ads from '../widgets/body/ads'


const Body = () => {
    return (
        <div className='layout-body'>
            <Home />
        </div>
    )
}

const BodySection = () => {
    return (
        <div className='layout-body-section'>
            <Body />
            <Author />
            <PopularPosts />
            <LatestPosts />
            <Ads />
        </div>
    )
}

export default BodySection