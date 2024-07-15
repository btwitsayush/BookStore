import React from 'react';
import list from '../../public/list.json';

function Card() {
  return (
    <>
      {list.map((item) => (
        <div key={item.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full hover:scale-90 duration-200">
          <div className="relative  overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img src={item.img} alt="card-image" className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900">
                {item.name}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                RS:{item.price}
              </p>
            </div>
            <p className="block font-sans text-l antialiased font-normal leading-normal text-gray-700 opacity-75">
              {item.title}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100" type="button">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;