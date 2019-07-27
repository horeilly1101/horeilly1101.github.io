import React from 'react';
import './App.css'
import {
    Box,
    Image,
    Heading,
    Text,
    Flex
} from 'rebass'

// import images
import linkedin from './svg/linkedin-black.svg'
import linkedinWhite from './svg/linkedin-white.svg'
import github from './svg/github-black.svg'
import githubWhite from './svg/github-white.svg'
import email from './svg/email-black.svg'
import emailWhite from './svg/email-white.svg'

const MY = 2; // standardize vertical margins

class ImageLink extends React.Component {
  constructor(props){
    super(props);
    this.state = { isHovered: false };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true })
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false })
  };

  render() {
    return (
        <a href={this.props.href}>
          <Image
              src={this.state.isHovered ? this.props.hoverSrc : this.props.src}
              mx={2}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
          />
        </a>
    )
  }
}

const Row = props => (
    <>
      <Text mx={2}>{props.text}</Text>
      <Flex my={MY}>
        {props.children}
      </Flex>
    </>
);

const App = () => (
  <div className="App App-header">
      <Heading my={MY}>Hi, I'm Hugh.</Heading>
      <Box
          width={[ 1, 1, 1/2 ]}
          my={MY}
      >
        <Text>CS + Math @ Rice. Co-Director @ <a href='https://hack.rice.edu/'>HackRice</a>.</Text>
        <Text>I'm also really into movies.</Text>
      </Box>

      <Row text="Contact me:">
          <ImageLink
              href='mailto:horeilly1101@gmail.com'
              src={email}
              hoverSrc={emailWhite}
          />
          <ImageLink
              href='https://linkedin.com/in/hughjoreilly'
              src={linkedin}
              hoverSrc={linkedinWhite}
          />
      </Row>

      <Row text="Check out my projects:">
          <ImageLink
              href='https://github.com/horeilly1101'
              src={github}
              hoverSrc={githubWhite}
          />
      </Row>

  </div>
);

export default App;
