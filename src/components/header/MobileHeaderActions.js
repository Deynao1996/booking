import { Box } from '@mui/material'
import UserInfo, { ActionWrapper } from './UserInfo'
import SwitchColorTheme from '../SwitchColorTheme'

const MobileHeaderActions = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <ActionWrapper>
        <SwitchColorTheme variant="mobile" />
      </ActionWrapper>
      <UserInfo variant="mobile" />
    </Box>
  )
}

export default MobileHeaderActions
