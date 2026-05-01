import Container from "../../ui/Container";
import Client1 from "../../assets/images/client-1.png";
import Client2 from "../../assets/images/client-2.png";
import Client3 from "../../assets/images/client-3.png";
import SliderLib from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = SliderLib.default || SliderLib;
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
      setActive(next % 3); // 3 dot loop control
    },
  };
  return (
    <section className="mt-21.5 mb-25">
      <Container>
        <h3 className="text-center font-custom font-semibold text-[45px] leading-13.5 mb-12">
          What Our Clients Saying
        </h3>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src={Client1} alt="Client 1" className="mx-auto" />
          </div>

          <div>
            <img src={Client2} alt="Client 2" className="mx-auto" />
          </div>

          <div>
            <img src={Client3} alt="Client 3" className="mx-auto" />
          </div>

          <div>
            <img src={Client1} alt="Client 1" className="mx-auto" />
          </div>

          <div>
            <img src={Client2} alt="Client 2" className="mx-auto" />
          </div>

          <div>
            <img src={Client3} alt="Client 3" className="mx-auto" />
          </div>
        </Slider>
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              onClick={() => sliderRef.current.slickGoTo(i)}
              className={`w-6 h-2 rounded-full cursor-pointer transition-all duration-300 
                ${
                  active === i
                    ? "bg-[#06C279] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
            ></div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurClient;
