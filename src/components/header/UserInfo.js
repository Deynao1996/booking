import styled from '@emotion/styled'
import { Logout, PersonOutline } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton } from '@mui/material'
import { getCroppedImageUrl } from '../../utils/crop-url-utils'
import { StyledLink } from '../DesktopNav'
import { useAuthProvider } from '../../contexts/AuthContext'

export const ActionWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(5)} 0`,
  border: `1px solid ${theme.palette.divider}`,
  flex: 1
}))

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""'
    }
  }
}))

const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children
}

const UserInfo = ({ variant = 'desktop' }) => {
  const { logout, currentUser } = useAuthProvider()

  const imageUrl = getCroppedImageUrl(
    currentUser?.photo,
    /(upload\/)(.*)/,
    '$1c_thumb,g_face,h_64,w_64/$2'
  )
  const svgParams = {
    ...(variant === 'mobile' && { sx: { width: '32px', height: '32px' } })
  }

  return (
    <>
      {!currentUser ? (
        <ConditionalWrapper
          condition={variant === 'mobile'}
          wrapper={(children) => <ActionWrapper>{children}</ActionWrapper>}
        >
          <StyledLink to={'/auth/login'}>
            <IconButton aria-label="login" color="inherit">
              <PersonOutline {...svgParams} />
            </IconButton>
          </StyledLink>
        </ConditionalWrapper>
      ) : (
        <>
          <ConditionalWrapper
            condition={variant === 'mobile'}
            wrapper={(children) => <ActionWrapper>{children}</ActionWrapper>}
          >
            <IconButton color="inherit" aria-label="logout" onClick={logout}>
              <Logout {...svgParams} />
            </IconButton>
          </ConditionalWrapper>
          <ConditionalWrapper
            condition={variant === 'mobile'}
            wrapper={(children) => <ActionWrapper>{children}</ActionWrapper>}
          >
            <Box sx={{ px: 1 }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar alt={currentUser.userName} src={imageUrl} />
              </StyledBadge>
            </Box>
          </ConditionalWrapper>
        </>
      )}
    </>
  )
}

export default UserInfo
