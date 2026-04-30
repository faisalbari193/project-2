import Container from "../../ui/Container";
import p1 from "../../assets/images/p-1.png";
import p2 from "../../assets/images/p-2.png";
import p3 from "../../assets/images/p-3.png";
import { useState } from "react";
const LatestProjects = () => {
  const [active, setActive] = useState(0);

  const categories = [
    "Mobile App",
    "Web Development",
    "UI/UX Design",
    "Graphic Design",
    "Motion Graphics",
  ];
  return (
    <section className="mt-22.75 mb-27">
      <div className="text-center">
        <h2 className="font-custom font-semibold text-[45px] leading-13.5 mb-8.25">
          Our Latest Project
        </h2>
        <ul className="flex justify-center gap-18.25">
          {categories.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setActive(index)}
                className={`font-custom font-medium text-[16px] transition duration-300
        ${active === index ? "text-[#06C279]" : "text-[#7B7B7B]"}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative max-w-223 mx-auto mt-5.25 border-b-2 border-gray-300">
          <div
            className="absolute bottom-0 h-0.5 bg-[#06C279] transition-all duration-300"
            style={{
              width: `${100 / categories.length}%`,
              left: `${(100 / categories.length) * active}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="mt-13.25">
        <Container>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <img
                src={p1}
                alt="Project 1"
                className="w-full object-cover rounded-[15px]"
              />
              <div className="text-center mt-5">
                <h3 className="font-custom font-semibold text-[22px] leading-7.5">
                  Portfolio Landing Page
                </h3>
                <p className="font-custom font-normal text-[16px] leading-5.5 text-[#7B7B7B] mt-1.75 w-86 mx-auto">
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>
            </div>
            <div>
              <img
                src={p2}
                alt="Project 2"
                className="w-full object-cover rounded-[15px]"
              />
              <div className="text-center mt-5">
                <h3 className="font-custom font-semibold text-[22px] leading-7.5">
                  Portfolio Landing Page
                </h3>
                <p className="font-custom font-normal text-[16px] leading-5.5 text-[#7B7B7B] mt-1.75 w-86 mx-auto">
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>
            </div>
            <div>
              <img
                src={p3}
                alt="Project 3"
                className="w-full object-cover rounded-[15px]"
              />
              <div className="text-center mt-5">
                <h3 className="font-custom font-semibold text-[22px] leading-7.5">
                  Portfolio Landing Page
                </h3>
                <p className="font-custom font-normal text-[16px] leading-5.5 text-[#7B7B7B] mt-1.75 w-86 mx-auto">
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <a href="" className="mt-8 px-6.25 py-[14.5px] bg-[#06C279] text-white font-custom font-semibold text-[16px] leading-5.5 rounded-[10px] block w-max mx-auto">
        View All Projects
      </a>
    </section>
  );
};

export default LatestProjects;
