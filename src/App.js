import GlobalStyle from "./components/theme/GlobalStyle";
import { Row, Column } from "./components/Grid";
import SpellBook from "./sections/SpellBook";

const App = (props) => {
  return (
    <>
      <Row>
        <Column></Column>
      </Row>
      <GlobalStyle />
      <h1>
        Pathfinder 2 <small>Turu's Edition</small>
      </h1>
      <SpellBook />
    </>
  );
};

export default App;
