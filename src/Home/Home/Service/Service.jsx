import { useEffect, useState } from "react";
import servicePerson from "../../../assets/service/service-person.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Button from "../../../components/Button";
import { HiOutlineClock } from "react-icons/hi2";

const Service = () => {
  const [services, setServices] = useState([]);
  const categories = [
    "Cavity Protection",
    "Cosmetic Dentistry",
    "Oral Surgery",
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          "https://doc-house-server-md-borhan.vercel.app/services"
        );
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.log("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="mt-10 md:mt-32">
      <div className="grid md:grid-cols-2 gap-6 items-center justify-center">
        <div>
          <img src={servicePerson} alt="Service Person" />
        </div>
        <div>
          <h2 className="sectionTitle">Our Services</h2>
          <p className="text-[#3B3A3A]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="mt-7">
            <Tabs>
              <TabList>
                {categories.map((category, index) => (
                  <Tab key={index}>
                    <span className="font-bold">{category}</span>
                  </Tab>
                ))}
              </TabList>

              {categories.map((category, index) => (
                <TabPanel key={index}>
                  {services
                    .filter((service) => service.category === category)
                    .map((service, index) => (
                      <div className="mt-8" key={index}>
                        <img
                          className="h-80 w-full rounded-md"
                          src={service.img}
                          alt="Service img"
                        />
                        <h2 className="sectionTitle mt-5 mb-7">
                          {service.name}
                        </h2>
                        <p className="text-[#3B3A3A] mb-2">{service.desc}</p>
                        <p className="text-[#3B3A3A]">{service.desc2}</p>
                        <Button>More Details</Button>
                      </div>
                    ))}
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10 md:mt-32">
        <div className="flex p-10 gap-5 rounded-lg hover:bg-[#F7A582] transition-all bg-[#07332F] shadow-xl">
          <div>
            <HiOutlineClock className="text-white text-5xl"></HiOutlineClock>
          </div>
          <div className=" text-white">
            <h2 className="card-title">Opening Hours</h2>
            <p>Open 9.00 am to 5.00pm Everyday</p>
          </div>
        </div>
        <div className="flex p-10 gap-5 rounded-lg hover:bg-[#F7A582]  transition-all bg-[#07332F] shadow-xl">
          <div>
            <HiOutlineClock className="text-white text-5xl"></HiOutlineClock>
          </div>
          <div className=" text-white">
            <h2 className="card-title">Opening Hours</h2>
            <p>Open 9.00 am to 5.00pm Everyday</p>
          </div>
        </div>
        <div className="flex p-10 gap-5 rounded-lg hover:bg-[#F7A582] transition-all bg-[#07332F] shadow-xl">
          <div>
            <HiOutlineClock className="text-white text-5xl"></HiOutlineClock>
          </div>
          <div className=" text-white">
            <h2 className="card-title">Opening Hours</h2>
            <p>Open 9.00 am to 5.00pm Everyday</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
