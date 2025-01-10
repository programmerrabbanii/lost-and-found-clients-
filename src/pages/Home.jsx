import Bannar from "../components/Bannar";
import HowItWork from "../components/HowItWork";
import LostItems from "../components/LostItems";
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
             
        </div>
    );
};

export default Home;