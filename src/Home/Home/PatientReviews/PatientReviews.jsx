import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const PatientSays = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          "https://doc-house-server-md-borhan.vercel.app/reviews"
        );
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.log("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);
  return (
    <div className="mt-10 md:mt-32">
      <SectionTitle title={"What Our Patients Says"}></SectionTitle>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="wrapper relative">
              <div className="text-[#3B3A3A] p-6 md:p-12 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex gap-5">
                    <img
                      className="w-16 h-16 rounded-full border"
                      src={review.img}
                      alt="Patient img"
                    />
                    <div>
                      <p className="font-bold text-xl ">{review.name}</p>
                      <p>{review.designation}</p>
                    </div>
                  </div>
                  <div>
                    <FaQuoteLeft className="text-5xl text-[#F7A582]"></FaQuoteLeft>
                  </div>
                </div>
                <p className="mt-5">{review.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PatientSays;
