import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import CustomSubmitButton from '../components/FormUI/CustomSubmitButton'
import { useAuthProvider } from '../contexts/AuthContext'
import { checkAuthToken, loginToAccount } from '../utils/service-utils'
import { GitHub, Google, LockOutlined } from '@mui/icons-material'
import Copyright from '../components/Copyright'
import { renderTextFields, StyledBodyLink, StyledForm } from './SignUpPage'

const initialValues = {
  loginUsername: process.env.REACT_APP_STATUS === 'demo' ? 'dbvision' : '',
  loginPassword: process.env.REACT_APP_STATUS === 'demo' ? '121212' : ''
}

const validationSchema = Yup.object({
  loginUsername: Yup.string().required('Required field'),
  loginPassword: Yup.string().required('Required field')
})

const signInOptions = [
  {
    name: 'loginUsername',
    label: 'User Name',
    autoComplete: 'username',
    fullWidth: true,
    disabled: process.env.REACT_APP_STATUS === 'demo'
  },
  {
    name: 'loginPassword',
    label: 'Password',
    autoComplete: 'loginPassword',
    fullWidth: true,
    type: 'password',
    autoComplete: 'current-password',
    disabled: process.env.REACT_APP_STATUS === 'demo'
  }
]

const SignInPage = () => {
  const { login } = useAuthProvider()
  const location = useLocation()
  const { userId, token } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  function redirectToPassport(type) {
    window.open(`${process.env.REACT_APP_API}/passport/${type}`, '_self')
  }

  async function showVerifyModal() {
    try {
      const res = await checkAuthToken(userId, token)
      if (res.data) {
        enqueueSnackbar(res.data, { variant: 'success' })
      }
    } catch (e) {
      enqueueSnackbar(e.message, { variant: 'error' })
    }
  }

  async function handleSubmit({ loginUsername, loginPassword }) {
    try {
      const user = {
        userName: loginUsername.toLowerCase(),
        password: loginPassword
      }
      const res = await loginToAccount(user)
      const {
        _id,
        email,
        userName,
        hasNewsletter,
        name,
        lastName,
        photo,
        ...rest
      } = res.data
      const redirectPath = location.state?.fromPage
        ? location.state.fromPage
        : '/'
      login(
        { _id, email, userName, hasNewsletter, name, lastName, photo },
        redirectPath
      )
    } catch (e) {
      enqueueSnackbar(e.message, { variant: 'error' })
    }
  }

  useEffect(() => {
    if (userId && token) showVerifyModal(userId, token)
  }, [userId, token])

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Grid container item columnSpacing={2} xs={12}>
              {renderTextFields(signInOptions)}
            </Grid>
            <CustomSubmitButton
              withLoading={true}
              margin="normal"
              loading={isSubmitting}
              type="submit"
            >
              Sign in
            </CustomSubmitButton>
            <Divider sx={{ my: 1 }}>Or</Divider>
            <Grid container item spacing={2} xs={12}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  role="Link"
                  aria-label="Redirect"
                  fullWidth
                  startIcon={<Google />}
                  onClick={() => redirectToPassport('google')}
                  sx={{ textTransform: 'none' }}
                >
                  Sign in with Google
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  role="Link"
                  aria-label="Redirect"
                  startIcon={<GitHub />}
                  onClick={() => redirectToPassport('github')}
                  sx={{ textTransform: 'none' }}
                >
                  Sign in with Github
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <StyledBodyLink to="/">Home page</StyledBodyLink>
              </Grid>
              <Grid item xs={6} textAlign="end">
                <StyledBodyLink to="/auth/register">Sign up</StyledBodyLink>
              </Grid>
              <Grid item xs={12} textAlign="end">
                <StyledBodyLink to="/auth/reset-password">
                  Forgot password
                </StyledBodyLink>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 3 }} />
          </StyledForm>
        )}
      </Formik>
    </Box>
  )
}

export default SignInPage
