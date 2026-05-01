import Container from "../../ui/Container";
import Logo from "../../assets/images/Logo.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Linkedin from "../../assets/images/linkdin.png";
import Be from "../../assets/images/be.png";

const Footer = () => {
  return (
    <footer className="mt-25">
      <Container>
        <div className="grid grid-cols-4 gap-16 mb-10.5">
          <div>
            <img src={Logo} alt="Logo" className="mb-6" />
            <p className="font-custom font-normal text-[#7B7B7B] text-[14px] leading-5.5 mb-1">
              mukimsdesign@gmail.com
            </p>
            <p className="font-custom font-normal text-[#7B7B7B] text-[14px] leading-5.5 mb-5">
              +88 01767630044
            </p>
            <div className="flex gap-[7.41px]">
              <a href="">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="">
                <img src={Be} alt="Be" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-custom font-semibold text-[20px] leading-7.5 mb-6.5">
              Services
            </h3>
            <ul className="flex flex-col gap-y-2.25">
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B] hover:text-teal-500 transition-colors"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B] hover:text-teal-500 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B] hover:text-teal-500 transition-colors"
                >
                  SEO Marketing
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B] hover:text-teal-500 transition-colors"
                >
                  UI/UX Analysis
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B] hover:text-teal-500 transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-custom font-semibold text-[20px] leading-7.5 mb-6.5">
              Help
            </h3>
            <ul className="flex flex-col gap-y-2.25">
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B]  transition-colors"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B]  transition-colors"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B]  transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom text-[14px] text-[#7B7B7B]  transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-custom font-semibold text-[20px] leading-7.5 mb-6.5">
              Contact Us
            </h2>
            <input
              type="email"
              placeholder="Enter your mail"
              className="w-full border border-gray-200 rounded-[5px] py-3.25 pl-3.75 text-sm text-gray-400 outline-none"
            />
            <div className="mt-5">
              <a
                href=""
                className="cursor-pointer  px-6.25 py-[14.5px] bg-[#06C279]  text-white font-semibold text-[14px] rounded-[5px]"
              >
                Request & Callback
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-3.25"></div>
        <p className="text-center font-custom font-medium text-[14px] leading-5.5 text-[#7B7B7B] py-4">
          @2023 CoreWave. All copyrights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
