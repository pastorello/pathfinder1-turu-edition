import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import GlobalStyle from "./components/theme/GlobalStyle";
import { Row, Column } from "./components/Grid";
import Home from "./sections/Home";
import Party from "./sections/Party";
import SpellBook from "./sections/SpellBook";
import Deities from "./sections/Deities";

const App = (props) => {
  return (
    <Router>
      <GlobalStyle />
      <Row>
        <Column small={1}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/spells">SpellBook</Link>
            </li>
            <li>
              <Link to="/deities">Divinità</Link>
            </li>
            <li>
              <Link to="/party">The Party</Link>
            </li>
          </ul>
        </Column>
        <Column small={11}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/party" element={<Party />} />
            <Route path="/spells" element={<SpellBook />} />
            <Route path="/deities" element={<Deities />} />
          </Routes>
        </Column>
      </Row>
    </Router>
  );
};

export default App;
