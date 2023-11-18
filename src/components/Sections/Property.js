import { Box } from '@mui/material'
import { CustomContainer } from '../../pages/MainPage'
import ItemsList from '../Lists/ItemsList'
import { renderProperties } from '../../utils/render-items-utils'
import { fetchProperties } from '../../utils/service-utils'
import TitlesBlock from '../TitlesBlock'

const Property = () => {
  return (
    <Box component={'section'} py={4}>
      <CustomContainer>
        <TitlesBlock subtitle="Different Residences" title="Property Picks" />
        <ItemsList
          renderItems={renderProperties}
          type="property"
          skeletonCount={5}
          fetchData={fetchProperties}
        />
      </CustomContainer>
    </Box>
  )
}

export default Property
