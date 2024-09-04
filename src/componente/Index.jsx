import React from "react";
import Header from "./Header";
import "../estilos/index.scss";
import Portada from "../imagenes/pexels-suntorn-somtong-386224-1029243.jpg";
function Index() {
  return (
    <>
      <Header />
      <main>
        <section className="sectionPortada">
          <img className="imgPortada" src={Portada} alt="portada" />
          <div className="divArrowBotton" style={{width: "3vw", height: "auto"}}>
            <svg
              width="105"
              height="105"
              viewBox="0 0 110 110"
              style={{width: "100%", height: "100%"}}
            >
              <path
                d="M 5 5 L 55 105 L 105 5"
                fill="none"
                stroke="black"
                stroke-width="9"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}

export default Index;
