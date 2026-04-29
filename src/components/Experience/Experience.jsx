import Container from "../../ui/Container";
import ExperienceImage from "../../assets/images/exp.png";
const Experience = () => {
  return (
    <section className="my-25">
      <Container>
        <div className="flex gap-36.25 items-center">
          <div className="max-w-137.5 mx-auto mt-9.5 mb-11">
            <h2 className="font-custom font-semibold text-[45px] leading-13.5 mb-7.25 max-w-111.25">
              Experience the power of Corewave
            </h2>
            <p className="font-custom font-normal text-[16px] text-[#7B7B7B] leading-6.5 mb-11.25">
              Are you ready to take your business to the next level? Look no
              further than Corewave. Our innovative technology and expert team
              can help you unlock your business's full potential. By harnessing
              the power of Corewave, you can streamline your operations, improve
              efficiency
            </p>
            <a
              href="#"
              className="px-6.25 py-[14.5px] font-custom font-semibold text-[16px] text-[#06C279] bg-[#DAF6EB] rounded-[5px]"
            >
              Learn more
            </a>
          </div>
          <img
            src={ExperienceImage}
            alt="ExperienceImage"
            className="w-full h-auto rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default Experience;
