// import Bannar from "../components/Bannar";
import { Helmet } from "react-helmet";
import HowItWork from "../components/HowItWork";
import LostItems from "../components/LostItems";
import Newsletter from "../components/Newsletter";
import Recent from "../components/Recent";
import Success from "../components/Success";
import Sbannar from "./Sbannar";

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-50">
            <Helmet>
                <title>
                    lost-found || Home
                </title>
            </Helmet>  
            
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