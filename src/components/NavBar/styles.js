import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100px;
  justify-content: center;
  background: #fff;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  z-index: 2;
  transform: translateY(${props => (props.isHidden ? '-100%' : '0')});

  ${props =>
    props.isHidden &&
    css`
      transform: translateY(-112%);
    `}
  will-change: transform;
  @media (max-width: 965px) {
    flex-direction: row;
  }
`

export const NavbarLinkWrapper = styled.div`
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  pointer-events: ${props => (props.menuOpen ? 'auto' : 'none')};
  display: flex;
  overflow: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  background-color: #fff;
  height: 60px;
  width: 100%;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  justify-content: space-around;
  margin-top: 1rem;

  position: relative;
  top: 60px;
  transform: translateY(${props => (props.menuOpen ? '0' : '-100%')});
  @media (max-width: 965px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 1rem;
  }
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: opacity 0.35s cubic-bezier(0, 0.85, 0.55, 1);
  color: #bbbbbb;
  margin: 2rem auto;
  justify-content: space-around;

  &.${props => props.activeclassname} {
    color: #000;
    transition: opacity 0.35s cubic-bezier(0, 0.85, 0.55, 1);
  }

  &:hover {
    color: #000;
  }

  @media (max-width: 965px) {
    display: block;
    margin: 2rem auto;
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  right: 20rem;
  color: #f2f2f2;
  color: #000;
  font-size: 16px;
  text-align: left;
  cursor: pointer;

  @media (max-width: 965px) {
    display: block;
  }
`

export const Overlay = styled.div`
  display: ${props => (props.menuOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  opacity: 0;
  z-index: 1;
`
export const ContainerLogo = styled.div`
  position: absolute;
  top: 1px;
`
export const LogoImg = styled.img`
  width: 100px;
`

export const IconContainer = styled.div`
  position: absolute;
  left: 20%;
`
