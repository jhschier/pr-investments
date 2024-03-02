import styled from 'styled-components'

export const Container = styled.div``

export const HomeCover = styled.img`
  background-color: transparent;
  background-size: cover;
  width: 100%;
  z-index: -2;
`
export const LogoImage = styled.img`
  width: 800px;
  max-width: 100%;
`
export const ContainerLogoImage = styled.div`
  overflow-clip-margin: content-box;
  overflow: clip;
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
