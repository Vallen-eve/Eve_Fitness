import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Display() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* LEFT CONTENT */}
      <div className="text-left">
        <h3 className="text-4xl md:text-5xl font-extrabold text-violet-600 mb-4 leading-tight">
          Our Services
        </h3>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover our unique fitness programs designed to transform your body
          and mind. From beginner to elite, we have the perfect plan to help you
          achieve your goals.
        </p>
        <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white text-lg font-semibold rounded-md shadow-md transition">
          See More
        </button>
      </div>

      {/* RIGHT SLIDER */}
      <div className="w-full">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="px-3"> 
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/about(3).jpg"
                alt="Basic Plan"
                className="w-full h-50 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                <p className="text-gray-600 mt-2">
                  Perfect for beginners starting their fitness journey.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-3"> 
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/m.jpg"
                alt="Pro Plan"
                className="w-full h-50 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="text-gray-600 mt-2">
                  Step up your workouts with advanced training options.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/m.jpg"
                alt="Pro Plan"
                className="w-full h-50 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="text-gray-600 mt-2">
                  Step up your workouts with advanced training options.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="px-3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/m.jpg"
                alt="Pro Plan"
                className="w-full h-50 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="text-gray-600 mt-2">
                  Step up your workouts with advanced training options.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="px-3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/one.jpg"
                alt="Elite Plan"
                className="w-full h-50 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">Elite</h3>
                <p className="text-gray-600 mt-2">
                  Experience top-tier, personalized training sessions.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Display;
