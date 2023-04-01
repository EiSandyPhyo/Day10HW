import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {HiStar,HiOutlineStar} from 'react-icons/hi'

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setDetail(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Creating stars
/* const star = (ratingnum) => {
    const i = document.createElement("i");
    i.classList.add("bi", ratingnum ? "bi-star-fill" : "bi-star", "ms-1");
    return i;
}; */

/* const stars = (num) => {
    let result = "";
    for(let i=1; i<=5; i++){
        if(Math.ceil(num) >= i){
            result += `<HiStar size={30}/>`;
        }else{
            result += `<HiOutlineStar size={28}/>`;
        }
    }
    
    return result;
};

console.log(detail.rating) */
    const totalStars = 5;
    const activeStars = Math.floor(detail.rate)
    console.log(activeStars)

  return (
    <div>
      <div className="  bg-gray-500">
        <img src={detail.image} className="w-[400px] mx-auto" alt="" />
      </div>
      <div className="flex flex-col items-center">
        {/* <p className="bg-teal-500 px-6 py-2 text-center">{detail.category}</p> */}
        <p>{detail.title}</p>
        {/* <HiStar size={30}/> */}
        {/* <HiOutlineStar size={28}/> */}
        {/* <p className="">{stars(detail.rating)}</p> */}
        {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <HiStar /> : <HiOutlineStar />;
      })}
       
      </div>
     
    </div>
  );
};

export default Detail;



/* 
import React from 'react';

function RatingStar({ rating }) {
  const starStyle = {
    fill: 'gold',
    stroke: 'black',
    strokeWidth: '1px',
    width: '20px',
    height: '20px',
    marginRight: '5px',
  };

  const starPoints = '10,0 13.66,7.5 21.32,8.2 15.46,13.4 17.33,21.2 10,17.5 2.67,21.2 4.54,13.4 0.68,8.2 8.34,7.5';

  return (
    <div>
      {[...Array(Math.floor(rating))].map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" style={starStyle}>
          <polygon points={starPoints} />
        </svg>
      ))}
      {rating - Math.floor(rating) >= 0.5 && (
        <svg viewBox="0 0 24 24" style={starStyle}>
          <polygon points={starPoints} />
        </svg>
      )}
    </div>
  );
}

export default RatingStar;


*/
