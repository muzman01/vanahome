import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import Image from "next/image";
import bg1 from "../assets/background/1.jpg";
import bg2 from "../assets/background/2.jpg";
import bg3 from "../assets/background/3.jpg";
import bg4 from "../assets/background/4.jpg";
import bg5 from "../assets/background/5.jpg";
import bg6 from "../assets/background/6.jpg";
import bg7 from "../assets/background/7.jpg";
import bg8 from "../assets/background/8.jpg";
import bg9 from "../assets/background/9.jpg";
const fadeImages = [
  {
    url: bg1,
    caption: "Slide 1",
  },
  {
    url: bg2,
    caption: "Slide 2",
  },
  {
    url: bg3,
    caption: "Slide 3",
  },
  {
    url: bg4,
    caption: "Slide 4",
  },
  {
    url: bg5,
    caption: "Slide 5",
  },
  {
    url: bg6,
    caption: "Slide 6",
  },
  {
    url: bg7,
    caption: "Slide 7",
  },
  {
    url: bg8,
    caption: "Slide 8",
  },
  {
    url: bg9,
    caption: "Slide 9",
  },
];
const properties = {
  duration: 3000,
  transitionDuration: 1500,
  infinite: true,
  arrows: false,
};
const Slideshow = () => {
  return (
    <div style={{ zIndex: -1 }}>
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div
            className="each-fade"
            style={{
              width: "100wh",
              height: "100vh",
              //   webkitAppRegion: 'drag',
              
              
            }}
            key={index}
          >
            <div
              className="image-container"
    
            >
              <Image
                src={fadeImage.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;
