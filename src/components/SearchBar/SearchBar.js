import { Button, Grid } from '@mui/material'
import { useSearchProvider } from '../../contexts/SearchContext'
import CustomAutocomplete from './CustomAutocomplete'
import CustomDatePicker from './CustomDatePicker'
import GuestsPanel from './GuestsPanel'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { differenceInDays, isEqual } from 'date-fns'
import { searchMsgs } from '../../data/messages-data'
import { useThemeProvider } from '../../contexts/ThemeContext'
import { HEADER_MARQUEE_HEIGHT } from '../header/HeaderMarquee'

const APPBAR_MD_HEIGHT = 64
const APPBAR_SM_HEIGHT = 56

const SearchBar = () => {
  const { theme } = useThemeProvider()
  const { searchParams } = useSearchProvider()
  const { arrivalDate, departureDate } = searchParams
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const messages = searchMsgs

  function showWarningMessage(msg) {
    enqueueSnackbar(msg, {
      variant: 'warning'
    })
  }

  function handleClick() {
    const arrivalDiff = differenceInDays(arrivalDate, new Date())
    const departureDiff = differenceInDays(departureDate, new Date())
    if (arrivalDiff < 0 || departureDiff < 0) {
      return showWarningMessage(messages.past)
    }
    const isDatesTheSame = isEqual(
      new Date(arrivalDate),
      new Date(departureDate)
    )

    if (isDatesTheSame) return showWarningMessage(messages.notSame)

    navigate('/houses')
  }

  return (
    <Grid
      container
      width={'100%'}
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: {
          xs: `${APPBAR_SM_HEIGHT + HEADER_MARQUEE_HEIGHT}px`,
          md: `${APPBAR_MD_HEIGHT + HEADER_MARQUEE_HEIGHT}px`
        },
        pb: 1,
        pt: 3,
        px: 2,
        boxShadow: 'rgb(10 25 41 / 70%) 0px 4px 20px',
        border: '1px solid rgb(19, 47, 76)',
        backgroundColor: 'background.default'
      }}
    >
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <CustomAutocomplete />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={5}>
        <CustomDatePicker direction="row" alignItems="center" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} justifyContent="center">
        <GuestsPanel />
      </Grid>
      <Grid item xs={12} sm={6} md={1} lg={1} sx={{ mt: { xs: 2, sm: 0 } }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleClick}
          aria-label="Send"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  )
}

export default SearchBar
