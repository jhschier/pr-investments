import React from 'react'

import HomeImage from '../../assets/officecover.jpg'
import LogoHome from '../../assets/ricardo_logo_white_shade.png'
import { NavBar } from '../../components/index.js'
import { Container, HomeCover, LogoImage, ContainerLogoImage } from './styles'

export function Home() {
  return (
    <Container>
      <NavBar />
      <HomeCover src={HomeImage} />

      <ContainerLogoImage>
        <LogoImage src={LogoHome} />
      </ContainerLogoImage>
    </Container>
  )
}
