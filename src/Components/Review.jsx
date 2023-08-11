import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {

    return (
        <div className='text-center md:mb-20'>
            <h1 className='lg:text-4xl text-2xl uppercase font-bold pt-10 md:py-20 text-sky-950 text-center'>Whats our clients say</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={5}
                            readOnly
                        />
                        <p className="my-4">ProfitPrime has been a valuable tool for optimizing my online business revenue. The features provided by ProfitPrime have helped streamline my processes and improve my overall business performance. With its user-friendly interface and comprehensive analytics, I can make informed decisions to enhance my revenue generation strategies</p>
                        <h3 className="md:text-2xl text-yellow-600">Shadhin</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={2.5}
                            readOnly
                        />
                        <p className="my-4">I have found ProfitPrime to be an effective platform for boosting revenue. Its range of tools and resources have given my business a competitive edge. The insights provided by ProfitPrimes analytics have been invaluable in understanding customer behavior and fine-tuning my strategies. I highly recommend ProfitPrime to fellow entrepreneurs.</p>
                        <h3 className="md:text-2xl text-yellow-600">Tonmoy</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4}
                            readOnly
                        />
                        <p className="my-4">As a creative professional, I have benefited from ProfitPrimes revenue optimization solutions. The platforms innovative approach has helped me monetize my artistic endeavors more effectively. With ProfitPrimes guidance, I have been able to reach a wider audience and increase my earnings while staying true to my creative vision.</p>
                        <h3 className="md:text-2xl text-yellow-600">Shazzad</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly
                        />
                        <p className="my-4">ProfitPrime has exceeded my expectations in revenue generation. The platforms data-driven insights have been instrumental in driving growth for my business. Its user-friendly interface and powerful features make it accessible to businesses of all sizes. Thanks to ProfitPrime, I have achieved remarkable results and significantly increased my revenue.</p>
                        <h3 className="md:text-2xl text-yellow-600">Eshan</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;