import Container from "../../ui/Container";
import Man from "../../assets/images/man.png";
import Womun1 from "../../assets/images/womun-1.png";
import Womun2 from "../../assets/images/womun-2png.png";
import { IoStarSharp } from "react-icons/io5";
import { ImQuotesLeft } from "react-icons/im";
import SliderLib from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = typeof SliderLib === "function" ? SliderLib : SliderLib.default;

const OurClient = () => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    beforeChange: (_, next) => {
      setActive(next % 3);
    },
  };

  const slides = [
    { img: Man, title: "Excellent Team!", name: "Farhan Rio" },
    { img: Womun1, title: "Great Service", name: "Alizabeth Nancy" },
    { img: Womun2, title: "The Best Agency!", name: "Jenny Wilson" },
    { img: Man, title: "Excellent Team!", name: "Farhan Rio" },
    { img: Womun1, title: "Great Service", name: "Alizabeth Nancy" },
    { img: Womun2, title: "The Best Agency!", name: "Jenny Wilson" },
  ];

  if (!Slider) {
    console.error("react-slick failed to load");
    return null;
  }

  return (
    <section className="mt-21.5 mb-25">
      <h3 className="text-center font-custom font-semibold text-[45px] leading-13.5 mb-11.75">
        What Our Clients Saying
      </h3>
      <Container>
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, i) => (
              <div key={i} className="px-3">
                <div className="shadow p-10 relative rounded-[20px]">
                  <img src={slide.img} alt={slide.name} className="mx-auto" />
                  <div
                    className={`w-10.75 h-10.75 rounded-full flex items-center justify-center  absolute bottom-92 left-30 ${
                      active === i ? "bg-[#06C279] scale-110" : "bg-black "
                    }`}>
                    <ImQuotesLeft className="text-[22px] text-white" />
                  </div>
                  <h3 className="font-custom text-center font-semibold text-[24px] leading-7.5 mt-3.75 mb-1">
                    {slide.title}
                  </h3>
                  <span className="flex items-center justify-center gap-[5.35px] text-[26px] text-[#FFB800]">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </span>
                  <p className="font-custom font-normal text-[16px] leading-6 text-[#7B7B7B] text-center mt-5 mb-3.75 px-2">
                    The customer service team at this company was very
                    responsive and helpful when I had questions about their
                    products.
                  </p>
                  <h3 className="font-custom font-semibold text-[18px] leading-7.5 text-center">
                    {slide.name}
                  </h3>
                  <p className="font-custom font-normal text-[14px] text-[#7B7B7B] leading-6 text-center">
                    Happy Seller
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-11.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`w-6 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                active === i
                  ? "bg-[#06C279] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurClient;
