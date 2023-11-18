import { Box } from '@mui/material'
import { CustomContainer } from '../../pages/MainPage'
import TitlesBlock from '../TitlesBlock'
import ItemsList from '../Lists/ItemsList'
import { renderCities } from '../../utils/render-items-utils'
import { fetchRandomCities } from '../../utils/service-utils'

const Choices = () => {
  return (
    <Box component={'section'} py={4}>
      <CustomContainer>
        <TitlesBlock subtitle="Modern Comforts" title="URBAN CHOICES" />
        <ItemsList
          renderItems={renderCities}
          type="city"
          skeletonCount={3}
          fetchData={fetchRandomCities}
          limit={3}
        />
      </CustomContainer>
    </Box>
  )
}

export default Choices
