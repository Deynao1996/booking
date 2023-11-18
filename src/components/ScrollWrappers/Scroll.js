import { useEffect } from 'react'
import { useLocation } from 'react-router'
import LocomotiveScroll from 'locomotive-scroll'

const Scroll = (props) => {
  const location = useLocation()

  useEffect(() => {
    new LocomotiveScroll()
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{props.children}</>
}

export default Scroll
