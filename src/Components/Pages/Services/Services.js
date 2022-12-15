import React, { useEffect, useState } from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import '../../../App.css'

const Services = () => {
     const [services, setServices] = useState([]);
     useEffect(() => {
       fetch(`fakedata.json`)
         .then((res) => res.json())
         .then((data) => setServices(data[0].serviceitem));
     }, []);
    return (
      <div className="w-4/5 mx-auto my-12">
        <div className='w-1/2 mx-auto text-center mb-6'>
          <h1 className='text-2xl text-primary font-semibold'>Service item</h1>
          <p className='text-[#706666a1]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aut voluptas omnis tempore, velit incidunt unde rerum, adipisci obcaecati,</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {services?.slice(0, 6)?.map((item, idx) => (
            <div
              key={idx}
              className={` rounded h-[100px]  shadow-lg text-white bg-sky-500 flex justify-between items-center`}
            >
              <div className="p-3 rounded">
                <div>{item?.title}</div>
                <div>{item?.description}</div>
              </div>
              <div>
                <FaPizzaSlice className='inline w-12 h-12 m-3 text-amber-300'></FaPizzaSlice>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="btn btn-sm text-primary rounded btn-secondary">See All</p>
        </div>
      </div>
    );
};

export default Services;