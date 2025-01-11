// import Bannar from "../components/Bannar";
import HowItWork from "../components/HowItWork";
import LostItems from "../components/LostItems";
import Newsletter from "../components/Newsletter";
import Recent from "../components/Recent";
import Success from "../components/Success";
import Sbannar from "./Sbannar";

const Home = () => {
    return (
        <div>
            
            {/* <Bannar></Bannar> */}
             <Sbannar></Sbannar>
            <LostItems></LostItems>
            <Recent></Recent>
             <HowItWork></HowItWork>
             <Success></Success>
             <Newsletter></Newsletter>
             
        </div>
    );
};

export default Home;