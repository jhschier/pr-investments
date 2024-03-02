import { faBars } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import HeaderLogo from '../../assets/ricardo_logo_black_shade.png'
import {
  NavbarWrapper,
  NavbarLinkWrapper,
  StyledNavLink,
  StyledFontAwesomeIcon,
  IconContainer,
  LogoImg,
  ContainerLogo
} from './styles'

export function NavBar({ activePage, onPageChange }) {
  const [activeLink, setActiveLink] = useState(null)
  const link = [
    { page: 'Home', href: '/' },
    { page: 'Market', href: '/market' },
    { page: 'Services', href: '/services' },
    { page: 'About', href: '/about' },
    { page: 'Contact', href: '/contact' }
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleLinkClick = page => {
    setActiveLink(page)

    setMenuOpen(false)
    onPageChange(page)
  }
  return (
    <>
      <NavbarWrapper menuOpen={menuOpen}>
        <IconContainer>
          <StyledFontAwesomeIcon icon={faBars} onClick={toggleMenu} />
        </IconContainer>

        <NavbarLinkWrapper menuOpen={menuOpen}>
          {link.map(linkItem => (
            <StyledNavLink
              activeclassname="active"
              key={linkItem.page}
              to={linkItem.href}
              className={activeLink === linkItem.page ? 'active' : ''}
              onClick={() => handleLinkClick(linkItem.page)}
            >
              {linkItem.page}
            </StyledNavLink>
          ))}
        </NavbarLinkWrapper>
        <ContainerLogo>
          <LogoImg src={HeaderLogo} />
        </ContainerLogo>
      </NavbarWrapper>
      {/* <Overlay menuOpen={menuOpen} onClick={toggleMenu} /> */}
    </>
  )
}

NavBar.propTypes = {
  activePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired
}
