import { Swiper, SwiperSlide } from "swiper/react"
import { Product } from "../../services/types"
import cl from './Carousel.module.scss'
import 'swiper/css';

export const Carousel = ({items}: CarouselProps) => {

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            className={cl.swiper}
        >
            {items.map(item => (
                <SwiperSlide key={item.id} className={cl.slide}>
                    <div className={cl.item}>
                        <div className={cl.img}>
                            <img src={item.image}/>
                        </div>
                        <span>{item.title}</span>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
    )
}

type CarouselProps = {
    items: Product[]
}