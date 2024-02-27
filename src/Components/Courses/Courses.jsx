import React, { useState } from "react";
import './Courses.css';
import cardImg from "../../Assets/card-img.png";
import { Button , Card , CardActions,CardContent, CardMedia , Typography } from "@mui/material";
import courses from "../../data.js";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Courses = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards to show at once
        slidesToScroll: 3,
        
    };
 
  const [eachCourse, setEachCourse] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const handleOnclick = (value, name) => {
    console.log(value[name], "with key");
    setEachCourse(value[name]);
    setActiveButton(name); // Set the active button
  };
  // console.log(eachCourse);
  console.log("activeButton",activeButton)

  return (
    <div className="Courses-Parent">
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Roboto",
          color: "#00468D",
          textDecoration: "underline",
        }}
      >
        Our Courses
      </h2>
      <br />
      <div className="heading-text">
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dolore <br />
        </h3>
        <h3 align="center">unde cumque qui nisi quaerat in nostrum !</h3>
      </div>

      <div className="btn-grp">
        {courses.map((value) => (
          <button
            key={Object.keys(value)}
            onClick={(e) => {
                e.preventDefault()
                handleOnclick(value, Object.keys(value))
            }}
            className="buttons"
           >
            {Object.keys(value)}
          </button>
        ))}
      </div>

      <div className="carousel-container">
            <Slider {...settings}>
                {eachCourse.map((value) => (
                    <div className="course-card-parent">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={cardImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {value.courseTitle}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   {value.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Feautures</Button>
                                <Button size="small">Buy Course</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  );
};


