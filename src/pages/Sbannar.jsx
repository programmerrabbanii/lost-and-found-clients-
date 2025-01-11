import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import jonny from "../assets/img/jonny-gios-4SQ1IfHNIlc-unsplash.jpg";
import mikala from "../assets/img/mika-baumeister-9TvuxGW8ut0-unsplash.jpg";
import petter from "../assets/img/peter-herrmann-FcWtBdRiryE-unsplash.jpg";

const Sbannar = () => {
    const images = [jonny, mikala, petter];

    return (
        <div className="text-center">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showThumbs={true} // Thumbnail enabled
                thumbWidth={80} // Thumbnail width
                renderThumbs={() =>
                    images.map((image, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center h-[60px] w-[80px] overflow-hidden mx-auto"
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="h-[50px] w-auto object-contain"
                            />
                        </div>
                    ))
                }
            >
                <div className="relative h-[70vh]">
                    <img src={jonny} alt="Jonny Gios" className="h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
                        <h1 className="text-4xl font-bold mb-2">Welcome to Our Services</h1>
                        <p className="text-lg">Explore the best lost and found solutions</p>
                    </div>
                </div>
                <div className="relative h-[70vh]">
                    <img src={mikala} alt="Mika Baumeister" className="h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
                        <h1 className="text-4xl font-bold mb-2">Join Our Community</h1>
                        <p className="text-lg">We connect people with their lost treasures</p>
                    </div>
                </div>
                <div className="relative h-[70vh]">
                    <img src={petter} alt="Peter Herrmann" className="h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
                        <h1 className="text-4xl font-bold mb-2">Find What You've Lost</h1>
                        <p className="text-lg">Your search ends here!</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Sbannar;
