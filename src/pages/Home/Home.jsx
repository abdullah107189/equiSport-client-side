import HomeProducts from "../../components/HomeProducts/HomeProducts";
import LottieUse from "../../components/LottieUse/LottieUse";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeProducts></HomeProducts>
            <LottieUse></LottieUse>
        </div>
    );
};

export default Home;