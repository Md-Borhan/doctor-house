import bannerImg from "../../../assets/banner/heroImg.png";
import shape1 from "../../../assets/banner/shape1.png";
import shape2 from "../../../assets/banner/shape2.png";
import shape3 from "../../../assets/banner/shape3.png";

const Banner = () => {
  return (
    <div className="bannerImg pb-8">
      <div className="hero h-[calc(100vh-126px)]">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-[#F3F3F3]">
            <h1 className="text-3xl md:text-7xl font-semibold ">
              Your Best Medical Help Center
            </h1>
            <p className="py-3 md:py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-lg mt-5 btn-outline hover:text-[#F7A582] bg-[#F7A582] hover:bg-transparent text-white border-[#F7A582] hover:border-[#F7A582] text-xl">
              All Service
            </button>
          </div>
          <img
            src={bannerImg}
            className="w-full md:max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <img className="w-full" src={shape1} alt="" />
      </div>
      <div className="absolute top-[30%] left-[40%]">
        <img className="w-full" src={shape2} alt="" />
      </div>
      <div className="absolute bottom-[1%] left-[46%]">
        <img className="w-full" src={shape3} alt="" />
      </div>
    </div>
  );
};

export default Banner;
