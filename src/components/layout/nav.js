import React from 'react'
import Menu from '../nav/menu'
import Social from '../nav/social'
import Search from '../nav/search'

const Nav = () => {
    return (
        <div className='layout-nav'>
            <Menu />
            <Social />
            <Search />
        </div>
    )

}

const NavSection = () => {
    return <div className='layout-nav-section'><Nav /></div>    
}

export default NavSection