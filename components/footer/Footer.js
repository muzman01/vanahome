import React, { useState } from "react";
import Image from "next/image";
import dc from "../../public/images/discord.png";
import tw from "../../public/images/tw.png";
import tl from "../../public/images/tl.png";
import yt from "../../public/images/yt.png";
import log from "../../public/images/ftlogo.png";
import AOS from "aos";
import { Modal, Button } from "react-bootstrap";
import { useEffect } from "react";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="resimengel">yazııı</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [modalShow, setModalShow] = useState(false);
  return (
    <section>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="d-flex justify-content-around mt-5">
        <div className="faqlink" data-aos="fade-right">
          <h1
            className="faq"
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
          >
            FAQ
          </h1>
          <a href="#">
            <Image src={tw} height={40} width={40} />
          </a>
          <a href="#">
            <Image src={dc} height={40} width={40} />
          </a>
         
        </div>

        <div className="" data-aos="fade-left">
          <a href="#home">
            <Image src={log} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
