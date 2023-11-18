import {
  CurrencyExchange,
  KeyboardReturn,
  LocalShipping
} from '@mui/icons-material'
import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const featuresArr = [
  {
    title: 'Easy exchange',
    Icon: CurrencyExchange
  },
  {
    title: 'FAST SHIPPING',
    Icon: LocalShipping
  },
  {
    title: 'EASY RETURNS',
    Icon: KeyboardReturn
  }
]

const Features = () => {
  return (
    <Paper elevation={8} component={'section'} sx={{ m: { xs: 1, sm: 4 } }}>
      <Grid
        container
        spacing={4}
        p={8}
        sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
      >
        {featuresArr.map((feature, i) => {
          return (
            <React.Fragment key={i}>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <feature.Icon sx={{ width: '3rem', height: '3rem' }} />
                  <Typography
                    variant="h5"
                    component={'span'}
                    textTransform={'uppercase'}
                    textAlign={'center'}
                  >
                    {feature.title}
                  </Typography>
                </Box>
              </Grid>
              {i === featuresArr.length - 1 ? null : (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: 'none', md: 'block' } }}
                />
              )}
            </React.Fragment>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Features
