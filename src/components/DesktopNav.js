import styled from '@emotion/styled'
import { Button, ButtonGroup } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/nav-items-data'

export const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'disabled'
})(({ disabled }) => ({
  color: 'inherit',
  textDecoration: 'none',
  pointerEvents: disabled ? 'none' : 'auto'
}))

const DesktopNav = () => {
  const { pathname } = useLocation()

  function renderBtns() {
    return navLinks.map((link) => {
      const isActive = pathname === link.to
      const isDisabled = link.isDisabled
      return (
        <StyledLink to={link.to} key={link.label} disabled={isDisabled}>
          <Button
            startIcon={link.icon}
            role="Link"
            aria-label="Open-link"
            sx={(theme) => ({
              px: 2,
              color: 'inherit',
              textDecoration: isActive && !isDisabled ? 'underline' : 'none',
              textTransform: 'capitalize',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              [theme.breakpoints.down('md')]: {
                fontSize: theme.spacing(1.5)
              },
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(144, 202, 249, 0.08)'
                    : 'rgba(0, 0, 0, 0.08)'
              }
            })}
            disabled={isDisabled}
            variant={'text'}
          >
            {link.label}
          </Button>
        </StyledLink>
      )
    })
  }

  return (
    <ButtonGroup
      aria-label="outlined button group"
      size="medium"
      sx={{ flex: 1 }}
    >
      {renderBtns()}
    </ButtonGroup>
  )
}

export default DesktopNav
