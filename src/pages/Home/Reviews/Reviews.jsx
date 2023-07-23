import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import img1 from '../../../assets/clg1.jpg'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Reviews = () => {
  return (
    <section className='w-9/12 h-screen mx-auto mt-12 bg-base-100'>
      <h2 className='mb-12 text-3xl font-bold text-center'>
        What Our Students Say About Prestigious Colleges{' '}
      </h2>
      {/* review card slides */}
      <div>
        {/* TODO:change the progressbar color */}
        <Swiper
          pagination={{
            type: 'progressbar'
            // progressbarFillClass: '#FFFFFF'
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className=' hero h-fit bg-base-200'>
              <div className='flex-col w-full hero-content max-h-fit lg:flex-row-reverse'>
                <div className='text-center'>
                  <Rating
                    style={{ maxWidth: 180, margin: '0 auto' }}
                    value={3}
                    readOnly
                  />
                  <p className='py-6'>
                    "Provident cupiditate voluptatem et in. Quaerat fugiat ut"
                  </p>
                  <h1 className='text-3xl font-bold text-center'>Mark W</h1>
                </div>
                <div className='flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100'>
                  <div className='card-body'>
                    <img src={img1} alt='' />
                    <button className='btn btn-primary'>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide2 */}
          <SwiperSlide>
            <div className=' hero h-fit bg-base-200'>
              <div className='flex-col w-full hero-content max-h-fit lg:flex-row-reverse'>
                <div className='text-center'>
                  <Rating
                    style={{ maxWidth: 180, margin: '0 auto' }}
                    value={3}
                    readOnly
                  />
                  <p className='py-6'>
                    "Provident cupiditate voluptatem et in. Quaerat fugiat ut"
                  </p>
                  <h1 className='text-3xl font-bold text-center'>Mark W</h1>
                </div>
                <div className='flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100'>
                  <div className='card-body'>
                    <img src={img1} alt='' />
                    <button className='btn btn-primary'>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews
