import React from "react";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import rm1house from "../../public/images/rm1house.png";
import rm2house from "../../public/images/rmhosuse2.png";
import rm3house from "../../public/images/rmhouse3.png";

function Roadmap() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="containerroad">
      <h1 className="title">ROAD MAP</h1>
      <div className="row">
        <div className="roadmap1">
          <div>
            <Image src={rm1house} data-aos="fade-up-right" />
            <div className="mobilroad1"></div>
          </div>
          <div>
            <h3>PHASE 1</h3>
            <ul>
              <li data-aos="fade-up-left" data-aos-duration="1000">Mint NFT</li>
              <li data-aos="fade-up-left" data-aos-duration="1000">NFT&apos;lerin marketplace de listelenmesi</li>
              <li data-aos="fade-up-left" data-aos-duration="1000">$BIKE token için likidite ekleme</li>
              <li data-aos="fade-up-left" data-aos-duration="1000">Game Launch</li>
            </ul>
          </div>
        </div>
        <div className="roadmap2">
          <div>
            <Image src={rm2house} data-aos="fade-up-right" />
            <div className="mobilroad1"></div>
          </div>
          <div>
            <h3>PHASE 2</h3>
            <ul>
              <li data-aos="fade-up-left" data-aos-duration="1000">Mint extra NFT</li>
              <li data-aos="fade-up-left" data-aos-duration="1000">Benzin istasyonunda staking</li>
              <li data-aos="fade-up-left" data-aos-duration="1000">Ekstra NFT&apos;ler için geliştirilebilir sistem</li>
              <li data-aos="fade-up-left" data-aos-duration="1000">Some quest and airdrops</li>
            </ul>
          </div>
        </div>
        <div className="roadmap3">
          <div>
            <Image src={rm3house}  data-aos="fade-up-right"/>
            <div className="mobilroad1"></div>
          </div>
          <div>
            <h3>PHASE 3</h3>
            <ul>
              <li data-aos="fade-up-left">Motor yarışları</li>
              <li data-aos="fade-up-left">Yönetim Tokenı</li>
              <li data-aos="fade-up-left">PVP tournament</li>
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
