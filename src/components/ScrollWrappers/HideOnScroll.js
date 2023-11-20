import { Slide, useScrollTrigger } from '@mui/material'

const HideOnScroll = (props) => {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })
  const handleIn = props.disabled ? false : trigger

  return (
    <Slide appear={false} direction="down" in={!handleIn}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
