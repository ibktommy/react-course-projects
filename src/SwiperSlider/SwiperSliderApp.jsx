import './SwiperSliderApp.css'
import Image1 from './sliderImages/image1.jpg'
import Image2 from './sliderImages/image2.jpg'
import Image3 from './sliderImages/image3.jpg'
import Image4 from './sliderImages/image4.jpg'
import Image5 from './sliderImages/image5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const SwiperSliderApp = () => {
  return (
    <main>
      <div className="container">
        <Swiper className="image-list" spaceBetween={20} slidesPerView={2.14}>
          <SwiperSlide className='image-card'>
            <div className="image">
              <img src={Image1} alt="image1" />
            </div>

            <div className="text">
              <p>Image1</p>
              <p>Wizzy</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='image-card'>
            <div className="image">
              <img src={Image2} alt="image2" />
            </div>

            <div className="text">
              <p>Image2</p>
              <p>Omoluabi</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='image-card'>
            <div className="image">
              <img src={Image3} alt="image3" />
            </div>

            <div className="text">
              <p>Image3</p>
              <p>Beauty</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='image-card'>
            <div className="image">
              <img src={Image4} alt="image4" />
            </div>

            <div className="text">
              <p>Image4</p>
              <p>Davido</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='image-card'>
            <div className="image">
              <img src={Image5} alt="image5" />
            </div>

            <div className="text">
              <p>Image5</p>
              <p>Man</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  )
}

export default SwiperSliderApp

