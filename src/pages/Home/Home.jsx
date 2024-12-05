import { Fade } from "react-awesome-reveal";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import LottieUse from "../../components/LottieUse/LottieUse";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Fade cascade  damping={0.4}>
                <Slider></Slider>
            </Fade>
            <HomeProducts></HomeProducts>
            <LottieUse></LottieUse>
        </div>
    );
};

export default Home;