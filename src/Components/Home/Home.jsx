import Banner from "./Banner";
import Learning from "./Learning1";
import Slider from "./Slider";
import Teachers from "./Teachers";
import Tracks from "./Tracks";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tracks></Tracks>
            <Learning></Learning>
            <Slider></Slider>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;