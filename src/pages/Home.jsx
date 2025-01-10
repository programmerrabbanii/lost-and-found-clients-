import Bannar from "../components/Bannar";
import HowItWork from "../components/HowItWork";
import LostItems from "../components/LostItems";
import Newsletter from "../components/Newsletter";
import Recent from "../components/Recent";
import Success from "../components/Success";

const Home = () => {
    return (
        <div>
            
            <Bannar></Bannar>
            <LostItems></LostItems>
            <Recent></Recent>
             <HowItWork></HowItWork>
             <Success></Success>
             <Newsletter></Newsletter>
             
        </div>
    );
};

export default Home;