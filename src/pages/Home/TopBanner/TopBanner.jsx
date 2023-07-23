import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
const TopBanner = () => {
  return (
    <div className='w-full mx-auto h-96 '>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={false}
        swipeable={true}
      >
        <div className='w-full h-96'>
          <img
            className='w-full h-full'
            src='https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          />
        </div>
        <div className='w-full h-96'>
          <img
            className='w-full h-full'
            src='https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          />
        </div>
        <div className='w-full h-96'>
          <img
            className='w-full h-full'
            src='https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          />
        </div>
      </Carousel>
    </div>
  )
}

export default TopBanner
