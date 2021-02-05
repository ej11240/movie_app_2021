import React from 'react';
import PropTypes from 'prop-types';

const foodILike=[
  {
    id:1,
    name: "떡볶이",
    image:"https://media-cdn.tripadvisor.com/media/photo-s/12/31/92/d9/1519804025288-largejpg.jpg",
    rating:5
  },
  {
    id:2,
    name:"라면",
    image:"https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjZfNDMg/MDAxNTkwNDgxOTc1OTE1.rpezhYUxGHG0X6-dmVwuACnqm7AugH9CUjxEatcVNsAg.C27glH_kXPk5zTORLyjUbU_yjkGDEbmwZXjaq_xGltIg.JPEG.naverschool/%ED%98%B8%EB%A1%9C%EB%A1%9C%EB%A1%9D.jpg?type=w800",
    rating:3
  },
  {
    id:3,
    name:"에그마요 salad",
    image:"https://mblogthumb-phinf.pstatic.net/MjAyMDEyMDhfMTI4/MDAxNjA3MzU1NjcyOTg3._Ql3p8iDGizLQ3EYAcsM8sT2ElW-b9gnN68M-AOP6X4g.2PZ0tYBuJH5UdIvEJ0MZSmitiwsuQBeV47ojgCTRoI4g.JPEG.guswl3974/IMG_1190.jpg?type=w800",
    rating:5
  },
  {
    id:4,
    name:"들깨칼국수",
    image:"https://t1.daumcdn.net/cfile/tistory/998364365A84CAEB0A",
    rating:5
  },
  {
    id:5,
    name:"보리비빔밥",
    image:"https://lh3.googleusercontent.com/proxy/5ySu_okgtlfM6f2VxJ9BUwIZ-Ah8nK5a-LGP7aIQTuTYNNBl4IjAYY5m3QCHr8_f3a8uzWuLcUBFwVne5vFW7qy8x0yzzfFC6JycyJS8TZ0",
    rating:4
  }
]

function Food({ name, image, rating}){
  return (
    <div>
      <h2> I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} width="200px" alt={name}/>
      <hr/>
    </div>
  )
}
Food.propTypes={
  id: PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};
function renderFood(dish){
  // console.log(dish)
  return <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div align="center">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
