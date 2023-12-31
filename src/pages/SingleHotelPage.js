import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchHotel } from '../utils/service-utils'
import { useSearchProvider } from '../contexts/SearchContext'
import { getDayDifference } from '../utils/dates-utils'
import Skeleton from '../components/LoadingUI/Skeleton'
import HotelInfo from '../components/SingleHotel/HotelInfo'
import ReserveDialog from '../components/ModalUI/ReserveDialog'
import CustomLightBox from '../components/SingleHotel/CustomLightBox'
import { Box } from '@mui/material'

import 'react-18-image-lightbox/style.css'

const SingleHotel = () => {
  const { hotelId } = useParams()
  const { searchParams } = useSearchProvider()
  const [boxState, setBoxState] = useState({ photoIndex: 0, isOpen: false })
  const [isReserveOpen, setIsReserveOpen] = useState(false)
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
  const { data, isLoading } = useQuery(['hotel', hotelId], fetchHotel)
  const days = getDayDifference(
    searchParams.departureDate,
    searchParams.arrivalDate
  )

  function handleOpenDialog() {
    setIsReserveOpen(true)
  }

  function handleCloseDialog() {
    setIsReserveOpen(false)
  }

  return (
    <>
      {!isLoading && (
        <ReserveDialog
          handleCloseDialog={handleCloseDialog}
          isReserveOpen={isReserveOpen}
          roomIds={data?.data.rooms}
          days={days}
          setIsCheckoutLoading={setIsCheckoutLoading}
          hotelName={data?.data.name}
          hotelImage={data?.data.photos[0]}
          hotelId={hotelId}
        />
      )}

      {boxState.isOpen && (
        <CustomLightBox
          data={data}
          boxState={boxState}
          setBoxState={setBoxState}
        />
      )}
      <Box
        sx={{
          maxWidth: { xs: '100%', lg: '80%' },
          margin: '0 auto',
          px: { xs: 1, sm: 4 },
          mb: 8
        }}
      >
        {isLoading || isCheckoutLoading ? (
          <Skeleton type={'single-hotel'} />
        ) : (
          <HotelInfo
            setBoxState={setBoxState}
            handleOpenDialog={handleOpenDialog}
            days={days}
            room={searchParams.room}
            {...data.data}
          />
        )}
      </Box>
    </>
  )
}

export default SingleHotel
