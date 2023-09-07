import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
      >
        <SwiperSlide>
           <img className='w-full rounded-xl' src="/assets/img/jpg/carousel-img-one.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full rounded-xl' src="/assets/img/jpg/carousel-img-two.jpg" alt="Slide 2" />
     </SwiperSlide>
       <SwiperSlide>
          <img className='w-full rounded-xl' src="/assets/img/jpg/carousel-img-three.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}