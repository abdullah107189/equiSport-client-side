import { Fade, Slide } from "react-awesome-reveal";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import faq from '../../assets/FAQq.gif'
import community from '../../assets/community.gif'
import Slider from "../../components/Slider/Slider";
import Offers from "../../components/Offers/Offers";

const Home = () => {

    return (
        <div className="mxw" >
            <Fade cascade damping={0.4}>
                <Slider></Slider>
            </Fade>


            <HomeProducts></HomeProducts>

            {/* faq section  */}
            <h1 className="md:text-5xl text-2xl text-center md:pt-20 pt-5 font-bold" id="faq">FAQ</h1>
            <div className="md:flex justify-center gap-10 items-center minH md:py-10 py-5">
                <div className="md:w-1/2">
                    <Slide direction="left" triggerOnce cascade damping={0.4}>
                        <img className="w-full" src={faq} alt="" />
                    </Slide>
                </div>
                <div className="md:w-1/2 mt-5 md:m-0 ">
                    <Slide direction="righ" triggerOnce cascade damping={0.4}>
                        <>
                            <div className="collapse collapse-plus bg-white dark:bg-gray-700">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-xl font-medium">What is your return policy?</div>
                                <div className="collapse-content">
                                    <p>We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-white dark:bg-gray-700">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">How do I track my order?</div>
                                <div className="collapse-content">
                                    <p>Once your order is shipped, you will receive an email with tracking information. You can use this information to track the status of your order.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-white dark:bg-gray-700">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">What forms of payment do you accept?</div>
                                <div className="collapse-content">
                                    <p>We accept all major credit cards, including Visa, Mastercard, American Express, and Discover.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-white dark:bg-gray-700">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">How do I contact customer service?</div>
                                <div className="collapse-content">
                                    <p>You can contact our customer service team by phone, email, or through our website. We are available to assist you Monday through Friday, 9am to 5pm EST.</p>
                                </div>
                            </div>
                        </>
                    </Slide>
                </div>
            </div>

            <section>
                <Offers></Offers>
            </section>

            {/* contact section  */}
            <section className="md:flex items-center justify-center gap-10 minH md:py-10 my-5 rounded-r-full shadow-lg" id="contact">
                <div className="md:w-1/2 ">
                    <img className="w-full rounded-2xl" src={community} alt="" />
                </div>
                <div className="container mx-auto text-center md:w-1/2 mt-5 md:m-0">
                    <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
                    <p className="mb-6 text-lg">Get the latest news, updates, and exclusive offers!</p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className=" bg-transparent p-3 rounded-l-lg lg:w-1/2 border focus:outline-none dark:focus:ring-white"
                        />
                        <button className="bg-white hover:bg-white border-white btn rounded-l-none border text-accent  font-semibold py-3 px-6 rounded-r-lg  transition duration-300">
                            Subscribe
                        </button>
                    </div>
                    <p className="mt-4 text-sm">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;