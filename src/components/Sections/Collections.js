import { Box, Typography } from '@mui/material'
import { CustomContainer } from '../../pages/MainPage'
import ItemsList from '../Lists/ItemsList'
import { renderHomes } from '../../utils/render-items-utils'
import { fetchHouses } from '../../utils/service-utils'
import TitlesBlock, { TitleSquares } from '../TitlesBlock'
import Marquee from 'react-fast-marquee'
import { useThemeProvider } from '../../contexts/ThemeContext'

const marqueeLabels = ['Optimal Stays List', 'Preferred Lodgings']

const Collections = () => {
  const { theme } = useThemeProvider()

  return (
    <Box component={'section'} py={8}>
      <TitlesBlock
        subtitle="Premier Stay Selection"
        title="Top Picks Collection"
      />
      <ItemsList
        renderItems={renderHomes}
        type="home"
        skeletonCount={5}
        fetchData={fetchHouses}
        featured={true}
        limit={6}
      />
      <Box sx={{ my: 10 }} />
      <Marquee
        autoFill
        speed={50}
        direction="right"
        style={{ overflow: 'hidden' }}
      >
        {marqueeLabels.map((label) => (
          <Typography
            variant="h3"
            component="h6"
            key={label}
            sx={(theme) => ({
              textTransform: 'uppercase',
              color: theme.palette.primary,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontWeight: 'bold',
              fontStyle: 'italic'
            })}
          >
            {label}{' '}
            <TitleSquares
              size={2}
              color={theme.palette.primary.main}
              borderSize={2}
            />
            <div></div>
          </Typography>
        ))}
      </Marquee>
    </Box>
  )
}

export default Collections
