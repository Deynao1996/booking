import { Drawer } from '@mui/material'
import SearchBar from '../SearchBar/SearchBar'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const SearchDrawer = ({ searchOpen, handleSearchDrawer, container }) => {
  const location = useLocation()

  useEffect(() => {
    handleSearchDrawer(false)
  }, [location])

  return (
    <Drawer
      container={container}
      variant="temporary"
      anchor="top"
      open={searchOpen}
      onClose={() => handleSearchDrawer(false)}
      sx={{
        zIndex: 900,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: '100%'
        }
      }}
    >
      <SearchBar />
    </Drawer>
  )
}

export default SearchDrawer
