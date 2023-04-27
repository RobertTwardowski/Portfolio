import React from 'react'
import Header from './components/organisms/Header'
import Main from './components/organisms/Main'
import { GlobalStyle } from './assets/GlobalStyles'
import { Footer } from './components/organisms/Footer'
import { Wrapper,VideoBG } from './AppStyle.styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AboutMe } from './components/organisms/AboutMe'
import { Projects } from './components/organisms/Projects'
import { Contact } from './components/organisms/Contact'
import videoBackground from './assets/video/zachod-sonca-65182.mp4';




function App () {
  return (
    <>
      <GlobalStyle />
      <VideoBG autoPlay loop muted playbackRate={0.5} preload='none'>
        <source src={videoBackground} type='video/mp4' />
      </VideoBG>
      <Router>
      
      
        <Header />
        <Wrapper>
          <Footer />
          <Routes>
            <Route exact path='/' Component={Main} />
            <Route exact path='/About' Component={AboutMe} />
            <Route exact path='/Projects' Component={Projects} />
            <Route exact path='/Contact' Component={Contact} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  )
}

export default App
