import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavSection from './components/layout/nav'
import HeaderSection from './components/layout/header'
import BodySection from './components/layout/body'
import FooterSection from './components/layout/footer'
import CopyrightSection from './components/layout/copyright'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className='container'>
                <NavSection />
                <HeaderSection />
                <BodySection />
                <FooterSection />
                <CopyrightSection />    
            </div>
            
            
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))


