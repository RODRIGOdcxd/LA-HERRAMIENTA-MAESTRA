import React from "react";
import logo from "../imagenes/bxl-graphql.svg";
import "../estilos/header.scss";
import Button from "@mui/material/Button";

function Header() {
  const menu = [
    {
      desc: ["PRODUCTOS", "OFERTAS", "CONTACTO"],
      url: ["/productos", "/ofertas", "/contacto"],
    },
  ];
  return (
    <header>
      <div className="divLogo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <a href="/">LA HERRAMIENTA MAESTRA</a>
      </div>
      <div className="divMenu">
        <ul>
          {menu.map((item) =>
            item.desc.map((subitem, index) => (
              <li>
                <a href={item.url[index]}>{subitem}</a>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="divLog">
        <Button
          variant="contained"
          className="btnRegLog"
          sx={{
            fontSize: ".9vw",
            padding: "0",
            fontWeight: "bold",
            height: "50%",
            minWidth: "0",
            width: "90%",
            textTransform: "none",
            borderRadius: ".5vw"
          }}
        >
          Ingresar/Logear
        </Button>
      </div>
    </header>
  );
}

export default Header;
