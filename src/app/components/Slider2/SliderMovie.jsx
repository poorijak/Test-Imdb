'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Slider = ({ movie = [] }) => {
    // ตรวจสอบว่ามีข้อมูล movie หรือไม่
    if (!movie || movie.length === 0) {
        return <p className="text-center text-gray-500">No movieItems available.</p>;
    }

    return (
        <Swiper
        modules={[Autoplay, Mousewheel, Navigation]}
        direction='horizontal'
        spaceBetween={10}
        slidesPerView={7}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false, // ไม่ปิด autoplay เมื่อใช้ mousewheel
        }}
        mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
        }}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}

            className='max-w-full '
        >
            {movie.map((movieItem) => (
                <SwiperSlide key={movieItem.id}>
                    {movieItem.poster_path || movieItem.backdrop_path ? (
                        <Link href={`/movie/${movieItem.id}`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${movieItem.poster_path || movieItem.backdrop_path}`}
                                width={300}
                                height={200}
                                alt={movieItem.name || movieItem.original_title || 'No title'}
                                className="rounded-lg"
                            />
                        </Link>
                    ) : (
                        <div className="bg-gray-200 flex items-center justify-center rounded-lg w-[300px] h-[200px]">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )}
                </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    );
};

export default Slider;
