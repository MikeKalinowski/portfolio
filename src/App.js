import React, { Component } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import WOW from 'wow.js'
import 'animate.css'

import './components/constant/fonts.css';
import { Theme } from './components/constant/theme.js';

import Contact from './components/page-parts/Contact'
import Expertise from './components/page-parts/Expertise'
import WorkTogether from './components/page-parts/WorkTogether'
import Projects from './components/page-parts/Projects'
import Introduction from './components/page-parts/Introduction'
import Navigation from './components/page-parts/Navigation'

const MainWrapper = styled.div`
  max-width: ${props => props.theme.layout.contentWidthDesktop};
  padding: 0 20px 0 20px;
  position: relative;
  margin: 0 auto;
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 16px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.color.text};

  @media ${props => props.theme.layout.tablet} {
    padding: 0 40px 0 40px;
  }

  @media ${props => props.theme.layout.laptop} {
    padding: 0;
  }
`

class App extends Component {
  state = {
    dimensions: {
      innerWidth: 0,
      innerHeight: 0
    }
  }

  componentDidMount() {
    // Checking window width and height for js "media queries"
    const checkDimensions = () => {
      this.setState({dimensions: {
        innerWidth: window.innerWidth, 
        innerHeight: window.innerHeight
      }});

    }
    checkDimensions();
    window.addEventListener('resize', checkDimensions);

    // Needed for scroll-reveal animations with classname "wow"
    new WOW().init(); 
  }
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <MainWrapper>
          {console.log("main", this.state.dimensions)}
          <Navigation />
          <Introduction />
          <Expertise />
          <WorkTogether dimensions={this.state.dimensions}/>
          <Projects />
          <Contact />
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

export default App;