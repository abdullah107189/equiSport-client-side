import { Fade, Slide } from "react-awesome-reveal";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import faq from '../../assets/FAQq.gif'
import Slider from "../../components/Slider/Slider";

const Home = () => {
   
    return (
        <div>
            <Fade cascade damping={0.4}>
                <Slider></Slider>
            </Fade>

            <HomeProducts></HomeProducts>

          


            <div className="md:flex justify-center gap-10 items-center my-10">
                <div className="md:w-1/2">
                    <Slide direction="left" triggerOnce cascade damping={0.4}>
                        <img className="w-full" src={faq} alt="" />
                    </Slide>
                </div>
                <div className="md:w-1/2">
                    <Slide direction="right" triggerOnce cascade damping={0.4}>
                        <>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-xl font-medium">What is your return policy?</div>
                                <div className="collapse-content">
                                    <p>We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">How do I track my order?</div>
                                <div className="collapse-content">
                                    <p>Once your order is shipped, you will receive an email with tracking information. You can use this information to track the status of your order.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">What forms of payment do you accept?</div>
                                <div className="collapse-content">
                                    <p>We accept all major credit cards, including Visa, Mastercard, American Express, and Discover.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
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
        </div>
    );
};

export default Home;