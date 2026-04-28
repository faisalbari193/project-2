import Container from "../../ui/Container";
import NavbarImage from "../../assets/images/Logo.png";
const Navbar = () => {
  return (
    <nav className="mt-6.5  absolute w-full  top-0 left-0 z-10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex justify-between gap-x-104">
            <a href="#">
              <img src={NavbarImage} alt="CoreWave Logo" />
            </a>
            <ul className="flex gap-11.25">
              <li>
                <a
                  href=""
                  className="font-custom font-medium text-[16px] duration-150 hover:text-[#06C279]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom font-medium text-[16px] duration-150 hover:text-[#06C279]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom font-medium text-[16px] duration-150 hover:text-[#06C279]"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom font-medium text-[16px] duration-150 hover:text-[#06C279]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom font-medium text-[16px] duration-150 hover:text-[#06C279]"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-custom font-medium text-[16px] duration-150 hover:text-[#06C279]"
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
          <a
            href=""
            className="px-6.25 py-[14.5px] bg-[#06C279] font-custom text-white rounded-[5px] font-semibold text-[16px]"
          >
            Register
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
