import { Fade, Slide } from "react-awesome-reveal";

const LottieUse = () => {
    return (
        <div>
            <Slide triggerOnce>
                <p>I will animate only the first time you see me</p>
            </Slide>
            <Fade cascade>
                <p>I enter first...</p>
                <p>...then comes my turn...</p>
                <p>...and finally you see me!</p>
            </Fade>
            
            <Fade cascade damping={0.1}>
                <p>I enter first...</p>
                <p>...then comes my turn...</p>
                <p>...and finally you see me!</p>
            </Fade>
        </div>
    );
};

export default LottieUse;