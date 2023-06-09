import React from "react";
import { Row, Column } from "../components/Grid";

const Scheda = (props) => {
  return (
    <Row className="pb20">
      <Column>
        <h3>Abilità</h3>
        <Row>
          <Column>
            <a
              href="https://golarion.altervista.org/wiki/Conoscenze"
              target="_blank"
              rel="noreferrer"
            >
              Conoscenze
            </a>
          </Column>
        </Row>
        <Row>
          <Column>
            <a
              href="https://golarion.altervista.org/wiki/Guarire"
              target="_blank"
              rel="noreferrer"
            >
              Guarire
            </a>
          </Column>
        </Row>
        <Row>
          <Column>
            <a
              href="https://golarion.altervista.org/wiki/Linguistica"
              target="_blank"
              rel="noreferrer"
            >
              Linguistica
            </a>
          </Column>
        </Row>
        <Row>
          <Column>
            <a href="https://golarion.altervista.org/wiki/Capacit%C3%A0_di_Trasporto">
              Capacità di trasporto
            </a>
          </Column>
        </Row>
        <Row>
          <Column>
            <a href="http://prd.5clone.com/iniziare/caratteristiche">
              Modificatori di caratteristica e incantesimi bonus
            </a>
          </Column>
        </Row>
        <hr />
        <h3>Orazioni conosciute</h3>
        <table className="mb20">
          <tr>
            <td width="250">
              <a
                href="https://golarion.altervista.org/wiki/Creare_Acqua"
                title="Creare Acqua"
              >
                Creare Acqua
              </a>
            </td>
            <td>Crea 7,4 litri/livello di acqua pura</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://golarion.altervista.org/wiki/Guida"
                title="Guida"
              >
                Guida
              </a>
            </td>
            <td>
              Bonus +1 a un{" "}
              <a
                href="https://golarion.altervista.org/wiki/Tiro_per_Colpire"
                title="Tiro per Colpire"
              >
                Tiro per Colpire
              </a>
              , a un{" "}
              <a href="https://golarion.altervista.org/wiki/TS" title="TS">
                Tiro Salvezza
              </a>{" "}
              o a una{" "}
              <a
                href="https://golarion.altervista.org/wiki/Abilit%C3%A0#Prova_di_Abilit.C3.A0"
                title="Abilità"
              >
                Prova di Abilità
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://golarion.altervista.org/wiki/Lettura_del_Magico"
                title="Lettura del Magico"
              >
                Lettura del Magico
              </a>
            </td>
            <td>Per leggere pergamene e libri degli incantesimi</td>
          </tr>
        </table>
        <h3>Incantesimi conosciuti</h3>
        <h4 className="mb10">Livello 1</h4>
        <table className="mb20">
          <tr>
            <td width="250">
              <a
                href="https://golarion.altervista.org/wiki/Cura_Ferite_Leggere"
                class="mw-redirect"
                title="Cura Ferite Leggere"
              >
                Cura Ferite Leggere
              </a>
            </td>
            <td>Cura 1d8 danni +1/livello (max +5)</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://golarion.altervista.org/wiki/Comprensione_dei_Linguaggi"
                class="mw-redirect"
                title="Comprensione dei Linguaggi"
              >
                Comprensione dei Linguaggi
              </a>
            </td>
            <td>Si comprendono tutti i linguaggi scritti e parlati</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://golarion.altervista.org/wiki/Scudo_della_Fede"
                class="mw-redirect"
                title="Scudo della Fede"
              >
                Scudo della Fede
              </a>
            </td>
            <td>
              Un'aura conferisce{" "}
              <a
                href="https://golarion.altervista.org/wiki/Glossario#Bonus_.28Deviazione.29"
                title="Glossario"
              >
                Bonus di Deviazione
              </a>{" "}
              +2 o superiore
            </td>
          </tr>
        </table>
        <hr />
        <Row>
          <Column>
            <h3 className="mb20">
              <a href="https://golarion.altervista.org/wiki/Dominio_del_Bene">
                Dominio del Bene
              </a>
            </h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <p className="mb20">
              <b>Poteri Concessi</b>: Si è impegnata la propria vita e l’anima
              alla bontà ed alla purezza.
            </p>
            <dl>
              <dd className="mb20">
                <b>Tocco del Bene (Mag)</b>: Si può toccare una creatura come
                azione standard, concedendole un{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Glossario#Bonus_.28Sacro.29"
                  title="Glossario"
                >
                  Bonus Sacro
                </a>{" "}
                ai{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Tiri_per_Colpire"
                  title="Tiri per Colpire"
                >
                  Tiri per Colpire
                </a>
                , alle{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Abilit%C3%A0#Prova_di_Abilit.C3.A0"
                  title="Abilità"
                >
                  Prove di Abilità
                </a>
                , alle prove di caratteristica e ai{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Tiri_Salvezza"
                  title="Tiri Salvezza"
                >
                  Tiri Salvezza
                </a>{" "}
                pari a metà del proprio livello da{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Chierico"
                  title="Chierico"
                >
                  Chierico
                </a>{" "}
                (minimo 1) per 1 round. Si può utilizzare questa capacità un
                numero di volte al giorno pari a 3 + il proprio modificatore di{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Saggezza"
                  title="Saggezza"
                >
                  Saggezza
                </a>
                .
              </dd>
            </dl>
            <dl className="mb20">
              <dd>
                <b>Lancia Sacra (Sop)</b>: All’8° livello, si può infondere ad
                un’arma toccata la capacità speciale{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Armi_Magiche#Sacra"
                  title="Armi Magiche"
                >
                  Sacra
                </a>{" "}
                per un numero di round pari a metà del proprio livello da{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Chierico"
                  title="Chierico"
                >
                  Chierico
                </a>
                . Si può utilizzare questa capacità una volta al giorno all’8°
                livello e successivamente una volta in più al giorno ogni
                quattro livelli.
              </dd>
            </dl>
            <h3>Incantesimi concessi</h3>
            <ol className="mb20">
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Protezione_dal_Male"
                    title="Protezione dal Male"
                  >
                    Protezione dal Male
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Allineare_Arma"
                    title="Allineare Arma"
                  >
                    Allineare Arma
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Cerchio_Magico_Contro_il_Male"
                    title="Cerchio Magico Contro il Male"
                  >
                    Cerchio Magico Contro il Male
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Punizione_Sacra"
                    title="Punizione Sacra"
                  >
                    Punizione Sacra
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Dissolvi_il_Male"
                    title="Dissolvi il Male"
                  >
                    Dissolvi il Male
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Barriera_di_Lame"
                    title="Barriera di Lame"
                  >
                    Barriera di Lame
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Parola_Sacra"
                    title="Parola Sacra"
                  >
                    Parola Sacra
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Aura_Sacra"
                    title="Aura Sacra"
                  >
                    Aura Sacra
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Evoca_Mostri"
                    title="Evoca Mostri"
                  >
                    Evoca Mostri
                  </a>{" "}
                  IX
                </i>{" "}
                (solo incantesimi con descrittore bene)
              </li>
            </ol>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3 className="mb20">
              <a href="https://golarion.altervista.org/wiki/Dominio_della_Protezione">
                Sottodominio della Difesa
              </a>
            </h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <p className="mb20">
              <b>Poteri Concessi</b>: La fede è la più grande sorgente di
              protezione e la si può utilizzare per difendere gli altri.
              Inoltre, si riceve{" "}
              <a
                href="https://golarion.altervista.org/wiki/Glossario#Bonus_.28Resistenza.29"
                title="Glossario"
              >
                Bonus di Resistenza
              </a>{" "}
              +1 ai{" "}
              <a
                href="https://golarion.altervista.org/wiki/Tiri_Salvezza"
                title="Tiri Salvezza"
              >
                Tiri Salvezza
              </a>
              . Questo bonus aumenta di +1 ogni 5 livelli posseduti.
            </p>
            <dl className="mb20">
              <dd>
                <b>Aura di Deviazione (Sop)</b>: Una volta al giorno, si può
                emettere un’aura di 6 metri per un numero di round pari al
                proprio livello da Chierico. Gli alleati all’interno dell’aura
                guadagnano bonus di deviazione +2 a{" "}
                <a href="https://golarion.altervista.org/wiki/CA" title="CA">
                  CA
                </a>{" "}
                e{" "}
                <a href="https://golarion.altervista.org/wiki/DMC" title="DMC">
                  DMC
                </a>
                .
              </dd>
            </dl>
            <dl className="mb20">
              <dd>
                <b>Aura di Protezione (Sop)</b>: All’8° livello si può emettere
                un’aura di protezione di 9 metri per un numero di round al
                giorno pari al proprio livello da{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Chierico"
                  title="Chierico"
                >
                  Chierico
                </a>
                . Gli alleati (e se stessi) all’interno dell’aura ottengono{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Glossario#Bonus_.28Deviazione.29"
                  title="Glossario"
                >
                  Bonus di Deviazione
                </a>{" "}
                +1 alla{" "}
                <a href="https://golarion.altervista.org/wiki/CA" title="CA">
                  CA
                </a>{" "}
                e{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Resistenza_all%27Energia"
                  title="Resistenza all'Energia"
                >
                  Resistenza
                </a>{" "}
                5 a tutti gli elementi (acido, elettricità, freddo, fuoco e
                sonoro). Il{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Glossario#Bonus_.28Deviazione.29"
                  title="Glossario"
                >
                  Bonus di Deviazione
                </a>{" "}
                aumenta di +1 ogni quattro livelli da{" "}
                <a
                  href="https://golarion.altervista.org/wiki/Chierico"
                  title="Chierico"
                >
                  Chierico
                </a>{" "}
                posseduti oltre l’8°. Al 14° livello, la resistenza agli
                elementi aumenta a 10. Questi round non devono essere
                necessariamente consecutivi.
              </dd>
            </dl>
            <h3>Incantesimi concessi</h3>
            <ol className="mb20">
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Scudo"
                    title="Scudo"
                  >
                    Scudo
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Scudo_su_Altri"
                    title="Scudo su Altri"
                  >
                    Scudo su Altri
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Pelle_Coriacea"
                    title="Pelle Coriacea"
                  >
                    Pelle Coriacea
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Immunit%C3%A0_agli_Incantesimi"
                    title="Immunità agli Incantesimi"
                  >
                    Immunità agli Incantesimi
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Incantesimi/Resistenza_agli_Incantesimi"
                    title="Incantesimi/Resistenza agli Incantesimi"
                  >
                    Resistenza agli Incantesimi
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Campo_Antimagia"
                    title="Campo Antimagia"
                  >
                    Campo Antimagia
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Deflettere"
                    title="Deflettere"
                  >
                    Deflettere
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Vuoto_Mentale"
                    title="Vuoto Mentale"
                  >
                    Vuoto Mentale
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a
                    href="https://golarion.altervista.org/wiki/Sfera_Prismatica"
                    title="Sfera Prismatica"
                  >
                    Sfera Prismatica
                  </a>
                </i>
              </li>
            </ol>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default Scheda;
