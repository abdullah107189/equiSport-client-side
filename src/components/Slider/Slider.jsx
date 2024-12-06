
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
    const categories = [
        { name: "Football", image: "https://i.postimg.cc/mZHVN4hw/paris-2024-olympics-soccer.jpg" },
        { name: "Basketball", image: "https://i.postimg.cc/RVxdgYHz/180356.jpg" },
        { name: "Tennis", image: "https://i.postimg.cc/FsbZ8xyk/Tennis-Racket-and-Balls.jpg" },
        { name: "Running", image: "https://i.postimg.cc/RZMRBnds/c27ddca5b9550a6940dfef2581b6c38d.webp" },
    ];
    const testimonials = [
        {
            text: "EquiSports has the best quality gear I've ever used. Highly recommend!",
            name: "John Doe",
            role: "Football Player",
        },
        {
            text: "Amazing customer service and super fast delivery!",
            name: "Sarah Lee",
            role: "Tennis Player",
        },
        {
            text: "I got everything I needed for my basketball season. Great quality!",
            name: "Mark Spencer",
            role: "Basketball Player",
        },
    ];
    return (
        <div className='mt-5 lg:mt-0'>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //     pauseOnMouseEnter: true,

                    // }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-pagination"></span>`;
                        },
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='grid md:grid-cols-2 lg:w-4/5 mx-auto lg:gap-10 items-center justify-between  md:h-[600px] h-[500px] overflow-hidden lg:minH'>
                            <div className="flex flex-col items-center justify-center bg-cover bg-center ">
                                <h1 className="md:text-4xl text-xl font-bold  text-center drop-shadow-md">
                                    Equip Your Game with the Best Gear
                                </h1>
                                <p className=" md:text-lg mt-4 text-center max-w-2xl drop-shadow-sm">
                                    Explore high-quality sports equipment designed for champions like you.
                                </p>
                                <div className="md:mt-6 mt-2">
                                    <button className="bg-indigo-500 hover:bg-indigo-600  px-6 py-3 rounded-md transition">
                                        Shop Now
                                    </button>
                                    <button className="ml-4 bg-white hover:bg-gray-100 text-indigo-500 px-6 py-3 rounded-md border border-indigo-500 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div className='mx-auto'>
                                <img className='w-4/5 mx-auto rounded-xl' src="https://www1.lovethatdesign.com/wp-content/uploads/2016/12/20161208-Go-Sport-BRC-01.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=' lg:gap-10 md:gap-5 items-center justify-between  md:h-[600px] h-[500px] overflow-hidden lg:minH'>
                            <section className="lg:py-16 lg:px-10 md:p-5">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-semibold">Shop by Sport</h2>
                                    <p className=" mt-2">Find gear tailored for your game.</p>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {categories.map((category, index) => (
                                        <div key={index} className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition">
                                            <img src={category.image} alt={category.name} className="w-full md:h-40 h-32 object-cover rounded-md" />
                                            <h3 className="md:mt-2 dark:text-black text-xl font-bold">{category.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <section className="lg:py-16 lg:px-16 p-2 md:h-[600px] h-[500px] overflow-hidden lg:minH">
                            <div className="text-center lg:mb-12 mb-3">
                                <h2 className="md:text-4xl text-xl font-extrabold">What Our Customers Say</h2>
                                <p className="text-lg md:mt-4 opacity-80">Hear from athletes who love our gear.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-3">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="md:p-8 p-2 bg-white rounded-lg shadow-md hover:shadow-xl"
                                    >
                                        <p className="text-gray-700 text-lg italic md:mb-4 mb-1">{testimonial.text}</p>
                                        <div className="md:mt-4 mt-1">
                                            <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </>

        </div >
    );
};

export default Slider;