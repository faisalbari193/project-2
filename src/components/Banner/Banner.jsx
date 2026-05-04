import BannerImage from "../../assets/images/banner.png";
import Container from "../../ui/Container";
const Banner = () => {
  return (
    <section className="bg-[#EEFFF9]  relative pt-24">
      <Container>
        <div className="flex gap-35.25 items-center">
          <div className="w-[50%] mx-auto">
            <h1 className="font-custom font-light  text-[60px] leading-[71.5px] pb-9.25">
              Empower Your Team{" "}
              <span className="font-bold">With CoreWave's</span>
            </h1>
            <p className="font-custom font-normal text-[20px] leading-7.5 pb-12.75 text-[#717171]">
              Boost Productivity and Wellness in Your Organization with
              CoreWave's Advanced Tools and Techniques
            </p>
            <div className="flex gap-5">
              <a
                href=""
                className="font-custom font-semibold text-white   bg-[#05A063] py-3.5 px-6.25 rounded-[5px]"
              >
                Explore More
              </a>
              <a
                href=""
                className="text-center border border-2xl border-[#06C279]  py-3.5 px-6.25 rounded-[5px] font-custom font-semibold text-[16px]"
              >
                <svg
                  className="inline-block  pr-3"
                  width="30"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="10" fill="#DAF6EB" />
                  <path
                    d="M7.33334 13.9354V6.4608C7.33334 5.59418 8.25413 5.05254 8.95827 5.48585L15.458 9.22317C16.2163 9.65648 16.2163 10.7939 15.458 11.2272L8.95827 14.9646C8.25413 15.3437 7.33334 14.8021 7.33334 13.9354Z"
                    fill="#06C279"
                  />
                </svg>{" "}
                Watch Video
              </a>
            </div>
          </div>
          <div className="w-[50%] mx-auto">
            <img src={BannerImage} alt="CoreWave Banner" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
