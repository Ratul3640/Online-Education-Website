import Banner from "./Banner";
import Footer from "./Footer";
import Learning from "./Learning1";
import Newslater from "./Newslater";
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
            <Newslater></Newslater>
            <Footer></Footer>
        </div>
    );
};

export default Home;