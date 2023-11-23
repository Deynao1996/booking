import styled from '@emotion/styled'
import {
  Euro,
  Facebook,
  GitHub,
  Instagram,
  Telegram
} from '@mui/icons-material'
import {
  Button,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  Paper,
  Typography
} from '@mui/material'
import Copyright from './Copyright'
import { useCallback } from 'react'
import { useState } from 'react'
import NewsletterDialog from './ModalUI/NewsletterDialog'

export const StyledListTitle = styled(Link)(({ theme }) => ({
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.common.black,
  textTransform: 'uppercase'
}))

export const StyledListLink = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  color:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0, 0, 0, 0.54)',
  textTransform: 'capitalize',
  '&:hover': {
    color: theme.palette.text.primary
  }
}))

const categoriesArr = [
  'category',
  'flights',
  'car rentals',
  'attractions',
  'airport taxi'
]

const informationArr = ['license', 'privacy policy', 'releases', 'FAQ']

const aboutArr = ['about', 'contact', 'team', 'support']

const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  const handleNewsletterToggle = useCallback(
    (state) => setIsNewsletterOpen(state),
    [setIsNewsletterOpen]
  )

  function renderList(arr) {
    return (
      <List>
        {arr.map((item, i) => {
          return i === 0 ? (
            <ListItem key={i}>
              <StyledListTitle underline="none">{item}</StyledListTitle>
            </ListItem>
          ) : (
            <ListItem key={i}>
              <StyledListLink underline="hover">{item}</StyledListLink>
            </ListItem>
          )
        })}
      </List>
    )
  }

  return (
    <>
      <Grid
        container
        component={Paper}
        elevation={8}
        sx={{
          pt: 6,
          pb: 2,
          px: 2
        }}
      >
        <Grid item xs={6} sm={4} md={2}>
          {renderList(categoriesArr)}
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          {renderList(informationArr)}
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          {renderList(aboutArr)}
        </Grid>
        <Grid item md={2} />
        <Grid item xs={12} sm={6} md={4}>
          <List sx={{ mt: { xs: 4, md: 0 } }}>
            <ListItem>
              <StyledListTitle underline="none">NEWSLETTER</StyledListTitle>
            </ListItem>
            <ListItem>
              <Link
                underline="none"
                color={'inherit'}
                sx={(theme) => ({
                  color:
                    theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.7)'
                      : 'rgba(0, 0, 0, 0.54)'
                })}
              >
                Get 10% off on your first order. We’ll only send you updates on
                new releases and exclusive offers, promise.
              </Link>
            </ListItem>
            <ListItem>
              <Button
                onClick={() => handleNewsletterToggle(true)}
                variant="contained"
                aria-label="open newsletter dialog"
                endIcon={<Euro />}
                sx={{ width: { xs: '70%', sm: '50%' }, mt: 1 }}
              >
                Get 10%
              </Button>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sx={{ mt: 8 }}>
          <Copyright />
        </Grid>
      </Grid>
      <NewsletterDialog
        isNewsletterOpen={isNewsletterOpen}
        handleNewsletter={handleNewsletterToggle}
      />
    </>
  )
}

export default Footer
