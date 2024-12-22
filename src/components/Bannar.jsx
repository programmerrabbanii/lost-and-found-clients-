import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Bannar = () => {
  const handleDone = () => {
    console.log("Typing completed!");
  };

  const handleType = (count) => {
  };
 
  return (
    <div className="relative">
      <div className="carousel w-full">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/JzNymHF/close-up-coin-jar-with-tree.jpg"
            className="w-full h-screen object-cover"
            alt="Slide 1"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-11/12 px-4 sm:px-6 md:px-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide shadow-md drop-shadow-2xl">
              Empower Your Dreams and Make Them a Reality!
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-light opacity-90">
              <Typewriter
                words={[
                  "Raise funds for creative ideas and personal goals.",
                  "Our platform helps turn your imagination into reality.",
                  "Gather support from others who believe in your vision!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </p>
          </div>
          <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between">
            <a href="#slide3" className="btn btn-circle text-3xl bg-opacity-60 hover:bg-opacity-80 transition-all shadow-md">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle text-3xl bg-opacity-60 hover:bg-opacity-80 transition-all shadow-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/448qZSV/dream-word-wooden-cubes.jpg"
            className="w-full h-screen object-cover"
            alt="Slide 2"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-11/12 px-4 sm:px-6 md:px-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide shadow-md drop-shadow-2xl">
              Join Our Community and Start Your Journey!
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-light opacity-90">
              <Typewriter
                words={[
                  "Be a part of the change by supporting campaigns.",
                  "Together, we can create a better future.",
                  "Help others in need of your support!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </p>
          </div>
          <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between">
            <a href="#slide1" className="btn btn-circle text-3xl bg-opacity-60 hover:bg-opacity-80 transition-all shadow-md">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle text-3xl bg-opacity-60 hover:bg-opacity-80 transition-all shadow-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Vv2kkty/white-rag-dolls-field.jpg"
            className="w-full h-screen object-cover"
            alt="Slide 3"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-11/12 px-4 sm:px-6 md:px-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide shadow-md drop-shadow-2xl">
              Start Your Campaign and Inspire Others!
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-light opacity-90">
              <Typewriter
                words={[
                  "Launch your idea and inspire others to contribute.",
                  "Your project can change lives.",
                  "Create a ripple effect that helps many people in need!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </p>
          </div>
          <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between">
            <a href="#slide2" className="btn btn-circle text-3xl bg-opacity-60 hover:bg-opacity-80 transition-all shadow-md">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle text-3xl bg-opacity-60 hover:bg-opacity-80 transition-all shadow-md">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
