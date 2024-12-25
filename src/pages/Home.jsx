import Bannar from "../components/Bannar";
import HowItWork from "../components/HowItWork";
import LostItems from "../components/LostItems";
import Success from "../components/Success";

const Home = () => {
    return (
        <div>
            
            <Bannar></Bannar>
            <LostItems></LostItems>
             <HowItWork></HowItWork>
             <Success></Success>
             
        </div>
    );
};

export default Home;