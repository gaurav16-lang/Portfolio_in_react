import React from 'react'
import styled from 'styled-components'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Profile = styled.div`
  margin-right: 5%;
  width: 100%;

  display: flex;
  gap: 5%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: block;
    img {
      width: 80%;
      align-items: center;
    }
    h1 {
      font-size: 0.3rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    img {
      width: 80%;
      align-items: center;
    }
    h1 {
      font-size: 0.3rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    img {
      width: 80%;
      align-items: center;
    }
    
    h1 {
      font-size: 0.2rem;
    }
  } 
  /* @media ${(props) => props.theme.breakpoints.xl} {
    img {
      width: 100%;
      align-items: center;
    }
  }  */
`
const Images = styled.img`
  width: 100%;
  height: 52vh;
`

const Hero = (props) => (
  <Profile>
    <Section row nopadding>
      <img
        src="./images/profileGaurav.jpeg"
        alt="gS"
        width={'300vw'}
        height={'400vh'}
      />

      <LeftSection>
        <SectionTitle main center>
          Hello!
          <br />
          I'm Gaurav Maihuria.
        </SectionTitle>
        <SectionText>A full-stack web developer</SectionText>
        <SectionText>
          I'm a Technology Enthusiast Who Loves Solving Problems with
          Programming & Designing Websites.
        </SectionText>

        {/* <Button onClick={() => (window.location = 'https://google.com')}>
          Learn
        </Button> */}
      </LeftSection>
    </Section>
  </Profile>
)
export default Hero
