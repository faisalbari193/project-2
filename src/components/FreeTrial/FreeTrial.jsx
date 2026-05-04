import Container from "../../ui/Container";
import GirlImg from "../../assets/images/women.png";

const FreeTrial = () => {
  return (
    <section className="bg-[#06C279] relative  py-24">
      <Container>
        <div className="flex justify-between items-center">
          <div className="px-4">
            <h2 className="font-custom font-semibold text-[45px] leading-13.5 text-white  mb-9.5">
              Don’t Worries, Start Your Free Trial Today!
            </h2>
            <a
              href="#"
              className="text-white font-custom font-semibold text-[16px] bg-[#2F2F2F] px-6.25 py-[14.5px] rounded-[5px]"
            >
              Get Free Trial
            </a>
          </div>
          <div className="absolute right-60 -top-11 z-10">
            <img src={GirlImg} alt="cta" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FreeTrial;
