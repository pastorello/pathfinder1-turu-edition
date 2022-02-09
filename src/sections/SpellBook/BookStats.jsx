import React from "react";
import { Column, Row } from "../../components/Grid";
import spellDB from "../../data/spells";
import isValid from "../../tools/isValid";

const getDefaultLevelCounter = () =>
  Array.from(Array(11).keys()).map((item) => ({
    main: 0,
    intensified: 0,
  }));

const dbStats = {
  arcana: getDefaultLevelCounter(),
  divina: getDefaultLevelCounter(),
  runica: getDefaultLevelCounter(),
  fatata: getDefaultLevelCounter(),
  primeva: getDefaultLevelCounter(),
  occulta: getDefaultLevelCounter(),
  infernale: getDefaultLevelCounter(),
  nera: getDefaultLevelCounter(),
  blasfema: getDefaultLevelCounter(),
};

spellDB.forEach((item) => {
  item.source.forEach((theSource) => {
    dbStats[theSource][item.level].main += 1;
    if (isValid.dataArray(item.intensified)) {
      item.intensified.forEach(
        (theLevel) => (dbStats[theSource][theLevel].intensified += 1)
      );
    }
  });
});

const BookStats = () => {
  return (
    <Row className="collapse">
      <Column small={12}>
        <Row>
          <Column small={2}>Tradition</Column>
          <Column small={10}>
            <Row>
              {dbStats.arcana.map((item, index) => (
                <Column small={1} key={`head${index}`}>
                  <strong>{index}</strong>
                </Column>
              ))}
            </Row>
          </Column>
        </Row>
        <hr />
        {Object.keys(dbStats).map((item) => (
          <Row key={item}>
            <Column small={2} key={item}>
              {`${dbStats[item].reduce((acc, item2) => item2.main + acc, 0)}`}{" "}
              {item}
            </Column>
            <Column small={10}>
              <Row>
                {dbStats[item].map((item2, index) => (
                  <Column small={1} key={`${item}${index}`}>
                    <div>
                      {item2.main} ({item2.main + item2.intensified})
                    </div>
                  </Column>
                ))}
              </Row>
            </Column>
          </Row>
        ))}
        <hr />
      </Column>
    </Row>
  );
};

export default BookStats;
