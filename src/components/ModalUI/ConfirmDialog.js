import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  useMediaQuery
} from '@mui/material'
import { forwardRef } from 'react'
import { useThemeProvider } from '../../contexts/ThemeContext'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ConfirmDialog = ({
  isConfirmDialogOpen,
  onCancel,
  title,
  renderActions,
  renderDialogContent
}) => {
  const { theme } = useThemeProvider()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      data-lenis-prevent
      open={isConfirmDialogOpen}
      TransitionComponent={Transition}
      fullScreen={isMobile}
      onClose={onCancel}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{renderDialogContent()}</DialogContent>
      {renderActions()}
    </Dialog>
  )
}

export default ConfirmDialog
