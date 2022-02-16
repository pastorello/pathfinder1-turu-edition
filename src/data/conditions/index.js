import buffConditions from "./buffConditions";
import healthConditions from "./healthConditions";
import illuminationConditions from "./illuminationConditions";
import mentalConditions from "./mentalConditions";
import mobilityConditions from "./mobilityConditions";
import physicalConditions from "./physicalConditions";
import terrainConditions from "./terrainConditions";
import visibilityConditions from "./visibilityConditions";

const conditions = {
  // ...healthConditions,
  // ...mentalConditions,
  // ...mobilityConditions,
  // ...physicalConditions,
  // ...buffConditions,
  ...terrainConditions,
  ...visibilityConditions,
  ...illuminationConditions,
  abbagliato: {
    name: "Abbagliato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "-1 Tiro per colpire",
        "-1 alle prove di Percezione basate sulla vista",
      ],
    }),
  },
  accecato: {
    name: "Accecato",
    removesCondition: ["abbagliato"],
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "-2 alla Classe Armatura",
        "perde il suo bonus di Destrezza alla CA",
        "-4 alla maggior parte delle Abilità basate su Forza e Destrezza",
        "-4 alle prove contrapposte di Percezione",
        "Tutte le prove basate sulla visione falliscono automaticamente",
        "Tutti gli avversari vengono considerati dotati di Occultamento Totale",
        "I personaggi accecati devono effettuare una prova di Acrobazia con CD 10 per muoversi più veloci della propria velocità dimezzata. Le creature che falliscono questa prova cadono a terra Prone.",
      ],
    }),
  },
  accovacciato: {
    name: "Accovacciato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "incapace di compiere azioni",
        "-2 alla Classe Armatura",
        "perde qualsiasi bonus di Destrezza",
      ],
    }),
  },
  affascinato: {
    name: "Affascinato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "non può agire se non prestare attenzione alla fonte del fascino",
        "-4 alle Prove di Abilità richieste come reazione",
        "Qualsiasi potenziale minaccia consente un nuovo Tiro Salvezza",
        "Qualsiasi minaccia palese interrompe l’effetto",
        "Un alleato può scuoterla per liberarla dall’effetto come azione standard",
      ],
    }),
  },
  affaticato: {
    name: "Affaticato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "non può correre o Caricare",
        "-2 a Forza e Destrezza",
        "Se compie qualsiasi cosa normalmente affaticante diventa Esausto",
        "Ci vogliono 8 ore di riposo totale per rimuovere la condizione di affaticato",
      ],
    }),
  },
  assordato: {
    name: "Assordato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Un personaggio assordato non può ascoltare. Subisce penalità -4 alle prove di Iniziativa, fallisce automaticamente tutte le prove di Percezione basate sul suono e ha una probabilità del 20% di fallire il lancio degli incantesimi con componenti verbali. I personaggi che rimangono assordati per lunghi periodi di tempo, possono abituarsi a queste penalità e superarne alcune, a discrezione del GM. ",
      ],
    }),
  },
  barcollante: {
    name: "Barcollante",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Un personaggio barcollante può effettuare una singola azione di movimento o una standard ad ogni round (ma non entrambe, e non può effettuare azioni di round completo). Una creatura barcollante può sempre compiere azioni gratuite, veloci o immediate. Una creatura i cui danni non letali eguagliano i Punti Ferita attuali ottiene la condizione barcollante. ",
      ],
    }),
  },
  confuso: {
    name: "Confuso",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "non può agire normalmente",
        "considera tutti come nemici",
        "Se una creatura confusa è attaccata, attacca sempre l’ultima creatura che la ha attaccata finché quella creatura non muore o esce dalla sua visuale.",
        "01-25 	Agisce normalmente",
        "26-50 	Non fa altro che balbettare in modo incoerente",
        "51-75 	Si infligge 1d8 + modificatore di Forza con l'arma che tiene in mano",
        "76-100 Attacca la creatura più vicina (non il Famiglio)",
        "non effettua attacchi di opportunità contro nessuno con cui non sia già impegnata a combattere",
      ],
    }),
  },
  esausto: {
    name: "Esausto",
    removesCondition: ["affaticato"],
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "si muove a velocità dimezzata",
        "-6 a Forza e Destrezza",
        "Dopo 1 ora di completo riposo, un personaggio esausto diventa solo Affaticato.",
      ],
    }),
  },
  frastornato: {
    name: "Frastornato",
    effect: (player) => ({
      ...player,
      activeEffects: [...player.activeEffects, "non può eseguire azioni"],
    }),
  },
};

export default conditions;
