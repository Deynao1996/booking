import styled from '@emotion/styled'
import { Logout } from '@mui/icons-material'
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material'
import { useAuthProvider } from '../../contexts/AuthContext'
import { getCroppedImageUrl } from '../../utils/crop-url-utils'

const StyledBadge = styled(Badge)(({ theme }) => ({
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

const UserInfo = () => {
  const { logout, currentUser } = useAuthProvider()
  const imageUrl = getCroppedImageUrl(
    currentUser?.photo,
    /(upload\/)(.*)/,
    '$1c_thumb,g_face,h_64,w_64/$2'
  )

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 3, sm: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
          {currentUser.userName}
        </Typography>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt={currentUser.userName} src={imageUrl} />
        </StyledBadge>
      </Box>
      <Tooltip title="Logout" arrow>
        <IconButton color="inherit" edge="start" onClick={logout}>
          <Logout />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default UserInfo
