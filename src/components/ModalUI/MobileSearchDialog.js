import { Dialog, Slide } from '@mui/material'
import { forwardRef } from 'react'
import AsideSearchPanel from '../AsideSearchPanel'
import zIndex from '@mui/material/styles/zIndex'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MobileSearchDialog = ({ isDialogOpen, toggleDialog }) => {
  function handleSearch() {
    toggleDialog()
    window.scrollTo(0, 0)
  }

  return (
    <Dialog
      open={isDialogOpen}
      sx={{ zIndex: 3 }}
      keepMounted
      fullScreen
      TransitionComponent={Transition}
    >
      <AsideSearchPanel cb={handleSearch} />
    </Dialog>
  )
}

export default MobileSearchDialog
