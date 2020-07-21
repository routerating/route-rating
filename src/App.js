import React from 'react'
import Routes from './Routes'
import { withRouter, NavLink } from 'react-router-dom'
import { RouteLinks } from './Routes'
import styled from 'styled-components'
import { Style } from './constants'

const StyledLi = styled.li`
  float: right;
  width: 5rem;

  :hover {
    background-color: ${Style.CHARCOAL};
  }

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
`

const StyledProfileLi = styled(StyledLi)`
  margin: 0 0 0 3.5rem;
  width: fit-content;
`

const StyledBrandLi = styled(StyledLi)`
  float: left;
  width: fit-content;
  font-size: 22px;
  font-weight: bold;
`

const StyledUl = styled.ul`
  background-color: ${Style.BLACK};
  list-style-type: none;
  margin: 0;
  padding: 0 1rem 0 1rem;
  overflow: hidden;
`

const NavigationBar = ({ isAuth }) => {
  const profileLink = isAuth ? RouteLinks.PROFILE : RouteLinks.SIGN_UP

  return (
    <StyledUl>
      <StyledProfileLi>
        <NavLink to={profileLink}>Profile</NavLink>
      </StyledProfileLi>
      <StyledLi>
        <NavLink to={RouteLinks.GYMS}>Gyms</NavLink>
      </StyledLi>
      <StyledLi>
        <NavLink to={RouteLinks.HOME}>Home</NavLink>
      </StyledLi>
      <StyledBrandLi>
        <NavLink to={RouteLinks.HOME}>Route Rating</NavLink>
      </StyledBrandLi>
    </StyledUl>
  )
}

const App = () => (
  <>
    <NavigationBar />
    <Routes />
  </>
)

export default withRouter(App)
