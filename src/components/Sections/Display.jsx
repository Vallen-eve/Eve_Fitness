import Slider from "react-slick";



function Display() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
       
      <section className="container mx-auto py-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <Slider {...settings}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               
            <div className="lg:mt-20">
                 
              <h3 className="text-3xl font-bold text-violet-500 md:text-4xl mb-1"> Our Services</h3>
              <p className="text-lg mb-8 md:text-xl">Checkout our Our unique fitness services that transforms your body and your life. </p>
              <button className="px-6 py-3 bg-violet-500 text-white rounded-sm">See more</button>
                
            </div>

            <div>
              <img src="/about(3).jpg" alt="completed bulifing" className="w-full h-50 rounded-2xl my-0 mb-0" />
              <h3 className="text-xl mt-3 font-bold text-gray-900 ">Basic</h3>

            </div>

            <div>
              <img src="/m.jpg" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
              <h3 className="text-xl mt-3 font-bold text-gray-900">Pro</h3>

            </div>

            <div>
              <img src="/one.jpg" alt="completed buliding" className="w-full h-auto rounded-2xl" />
              <h3 className="text-xl mt-3 font-bold text-gray-900">Elite</h3>
                

            </div>
                
          </div>
        </Slider>

      </section>
      
  );
}

export default Display;
