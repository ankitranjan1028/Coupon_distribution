import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const quizImages = [
  "/images/quiz1.png",
  "/images/quiz2.png",
  "/images/quiz3.png",
];

const questions = [
  "Ready to test your knowledge?",
  "Challenge yourself with exciting quizzes!",
  "Compete, learn, and have fun!",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStartCouponCapture = () => {
    navigate("/coupon-capture");
  };

  return (
    <div className="relative w-full h-screen text-white overflow-hidden bg-gray-900">
      {/* Background Image Slider */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {quizImages?.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <img
              src={image}
              alt="Quiz Background"
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        ))}
      </Carousel>

      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 bg-black bg-opacity-40 backdrop-blur-lg">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1 }}
        >
          Round Robin Coupon Distribution
        </motion.h1>

        {/* Auto-Sliding Questions */}
        <motion.p
          key={currentQuestion}
          className="text-xl md:text-3xl mt-6 max-w-2xl text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          {questions[currentQuestion]}
        </motion.p>

        {/* Start Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-lg text-white rounded-full transform hover:scale-105 cursor-pointer"
            onClick={handleStartCouponCapture}
          >
            Start Capture
          </button>
        </motion.div>
      </div>
    </div>
  );
}