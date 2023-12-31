import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../../contexts/AuthContext'
import AuthLayout from '../../layouts/AuthLayout'
import MainLayout from '../../layouts/MainLayout'
import HotelsPage from '../../pages/HotelsPage'
import MainPage from '../../pages/MainPage'
import SingleHotelPage from '../../pages/SingleHotelPage'
import ResetPasswordPage from '../../pages/ResetPasswordPage'
import Scroll from '../ScrollWrappers/Scroll'
import { ThemeProvider } from '../../contexts/ThemeContext'
import { SnackbarProvider } from 'notistack'
import SignInPage from '../../pages/SignInPage'
import SignUpPage from '../../pages/SignUpPage'
import ErrorPage from '../../pages/ErrorPage'
import { SearchProvider } from '../../contexts/SearchContext'
import Disclaimer from '../ModalUI/Disclaimer'

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <AuthProvider>
        <SearchProvider>
          <ThemeProvider>
            <Scroll>
              <Disclaimer />
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<MainPage />} />
                  <Route path="houses/:hotelId" element={<SingleHotelPage />} />
                </Route>
                <Route path="houses" element={<MainLayout />}>
                  <Route index element={<HotelsPage />} />
                </Route>
                <Route path="auth" element={<AuthLayout />}>
                  <Route path="register" element={<SignUpPage />} />
                  <Route path="login" element={<SignInPage />}>
                    <Route
                      path=":userId/verify/:token"
                      element={<SignUpPage />}
                    />
                  </Route>
                  <Route path="reset-password" element={<ResetPasswordPage />}>
                    <Route
                      path=":userId/:token"
                      element={<ResetPasswordPage />}
                    />
                  </Route>
                </Route>
                <Route path="*" element={<AuthLayout />}>
                  <Route path="*" element={<ErrorPage />} />
                </Route>
              </Routes>
            </Scroll>
          </ThemeProvider>
        </SearchProvider>
      </AuthProvider>
    </SnackbarProvider>
  )
}

export default App
