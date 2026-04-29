import Container from "../../ui/Container";
import web from "../../assets/images/Frame.png";
const Offer = () => {
  return (
    <section className="bg-[#EEFFF9] rounded-tl-[300px] rounded-br-[300px] py-17.5">
      <Container>
        <div className="flex gap-28.25">
          <div className="flex gap-6">
            <div className="flex flex-col gap-6 mt-32">
              <div className="w-78 h-80.5 px-8 pt-8 pb-12 bg-white rounded-[10px] shadow-sm">
                <img src={web} alt="Web Development" />
                <h4 className="font-custom font-semibold text-[20px] leading-7.5 mt-3.5 mb-3.5">
                  Web Development
                </h4>
                <p className="font-custom font-normal text-[16px] leading-6 text-[#7B7B7B]">
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>
              <div className="w-78 h-80.5 px-8 pt-8 pb-12 bg-white rounded-[10px] shadow-sm">
                <img src={web} alt="SEO Marketing" />
                <h4 className="font-custom font-semibold text-[20px] leading-7.5 mt-3.5 mb-3.5">
                  SEO Marketing
                </h4>
                <p>
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-78 h-80.5 px-8 pt-8 pb-12 bg-white rounded-[10px] shadow-sm">
                <img src={web} alt="UI/UX Analysis" />
                <h4 className="font-custom font-semibold text-[20px] leading-7.5 mt-3.5 mb-3.5">
                  UI/UX Analysis
                </h4>
                <p>
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>

              <div className="w-78 h-80.5 px-8 pt-8 pb-12 bg-white rounded-[10px] shadow-sm">
                <img src={web} alt="Graphic Design" />
                <h4 className="font-custom font-semibold text-[20px] leading-7.5 mt-3.5 mb-3.5">
                  Graphic Design
                </h4>
                <p>
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-135.75 mx-auto my-66.25">
            <h3 className="font-custom font-semibold text-[45px] leading-13.5 mb-7.5">
              We offer a variety of services such as
            </h3>
            <p className="font-custom font-normal text-[16px] leading-6.5 text-[#7B7B7B] mb-7.5">
              At our company, we pride ourselves on offering a variety of
              services to meet the diverse needs of our clients. Whether you're
              looking for marketing assistance, website design, or IT support,
              we've got you covered
            </p>
            <a
              href="#"
              className="px-6.25 py-[14.5px] bg-[#DAF6EB] font-custom font-semibold text-[16px] rounded-[5px] text-[#06C279]"
            >
              All Services
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Offer;
