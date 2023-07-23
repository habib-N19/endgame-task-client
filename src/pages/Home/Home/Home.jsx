import CollegeCards from '../CollegeCards/CollegeCards'
import Gallery from '../Gallery/Gallery'
import Research from '../Research/Research'
import Reviews from '../Reviews/Reviews'
import SearchCollege from '../SearchCollege/SearchCollege'
import TopBanner from '../TopBanner/TopBanner'

const Home = () => {
  return (
    <div>
      <SearchCollege />
      <TopBanner />
      <CollegeCards />
      <Gallery />
      <Research />
      <Reviews />
    </div>
  )
}

export default Home
