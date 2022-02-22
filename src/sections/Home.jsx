import React from "react";

const Home = (props) => {
  return (
    <>
      <h1 className="mb20">
        Pathfinder 1 <small>Ciommo's Edition</small>
      </h1>

      <h2>Home Rules</h2>

      <h3>Abilità</h3>
      <ol className="mb20">
        <li>No sapienza magica</li>
        <li>Sapienza magica si tira sulle conoscenze</li>
        <li>Conoscenza arcana e conoscenza pianeti sono le stesse</li>
        <li>Percezione maxata (1 grado per livello)</li>
        <li>Le Capacità soprannaturali sono considerate magiche</li>
        <li>
          Aiutare CD 10 +1, CD 20 +2, CD +3, etc., da dichiarare prima la CD
        </li>
        <li>su aiutare, Asso: fallimento naturale</li>
        <li>su aiutare, 20: non è successo critico</li>
        <li>Successo critico stile pathfinder 2 sulle conoscenze</li>
        <li>Un grado a linguistica non ti da il linguaggio</li>
        <li>Il bonus a INT non da lingue aggiuntive</li>
      </ol>

      <h3>Combattimento</h3>
      <ol className="mb20">
        <li>iFumble per gli assi, iCrit solo per i 20</li>
        <li>Da prono non puoi fare azioni di un round completo</li>
        <li>
          Hai una riserva di punti eroe pari alla metà dei tuoi livelli che si
          rigenera ogni seduta
        </li>
        <li>
          Con un punto eroe puoi ritirare un D20 o stabilizzarti a -9 per
          evitare la morte
        </li>
        <li>a livello di gioco gli orchi vengono considerati goblinoidi</li>
      </ol>

      <h3>Magia</h3>
      <ol className="mb20">
        <li>Liste ristrette per gli incantatori, tranne il mago</li>
        <li>Tutti i maghi devono essere specialisti</li>
        <li>Divinazione ha solo una scuola opposta</li>
      </ol>

      <h3>Generazione del personaggio</h3>
      <ol className="mb20">
        <li>Altezza e peso casuali con aggiustamento by Ciommo</li>
        <li>l'elfo non prende +2 INT a ma prende +2 a CAR</li>
        <li>lo gnomo non prende +2 CAR a ma prende +2 a INT</li>
      </ol>

      <h3>Allineamento</h3>
      <ol className="mb20">
        <li>allineamento variabile</li>
        <li>
          Quando avanza di livello in una classe che da incanteimi di ordine ci
          si sposta di uno vero il legale
        </li>
        <li>
          Quando avanza di livello in una classe che da incanteimi di caos ci si
          sposta di uno vero il caos
        </li>
        <li>
          gli incantesimi con descrittore bene/male/legge, ti spostano di un
          grado sul corrispettivo asse
        </li>
      </ol>

      <h3>Avanzamento e punti esperienza</h3>
      <ol className="mb20">
        <li>Avanzamento veloce per no caster</li>
        <li>Avanzamento Medio per castrer di 6°</li>
        <li>Avanzamento Lento per caster di 9°</li>
        <li>
          Avanzamento veloce per caster 4°, fino al 1° livello incantatore,
          dopodichè avanzamento medio
        </li>
        <li>5% malus PX quando cambi allineamento</li>
        <li>
          Per i personaggi che non hanno un avanzamento Lento, usare una
          capacità magica sono 10PX per livello
        </li>
      </ol>
    </>
  );
};

export default Home;
