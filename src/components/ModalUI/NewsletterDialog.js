import {
  Box,
  Button,
  Dialog,
  Link,
  TextField,
  Typography,
  Zoom,
  useMediaQuery
} from '@mui/material'
import { forwardRef } from 'react'
import { useThemeProvider } from '../../contexts/ThemeContext'
import newsletter from '../../assets/img/newsletter.jpg'
import { useNavigate } from 'react-router-dom'
import { useAuthProvider } from '../../contexts/AuthContext'
import { newsletterMsgs } from '../../data/messages-data'
import { useSnackbar } from 'notistack'
import { useRef } from 'react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />
})

const NewsletterDialog = ({ isNewsletterOpen, handleNewsletter }) => {
  const { theme } = useThemeProvider()
  const { currentUser, login } = useAuthProvider()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const emailRef = useRef('')
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const messages = newsletterMsgs

  const btnContent = currentUser ? 'Subscribe' : 'Login and Subscribe'
  const isSubscribed = currentUser?.hasNewsletter

  async function handleSubmit(e) {
    e.preventDefault()
    if (!currentUser) return navigate('/auth/login')
    if (!currentUser.isVerified)
      return enqueueSnackbar(messages.configurations, { variant: 'warning' })

    try {
      const res = await changeUser({
        userId: currentUser._id,
        changedData: { hasNewsletter: true }
      })
      if (res.data) {
        enqueueSnackbar(messages.subscribed, {
          variant: 'success'
        })
        login({ ...currentUser, hasNewsletter: true })
        e.target.reset()
      }
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error'
      })
    }
  }

  return (
    <Dialog
      open={isNewsletterOpen}
      fullScreen={isMobile}
      TransitionComponent={Transition}
      onClose={() => handleNewsletter(false)}
      maxWidth="xl"
      sx={{
        '.MuiDialog-paper': {
          justifyContent: {
            xs: 'center',
            md: 'flex-start'
          }
        }
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 8,
            flex: 1,
            px: 5,
            py: { xs: 5, md: 0 }
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h4" component={'span'} textAlign={'center'}>
              Join Our Newsletter & <br />
              Get 10% Off
            </Typography>
            <Typography
              variant="h6"
              fontWeight={'normal'}
              component={'span'}
              textAlign={'center'}
            >
              Enjoy 10% off on your first order.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Your Email"
              type="email"
              name="email"
              placeholder={
                isSubscribed ? 'Your already have been subscribed!' : ''
              }
              required={!!currentUser}
              onChange={(e) => (emailRef.current = e.target.value)}
              autoFocus
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <Button
                variant="contained"
                type="submit"
                size="large"
                aria-label="Subscribe"
                disabled={isSubscribed}
              >
                {btnContent}
              </Button>
              <Link
                sx={{ textAlign: 'center', cursor: 'pointer' }}
                underline="hover"
                color={'text.secondary'}
                onClick={() => handleNewsletter(false)}
              >
                No, thanks
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
          <img
            src={newsletter}
            alt="newsletter"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Box>
    </Dialog>
  )
}

export default NewsletterDialog
