import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Image from "next/image";
import NavBar from "./navbar/NavBar";
import AOS from "aos";
import { useEffect } from "react";
import LOGO from "../../public/images/LOGO.png";
import mettTheBikes from "../../public/images/Meet the bikes.png";
import Slideshow from "../SlideShow";
export default function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <header id="home">
       <div style={{zIndex:-1000,position:"absolute",width:"100%",height:"100vh",opacity:"0.40"}}>
       <Slideshow />
       </div>
        <nav className="container">
          <div className="logo">
            <a href="#">
              <Image src={LOGO} />
            </a>
          </div>
          {/* <a href="#" className="MINT btnmint">
            <span className="mint_button">MINT</span>
          </a>
          <a href="#" className="MINT btnapp">
            <span className="mint_button">Go To App</span>
          </a> */}
        </nav>

        <div className="header-container" style={{padding:"10px"}}>
          <div className="header-container-inner">
            <Image src={mettTheBikes} width={1500} height={400} />

            <p className="header_text">
              Paketlerini hızlıca teslim et,<br></br>
              <span>ödülleri toplamaya hemen başla!</span>
            </p>
            <a href="#bikes" style={{ textDecoration: "none", color: "white" }}>
              <div className="scroll">
                <p>SCROLL</p>
                <div className="down-arrow"></div>
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
