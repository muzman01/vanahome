import React from "react";
import hodor from "../../public/images/hodor.png";
import coinlos from "../../public/images/coinlos.png";
import chef from "../../public/images/chef.png";
import musa from "../../public/images/musa.png";
import ninja from "../../public/images/ninja.png";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
function Team() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="container">
      <div className="team">
        <br></br>
        <h1 className="ttTeam title">TEAM</h1>
        <div className="line">
          <div className="img">
            <Image
              src={hodor}
              height={280}
              width={200}
              data-aos="flip-down"
              data-aos-duration="2000"
            />
            <Image src={coinlos} height={280} width={200} data-aos="flip-up" />
            <Image
              src={chef}
              height={280}
              width={200}
              data-aos="flip-down"
              data-aos-duration="2000"
            />
            <Image src={musa} height={280} width={200} data-aos="flip-up" />
            <Image
              src={ninja}
              height={280}
              width={200}
              data-aos="flip-down"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
