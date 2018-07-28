import React from 'react'
import PostList from '../blog/post_list'
import Nav from '../blog/nav'

const Home = () => {
    return (
        <div className='pages-home'>
            <PostList />
            <Nav />
        </div>
    )
}


export default Home