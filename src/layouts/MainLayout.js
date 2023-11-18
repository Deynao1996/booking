import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Features from '../components/Sections/Features'

const MainLayout = () => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Header />
      <Outlet />
      <Features />
      {/* <Newsletter /> */}
      <Footer />
    </>
  )
}

export default MainLayout
