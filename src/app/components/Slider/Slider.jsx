'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = ({ series = [] }) => {
    // ตรวจสอบว่ามีข้อมูล series หรือไม่
    if (!series || series.length === 0) {
        return <p className="text-center text-gray-500">No seriesItemss available.</p>;
    }

    return (
        <Swiper
            modules={[Autoplay, Mousewheel, Navigation]}
            direction='horizontal'
            spaceBetween={1}
            slidesPerView={'7'}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false, // ไม่ปิด autoplay เมื่อใช้ mousewheel
            // }}
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
            }}
            onSlideChange={() => console.log('Slide changed')}
            onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}


            className='w-11/12'
        >

            {series.map((seriesItems) => (
                <SwiperSlide key={seriesItems.id} className='w-auto m-0 p-0'>
                    {seriesItems.poster_path || seriesItems.backdrop_path ? (
                        <Link href={`/series/${seriesItems.id}`} className='w-auto inline-block'>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${seriesItems.poster_path || seriesItems.backdrop_path}`}
                                width={300}
                                height={200}
                                alt={seriesItems.name || seriesItems.original_title || 'No title'}
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
