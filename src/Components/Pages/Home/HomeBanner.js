import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '../../../App.css'

const HomeBanner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch(`fakedata.json`)
      .then((res) => res.json())
      .then((data) => setBanner(data[0].bannerdata));
  }, []);

  return (
    <div className="">
      <Splide
        options={{
          perPage: 1,
          height: "34rem",
          rewind: true,
          gap: "1rem",
        }}
      >
        {banner?.map((item, idx) => (
          <SplideSlide key={idx}>
            <div className=" bg-[#ffc0cb96] py-6 px-24 mt-2 rounded   lg:flex justify-between items-center h-full">
              <div className="lg:w-1/2 text-primary">
                <h3 className="text-4xl">{item?.title}</h3>
                <h3 className="my-4">{item?.description}</h3>
                <h3 className="btn btn-sm rounded btn-secondary text-primary">Start spinning </h3>
              </div>
              <img
                className="w-1/3 h-full hidden lg:block"
                src="https://i.ibb.co/Z2YpDbd/kisspng-final-fantasy-xiv-gold-royalty-free-coin-vector-realistic-gold-jar-5a83e5437b48f7-9263445215.png"
                alt=""
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HomeBanner;
