import React from "react";
import Right from "../img/Vector.png";
import { Form, Link } from "react-router-dom";
import Goo from "../img/photo1680775315.jpeg";
import Goo1 from "../img/photo1680775297-removebg-preview.png";
import Goo2 from "../img/photo1680775326.jpeg";
import Goo3 from "../img/photo1680775344-removebg-preview.png";
import Goo4 from "../img/photo1680775336-removebg-preview.png";
import Goo5 from "../img/photo1680775306.jpeg";
import Scrol from "../img/img2 1.png";
import Scrol1 from "../img/ProgrammingIllustration.png";
// import Scrol2 from "../img/img3 1.png";
import Pather from "../img/superkg 1.png";
import Pather1 from "../img/bai-removebg-preview 1.png";
import Pather2 from "../img/sugma 1.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Home.css";

import Time from "./Time";
import InputForm from "./InputForm";

const Home = () => {



  return (
    <div>
      <div className="zazor">
        <div className="container">
          <header className="header">
            <div className="wrapper-header">
              <h1 className="header-text">
                ОкурМенден IT-ни уйронуп, <br /> жашоонду озгорт
              </h1>
              <p className="text-header">
                Тесттен отуп, биринчи сабакты акысыз кор
              </p>
              <div className="btn-header"></div>
              <div className="div-section">
                <button className="btn-section">
                  <p className="textHeader">Тести Баштоо </p>
                  <img className="right" src={Right} alt="" />
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
      {/* header - TheEnd */}


      <section className="section">
        <div className="container">
          <h2 className="text-h2">
            Направления программирования <br />в нашей академии:
          </h2>
          <div className="boxes">
            <Link to="/course">
              <div className="boxesss">
                <div className="wrapper-section">
                  <img src={Goo} alt="" />
                  <p>
                    HTML Frontend <br />
                    разработчик
                  </p>
                  <button>Online</button>
                  <button>Ofline</button>
                </div>

                <div className="wrapper-section">
                  <img src={Goo1} alt="" />
                  <p>
                    CSS Frontend <br />
                    разработчик
                  </p>
                  <button>Online</button>
                  <button>Ofline</button>
                </div>

                <div className="wrapper-section">
                  <img src={Goo2} alt="" />
                  <p>
                    {" "}
                    JavaScript Frontend <br />
                    разработчик
                  </p>
                  <button>Online</button>
                  <button>Ofline</button>
                </div>

                <div className="box">
                  <img src={Goo3} alt="" />
                  <p>
                    {" "}
                    React Frontend <br />
                    разработчик
                  </p>
                  <button>Online</button>
                  <button>Ofline</button>
                </div>

                <div className="box">
                  <img src={Goo4} alt="" />
                  <p>
                    {" "}
                    Python Frontend <br />
                    разработчик
                  </p>
                  <button>Online</button>
                  <button>Ofline</button>
                </div>

                <div className="box">
                  <img src={Goo5} alt="" />
                  <p>
                    {" "}
                    JavaScript Frontend <br />
                    разработчик
                  </p>
                  <button>Online</button>
                  <button>Ofline</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* scrolll */}
      <section className="section-scroll">
        <div className="scroll-wrapper">
      <div className="scroll-wrapper">
        <img src={Scrol} className="d-block w-100" alt=""/>
      </div>

        </div>
      </section>
      {/* scrolll */}

      <section className="portnery">
        <div className="container">
          <div className="wrapper-partnery">
            <h2 className="h2-portnery"> Биздин партнерлор </h2>
          </div>
          <div className="pather-wrapper">
            <div className="pather-section">
              <img className="pather-super" src={Pather} alt="" />
              <img className="pather-photo" src={Pather1} alt="" />
              <img className="pather-photo" src={Pather2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="accardion-section">
        <div className="container">
          <div className="accardion-wrapper">
            <h2 className="accardion-text">Бизге эн коп берилуучу суроолор</h2>

            <div className="flex accardion-boxes">
              <div className="accordion">
                <div className="block-acardion-1">
                  <Accordion
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        IT-ни окуу учун англис тили маанилуубу?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>Жок</Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        Англис тилин билбей туруп программоолону уйронсок
                        болобу?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Ооба, болот. Англис тилин бизден бекер уйроносуз.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        Жаш чектоо барбы?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        14-жаштан 50 жашка чейин окууга болот
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  {/* 1-вый  блок The End */}
                </div>

                <div className="line"></div>

                <div className="block-acardion-1">
                  {/* 2-вый  блок Начало */}
                  <Accordion
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        Окуу борбор качан негизделген?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Окуу борбор 2022-жылдын май айдын негизделген.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        Окууну буткондон кийин жумуш так бересиздерби?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Эгерде сиз окууну жакшы оздоштуруп, биз койгон
                        талаптарга жооп берсениз, анда жумуш жагынан беребиз!
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        Сертификат берилеби?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Окууну ийшиликтуу буткондон кийин окуу борбордон мамлкет
                        тарабынан сертификат берилет.{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              {/* 2-вул блок The End */}
            </div>
          </div>
        </div>
      </section>

      {/* Accardion THE--END */}

      <section className="master-section">
        <div className="container">
          <div className="master-wrapper">
            <h2 className="master-text">Запишитесь на бесплатный урок</h2>
            <div className="time-and-inputForm">

              <div className="master-phka">
                <p>
                  <span style={{ paddingLeft: "100px" }}>
                    Торопитесь! Запись на
                  </span>
                  <br /> бесплатный урок закончится через
                </p>
                <div className="master-time">
                  <Time/>
                </div>
              </div>
              <div>
                   <InputForm/> 
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* master - class TheEnd */}

    </div>
  );
};

export default Home;
