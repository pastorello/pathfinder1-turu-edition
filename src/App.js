import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import GlobalStyle from "./theme/GlobalStyle";
import { Row, Column } from "./components/Grid";
import Home from "./sections/Home";
import Battle from "./sections/Battle";
import SpellBook from "./sections/SpellBook";
import Deities from "./sections/Deities";
import Scheda from "./sections/Scheda";
import Diario from "./sections/Diario";

const App = (props) => {
  return (
    <Router>
      <GlobalStyle />
      <Row>
        <Column small={12} large={1}>
          <Row className="collapse mb20">
            <Column small={6} large={12}>
              <Link className="button" to="/">
                Home
              </Link>
            </Column>
            <Column small={6} large={12}>
              <Link className="button" to="/scheda">
                Scheda
              </Link>
            </Column>
            <Column small={6} large={12}>
              <Link className="button" to="/diario">
                Diario
              </Link>
            </Column>
            <Column small={6} large={12}>
              <Link className="button" to="/spells">
                SpellBook
              </Link>
            </Column>
            <Column small={6} large={12}>
              <Link className="button" to="/deities">
                Divinità
              </Link>
            </Column>
            <Column small={6} large={12}>
              <Link className="button" to="/battle">
                Battaglia
              </Link>
            </Column>
          </Row>
        </Column>
        <Column small={12} large={11}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/scheda" element={<Scheda />} />
            <Route path="/diario" element={<Diario />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/spells" element={<SpellBook />} />
            <Route path="/deities" element={<Deities />} />
          </Routes>
        </Column>
      </Row>
    </Router>
  );
};

export default App;
