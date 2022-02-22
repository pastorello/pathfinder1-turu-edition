import React from "react";
import { Row, Column } from "../components/Grid";

const Dieties = (props) => {
  return (
    <Row>
      <Column small={12}>
        <h2>Divinità</h2>
        <Row>
          <Column small={12}>
            <a
              href="https://docs.google.com/document/d/1p9Q8d1qKTc9yAHb93-iyxapg4XtY1mXsB5U0_O7v-1c/edit"
              target="_blank"
              rel="noreferrer"
              className="button mb20"
            >
              Divinità e Domini (Gdoc by Ciommo)
            </a>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>Divinodinamica</h3>
            <ol className="mb20">
              <li>il trapasso è diverso</li>
              <li>c'è l'inferno che è un pianeta</li>
              <li>c'è il paradiso che è un pianeta</li>
              <li>
                c'è Nectano che è il piano dell energia neativa dove risiede il
                dio dei morti Mavros (neutrale malvagio)
              </li>
            </ol>

            <h3>Magiodinamica</h3>
            <ul>
              <li>
                La magia è divisa in 8 scuole perchè ci sono 8 pianeti creati da
                Lord Ao per controllare il caos, il movimento dei pianeti genera
                la magia
              </li>
            </ul>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default Dieties;
