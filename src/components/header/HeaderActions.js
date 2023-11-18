import { Search, SearchOff } from '@mui/icons-material'
import { ButtonGroup, IconButton, useMediaQuery } from '@mui/material'
import { useThemeProvider } from '../../contexts/ThemeContext'
import UserInfo from './UserInfo'
import SwitchColorTheme from '../SwitchColorTheme'

const HeaderActions = ({ searchOpen, handleSearchDrawer }) => {
  const { theme } = useThemeProvider()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <ButtonGroup
      aria-label="actions button group"
      size="medium"
      sx={{ flex: 1, gap: 0.5, justifyContent: 'flex-end' }}
    >
      {isTablet ? (
        <IconButton
          aria-label="toggle search panel"
          color="inherit"
          onClick={() => handleSearchDrawer(!searchOpen)}
        >
          {searchOpen ? <SearchOff /> : <Search />}
        </IconButton>
      ) : (
        <>
          <SwitchColorTheme />
          <IconButton
            aria-label="toggle search panel"
            color="inherit"
            onClick={() => handleSearchDrawer(!searchOpen)}
          >
            {searchOpen ? <SearchOff /> : <Search />}
          </IconButton>
          <UserInfo />
        </>
      )}
    </ButtonGroup>
  )
}

export default HeaderActions
