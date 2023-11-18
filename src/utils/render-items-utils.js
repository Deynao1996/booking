import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography
} from '@mui/material'
import { StyledLink } from '../components/DesktopNav'
import { getFloatRating, getOpinion } from '../components/Lists/HotelsList'
import { capitalizeString } from './capitalize-string-utils'
import { getCroppedImageUrl } from './crop-url-utils'
import Marquee from 'react-fast-marquee'

export function renderProperties(data) {
  return (
    <Grid container spacing={3}>
      {data?.data.map((property) => {
        const hotelCount = property.count === 1 ? 'hotel' : 'hotels'
        const imageUrl = getCroppedImageUrl(
          property.img,
          /(upload\/)(.*)/,
          '$1c_fill,g_auto,h_550,w_300/$2'
        )

        return (
          <Grid item xs={12} md={2.4} key={property.type}>
            <Card elevation={0}>
              <CardActionArea>
                <StyledLink
                  to={`/houses?type=${property.type}`}
                  state={{ fromItemsList: true }}
                >
                  <CardMedia
                    component="img"
                    height="450"
                    image={imageUrl}
                    alt={property.type}
                  />
                  <CardContent sx={{ px: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textTransform={'capitalize'}
                    >
                      {property.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {property.count} {hotelCount}
                    </Typography>
                  </CardContent>
                </StyledLink>
              </CardActionArea>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export function renderCities(data) {
  return (
    <Grid container spacing={3}>
      {data?.data.map((city) => {
        const capitalizedCity = capitalizeString(city.city)
        const imageUrl = getCroppedImageUrl(
          city.cityImg,
          /(upload\/)(.*)/,
          '$1c_fill,g_auto,h_400,w_500/$2'
        )
        return (
          <Grid item xs={12} sm={4} key={city._id}>
            <Card>
              <CardActionArea>
                <StyledLink
                  to={'houses'}
                  state={{ destination: capitalizedCity, fromItemsList: true }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={imageUrl}
                    alt={capitalizedCity}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textTransform={'capitalize'}
                    >
                      {capitalizedCity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {city.count} properties
                    </Typography>
                  </CardContent>
                </StyledLink>
              </CardActionArea>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export function renderHomes(data) {
  return (
    <Marquee direction="right" speed={30} style={{ paddingBottom: '1rem' }}>
      {data?.data.hotels.map((home) => {
        const floatRating = getFloatRating(home.rating)
        const imageUrl = getCroppedImageUrl(
          home.photos[0],
          /max\d+x\d+/,
          'max600x600'
        )

        return (
          <Box key={home._id}>
            <Card elevation={4} sx={{ width: '300px', mx: 3 }}>
              <CardActionArea>
                <StyledLink
                  to={`houses/${home._id}`}
                  state={{ fromItemsList: true }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={imageUrl}
                    alt={home.name}
                  />
                  <CardContent sx={{ px: 1 }}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      noWrap
                      component="div"
                      fontWeight={'bold'}
                      textTransform={'capitalize'}
                    >
                      {home.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      textTransform={'capitalize'}
                    >
                      {home.city}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      marginY={1}
                    >
                      {`Starting from ${home.cheapestPrice} $`}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="div"
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 1
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={floatRating / 2}
                        precision={0.2}
                        readOnly
                      />
                      <div>{floatRating}</div>
                    </Typography>
                    <Typography
                      variant="body2"
                      align="right"
                      color="text.secondary"
                    >
                      {getOpinion(home.rating)}
                    </Typography>
                  </CardContent>
                </StyledLink>
              </CardActionArea>
            </Card>
          </Box>
        )
      })}
    </Marquee>
  )
}
