import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";

function FreeBookCart() {
  // settings for Slider responsivnes
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const freeBooks = list.filter((book) => book.category === "free");
  console.log(freeBooks);

  return (

    <>
    <div className="z-10">
      <section className="max-w-screen-2xl container mx-auto md:px-20 px-4 ml-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Explore Free Books</h1>
          <p>
            Discover a collection of free books covering different types of
            stories.Whether you read a lot or are new to books, there's
            something for everyone in our collection.
            <span className="text-blue-500">
              Start reading today and enjoy exploring new stories and learning!
            </span>
          </p>
        </div>
      </section>

      <div className="slider-container md:flex md:justify-center md:items-center mt-8 md:mt-10">
  <Slider {...settings} className="lg:w-11/12 w-4/5 ml-8">
    {freeBooks.map((elem) => {
      return (
        <div className="card md:w-2/4 md:px-6 md:ml-3 lg:ml-6 h-4/5" key={elem.id}>
          <figure>
            <img
              src={elem.img}
              alt={elem.name}
              className="object-cover h-56 w-full"  
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title text-lg">
              {elem.name}
              <div className="badge badge-primary">NEW</div>
            </h4>
            <p className="text-base font-semibold">{elem.title}</p>
            <div className="card-actions flex justify-between items-center mt-auto mb-2 px-2">
              <div className="text-left">Rs: {elem.price}</div>
              <button className="btn btn-outline ">Download</button>
            </div>
          </div>
        </div>
      );
    })}
  </Slider>
</div>

</div>



    </>
  );
}

export default FreeBookCart;


