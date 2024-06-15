import { useState } from "react";
import "./busca.css";
import Logo from "../../Assets/images/LogoCliniK2.png";
import Queda from "../../Assets/images/Queda.gif";
import Manicomio2 from "../../Assets/images/manicomio2.jpg";
import Manicomio3 from "../../Assets/images/manicomio3.png";
import Gif from "../../Assets/images/Gif.gif";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Whats from "../../Assets/images/whatsapp.png";

function Busca() {
  const [] = useState();

  return (
    <div className="App">
      <header class="header">
        <img src={Logo} />

        <div class="cards">
          <div class="card">
            <div class="card2">
              <div class="whatsapp">
                <a
                  id="whats"
                  href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true">
                    {" "}
                    (11-96978-4999)
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr id="linha1" />
      <div class="container">
        <h1>Pesquisa de profissional</h1>
        <input
          className="search-name"
          type="text"
          placeholder="pesquisar"
        ></input>
      </div>
    </div>
  );
}
export default Busca;
