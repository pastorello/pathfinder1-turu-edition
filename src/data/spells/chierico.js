const spells = [
  {
    level: 1,
    url: "/wiki/Incantesimi/Avanzare_Senza_Ostacoli",
    name: "Avanzare Senza Ostacoli",
    source: ["divina"],
    school: "trasmutazione",
    description: "Nulla è in grado di tenerti fermo.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Bagliore_Accecante",
    name: "Bagliore Accecante",
    source: ["divina"],
    school: "invocazione",
    energy: "positiva",
    description:
      "Innalzi i tuoi simboli religiosi e crei un bagliore accecante.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Benedizione_del_Guaritore",
    name: "Benedizione del Guaritore",
    source: ["divina"],
    school: "necromanzia",
    energy: "positiva",
    description:
      "Le tue parole donano ad una creatura una connessione potenziata all'energia positiva.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Censura",
    name: "Censura",
    source: ["divina"],
    school: "trasmutazione",
    description:
      "Elimini ogni riferimento a uno specifico nome da uno o più documenti.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Chiamata_di_Morte",
    name: "Chiamata di Morte",
    source: ["divina"],
    school: "necromanzia",
    description:
      "Vedere un altro passaggio da questo all'altro mondo ti rinvigorisce.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Cieca_Ambizione",
    name: "Cieca Ambizione",
    source: ["divina"],
    school: "ammaliamento",
    energy: "negativa",
    description:
      "Rafforzi l'ambizione di un bersaglio, ne inasprisci il risentimento verso i suoi alleati e indebolisci la sua lealtà.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Condividere_Fardello",
    name: "Condividere Fardello",
    source: ["divina"],
    school: "abiurazione",
    description: "Prendi sulle tue spalle parte del dolore del tuo alleato.",
    type: "focalizzato",
  },
  {
    level: 1,
    url: "/wiki/Incantesimi/Condividere_Sapienza",
    name: "Condividere Sapienza",
    source: ["divina"],
    school: "divinazione",
    description: "Prendi sulle tue spalle parte del dolore del tuo alleato.",
    type: "focalizzato",
  },
  /*

  url: "/wiki/Incantesimi/Piedi_Agili" title="Piedi Agili">Piedi Agili</a>
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "La benedizione del tuo Dio rende i tuoi piedi più veloci e i tuoi movimenti più fluidi.

url: "/wiki/Incantesimi/Pietra_Sfrecciante" title="Pietra Sfrecciante">Pietra Sfrecciante</a>
asd:  "Hurtling Stone
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Attacco" title="Tratti/Attacco">Attacco</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Incantesimi/Tratti/Terra" title="Tratti/Terra">Terra</a>
asd:  "Focalizzato
asd:  "1
asd:  "
asd:  "Evochi una pietra magica e la lanci, con la presenza del tuo Dio che guida il tuo braccio.

url: "/wiki/Incantesimi/Pizzico_di_Fortuna" title="Pizzico di Fortuna">Pizzico di Fortuna</a>
asd:  "Bit of Luck
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>
asd:  "Focalizzato
asd:  "Fai pendere leggermente l'ago della bilancia della fortuna a favore di una creatura per proteggerla da un disastro.

url: "/wiki/Incantesimi/Quiete_Forzata" title="Quiete Forzata">Quiete Forzata</a>
asd:  "Forced Quiet
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "Abbassi il volume della voce del bersaglio, impedendogli di divulgare segreti importanti.

url: "/wiki/Incantesimi/Raggio_di_Fuoco" title="Raggio di Fuoco">Raggio di Fuoco</a>
asd:  "Fire Ray
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Attacco" title="Tratti/Attacco">Attacco</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Fuoco" title="Tratti/Fuoco">Fuoco</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "Una striscia di fuoco ardente si inarca nell'aria.

url: "/wiki/Incantesimi/Raggio_Lunare" title="Raggio Lunare">Raggio Lunare</a>
asd:  "Moonbeam
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Attacco" title="Tratti/Attacco">Attacco</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Fuoco" title="Tratti/Fuoco">Fuoco</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Incantesimi/Tratti/Luce" title="Tratti/Luce">Luce</a>
asd:  "Focalizzato
asd:  "Emetti un raggio di luce lunare.

url: "/wiki/Incantesimi/Ricordo_Erudito" title="Ricordo Erudito">Ricordo Erudito</a>
asd:  "Scholarly Recollection
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>
asd:  "Focalizzato
asd:  "Recitando una breve preghiera mentre raccogli le idee, hai la fortuna di scoprire che la tua Divinità ti ha dato le giuste informazioni per la tua situazione.

url: "/wiki/Incantesimi/Scatto_Atletico" title="Scatto Atletico">Scatto Atletico</a>
asd:  "Athletic Rush
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "Il tuo corpo cresce in forza fisica e abilità.

url: "/wiki/Incantesimi/Schizzo_Artistico" title="Schizzo Artistico">Schizzo Artistico</a>
asd:  "Splash of Art
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>, <a href="/wiki/Incantesimi/Tratti/Visivo" title="Tratti/Visivo">Visivo</a>
asd:  "Focalizzato
asd:  "L'area è invasa da una grande quantità di pitture, attrezzi o altri simboli artistici illusori e colorati.

url: "/wiki/Incantesimi/Sogni_d%27Oro" title="Sogni d'Oro">Sogni d'Oro</a>
asd:  "Sweet Dream
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Linguistico" title="Tratti/Linguistico">Linguistico</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Incantesimi/Tratti/Sonno" title="Tratti/Sonno">Sonno</a>, <a href="/wiki/Incantesimi/Tratti/Uditivo" title="Tratti/Uditivo">Uditivo</a>
asd:  "Focalizzato
asd:  "Cantando o raccontando storie, culli il bersaglio in un sogno incantevole.

url: "/wiki/Incantesimi/Sovraccarico_dell%27Arma" title="Sovraccarico dell'Arma">Sovraccarico dell'Arma</a>
asd:  "Weapon Surge
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "Puntando la tua arma verso l'alto, la infondi di energia divina.

url: "/wiki/Incantesimi/Spine_Palpitanti" title="Spine Palpitanti">Spine Palpitanti</a>
asd:  "Vibrant Thorns
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Morfosi" title="Tratti/Morfosi">Morfosi</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>, <a href="/wiki/Incantesimi/Tratti/Vegetale" title="Tratti/Vegetale">Vegetale</a>
asd:  "Focalizzato
asd:  "Sul tuo corpo compare un manto di spine che ferisce coloro che ti colpiscono e trabocca di magia vitale.

url: "/wiki/Incantesimi/Spostamento_Improvviso" title="Spostamento Improvviso">Spostamento Improvviso</a>
asd:  "Sudden Shift
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>
asd:  "Focalizzato
asd:  "Ti sposti rapidamente da un punto pericoloso e ti nascondi.

  url: "/wiki/Incantesimi/Leggere_Fato" title="Leggere Fato">Leggere Fato</a>
asd:  "Read Fate
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Predizione" title="Tratti/Predizione">Predizione</a>
asd:  "Focalizzato
asd:  "Tenti di sapere qualcosa in più sul destino a breve termine del bersaglio.

url: "/wiki/Incantesimi/Manto_d%27Ombra" title="Manto d'Ombra">Manto d'Ombra</a>
asd:  "Cloak of Shadow
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Incantesimi/Tratti/Oscurit%C3%A0" title="Tratti/Oscurità">Oscurità</a>, <a href="/wiki/Incantesimi/Tratti/Ombra" title="Tratti/Ombra">Ombra</a>
asd:  "Focalizzato
asd:  "Avvolgi il bersaglio in un manto di ombre vorticose che lo rende più difficile da vedere.

url: "/wiki/Incantesimi/Mente_Perfezionata" title="Mente Perfezionata">Mente Perfezionata</a>
asd:  "Perfected Mind
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "Mediti sulla perfezione per rimuovere tutte le distrazioni dalla tua mente.

url: "/wiki/Incantesimi/Ondata_di_Marea" title="Ondata di Marea">Ondata di Marea</a>
asd:  "Tidal Surge
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Acqua" title="Tratti/Acqua">Acqua</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "Richiami un'onda gigantesca per spostare il bersaglio su uno specchio d'acqua o sulla terra.

url: "/wiki/Incantesimi/Pancia_Piena" title="Pancia Piena">Pancia Piena</a>
asd:  "Overstuff
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "Il bersaglio assume una quantità enorme di cibo e bevande.

url: "/wiki/Incantesimi/Parola_di_Verit%C3%A0" title="Parola di Verità">Parola di Verità</a>
asd:  "Word of Truth
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>
asd:  "Focalizzato
asd:  "Pronunci un'affermazione della quale sei convinto che sia vera e che sia immune a tentativi di essere travisata con parole fuorvianti, omissioni e simili.

asd:  "Manuale di Gioco
url: "/wiki/Incantesimi/Parole_Lenitive" title="Parole Lenitive">Parole Lenitive</a>
asd:  "Soothing Words
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "Tenti di calmare il bersaglio pronunciando parole lenitive con un tono calmo e pacato.


url: "/wiki/Incantesimi/Tocco_di_Non_Morte" title="Tocco di Non Morte">Tocco di Non Morte</a>
asd:  "Touch of Undeath
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Incantesimi/Tratti/Negativo" title="Tratti/Negativo">Negativo</a>
asd:  "Focalizzato
asd:  "Attacchi la forza vitale del bersaglio con la non morte.

url: "/wiki/Incantesimi/Tocco_di_Obbedienza" title="Tocco di Obbedienza">Tocco di Obbedienza</a>
asd:  "Touch of Obedience
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "Il tuo tocco imperioso intacca la forza di volontà del bersaglio, rendendolo più facile da controllare.

url: "/wiki/Incantesimi/Velo_di_Sicurezza" title="Velo di Sicurezza">Velo di Sicurezza</a>
asd:  "Veil of Confidence
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "Ti circondi di un velo di sicurezza.

 url:   "/wiki/Incantesimi/Vendicare_Dolore" title="Vendicare Dolore">Vendicare Dolore</a>
asd:  "Retributive Pain
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Incantesimi/Tratti/Non_Letale" title="Tratti/Non Letale">Non Letale</a>
asd:  "Focalizzato
asd:  "4
asd:  "La tua vendetta si abbatte su agili che ti tormenta riflettendo una parte del tuo dolore.

 url:   "/wiki/Incantesimi/Colpo_di_Fortuna" title="Colpo di Fortuna">Colpo di Fortuna</a>
asd:  "Lucky Break
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>
asd:  "Focalizzato
asd:  "4
asd:  "Ritiri un Tiro Salvezza e usi il migliore dei due risultati.

 url:   "/wiki/Incantesimi/Comando_Sferzante" title="Comando Sferzante">Comando Sferzante</a>
asd:  "Commanding Lash
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Incapacitazione" title="Tratti/Incapacitazione">Incapacitazione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Minacciandolo di infliggergli ulteriori sofferenze, costringi al tuo volere una creatura alla quale hai inflitto danno di recente.

 url:   "/wiki/Incantesimi/Competizione_Estrema" title="Competizione Estrema">Competizione Estrema</a>
asd:  "Competitive Edge
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "La tua competitività ti porta a migliorarti contro le avversità.


 url:   "/wiki/Incantesimi/Conoscere_il_Nemico" title="Conoscere il Nemico">Conoscere il Nemico</a>
asd:  "Know the Enemy
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>
asd:  "Focalizzato
asd:  "4
asd:  "Effettua un'azione di Ricordare Conoscenze, tirando la prova di abilità appropriata per identificare le capacità della creatura innescante.

url:   "/wiki/Incantesimi/Disperdersi_nell%27Aria" title="Disperdersi nell'Aria">Disperdersi nell'Aria</a>
asd:  "Disperse into Air
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Aria" title="Tratti/Aria">Aria</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Metamorfosi" title="Tratti/Metamorfosi">Metamorfosi</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Dopo aver subito il danno innescante, ti trasformi in aria.

url:   "/wiki/Incantesimi/Fare_il_Proprio_Corso" title="Fare il Proprio Corso">Fare il Proprio Corso</a>
asd:  "Take Its Course
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "4
asd:  "Puoi far giungere una creatura al momento peggiore della sua sofferenza o intensificare il suo tormento.

url:   "/wiki/Incantesimi/Fervore_della_Battaglia" title="Fervore della Battaglia">Fervore della Battaglia</a>
asd:  "Zeal for Battle
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Fomenti la giusta collera tra te stesso e un alleato.

url:   "/wiki/Incantesimi/Aura_Distruttiva" title="Aura Distruttiva">Aura Distruttiva</a>
asd:  "Destructive Aura
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Polveri vorticose di devastazione divina ti circondano, indebolendo le difese di tutti coloro che toccano.

url: "/wiki/Incantesimi/Barriera_Infuocata" title="Barriera Infuocata">Barriera Infuocata</a>
asd:  "Flame Barrier
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "4
asd:  "Proteggi te stesso o un alleato dalle fiamme.

 url:   "/wiki/Incantesimi/Battito_della_Citt%C3%A0" title="Battito della Città">Battito della Città</a>
asd:  "Pulse of the City
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Scrutare" title="Tratti/Scrutare">Scrutare</a>
asd:  "Focalizzato
asd:  "4
asd:  "Ti inserisci nello spirito del tempo dell'insediamento più vicino (se ce ne sono).

url: "/wiki/Incantesimi/Depositario_della_Magia" title="Depositario della Magia">Depositario della Magia</a>
asd:  "Magic's Vessel
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "Una creatura diventa un recipiente per l'energia magica pura inviata dalla tua divinità.

url: "/wiki/Incantesimi/Folata_Impetuosa" title="Folata Impetuosa">Folata Impetuosa</a>
asd:  "Pushing Gust
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Aria" title="Tratti/Aria">Aria</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Evocazione" title="Tratti/Evocazione">Evocazione</a>
asd:  "Focalizzato
asd:  "Spingendo l'aria, investi il bersaglio con una potente Folata di Vento.

url: "/wiki/Incantesimi/Grido_di_Distruzione" title="Grido di Distruzione">Grido di Distruzione</a>
asd:  "Cry of Destruction
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>, <a href="/wiki/Incantesimi/Tratti/Sonoro" title="Tratti/Sonoro">Sonoro</a>
asd:  "Focalizzato
asd:  "La tua voce esplode, distruggendo tutto ciò che si trova di fronte a te.

url: "/wiki/Incantesimi/Impressione_di_Ricchezza" title="Impressione di Ricchezza">Impressione di Ricchezza</a>
asd:  "Appearance of Wealth
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>
asd:  "Focalizzato
asd:  "1
asd:  "Crei una breve visione di una ricchezza immensa che riempie l'area dell'incantesimo.

url: "/wiki/Incantesimi/Incubo_del_Risveglio" title="Incubo del Risveglio">Incubo del Risveglio</a>
asd:  "Waking Nightmare
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Incantesimi/Tratti/Paura" title="Tratti/Paura">Paura</a>
asd:  "Focalizzato
asd:  "Imprimi nella mente della creatura una visione terrificante proveniente dai suoi incubi

url: "/wiki/Incantesimi/Infliggere_Dolore" title="Infliggere Dolore">Infliggere Dolore</a>
asd:  "Savor the Sting
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Incantesimi/Tratti/Non_Letale" title="Tratti/Non Letale">Non Letale</a>
asd:  "Focalizzato
asd:  "Provi piacere nell'infliggere dolore al bersaglio.

url: "/wiki/Incantesimi/Sacrificio_del_Protettore" title="Sacrificio del Protettore">Sacrificio del Protettore</a>
asd:  "Protector's Sacrifice
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "Proteggi il tuo alleato soffrendo al suo posto.

url: "/wiki/Incantesimi/Tocco_Affascinante" title="Tocco Affascinante">Tocco Affascinante</a>
asd:  "Charming Touch
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Incapacitazione" title="Tratti/Incapacitazione">Incapacitazione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "Infondi attrazione nel bersaglio, facendolo agire in modo più amichevole.

url: "/wiki/Incantesimi/Volto_tra_la_Folla" title="Volto tra la Folla">Volto tra la Folla</a>
asd:  "Face In The Crowd
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>, <a href="/wiki/Incantesimi/Tratti/Visivo" title="Tratti/Visivo">Visivo</a>
asd:  "Focalizzato
asd:  "Mentre ti trovi in mezzo a una folla di creature più o meno simili, il tuo aspetto diventa scialbo e indistinto.

url: "/wiki/Incantesimi/Abbondanza_della_Natura" title="Abbondanza della Natura">Abbondanza della Natura</a>
asd:  "Nature's Bounty
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Evocazione" title="Tratti/Evocazione">Evocazione</a>, <a href="/wiki/Incantesimi/Tratti/Positivo" title="Tratti/Positivo">Positivo</a>, <a href="/wiki/Incantesimi/Tratti/Vegetale" title="Tratti/Vegetale">Vegetale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Un frutto o una verdura delle dimensioni del palmo di una mano compare nella tua mano aperta.

url:   "/wiki/Incantesimi/Adorazione_Accattivante" title="Adorazione Accattivante">Adorazione Accattivante</a>
asd:  "Captivating Adoration
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>, <a href="/wiki/Incantesimi/Tratti/Visivo" title="Tratti/Visivo">Visivo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Diventi estremamente affascinante e le creature vengono distratte dalla loro attrazione nei tuoi confronti per tutto il tempo in cui rimangono all'interno dell'area.

 url:   "/wiki/Incantesimi/Allontanare_la_Morte" title="Allontanare la Morte">Allontanare la Morte</a>
asd:  "Rebuke Death
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Guarigione" title="Tratti/Guarigione">Guarigione</a>, <a href="/wiki/Incantesimi/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Incantesimi/Tratti/Positivo" title="Tratti/Positivo">Positivo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Strappi le creature dalle grinfie della morte.

url:   "/wiki/Incantesimi/Nubifragio" title="Nubifragio">Nubifragio</a>
asd:  "Downpour
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Acqua" title="Tratti/Acqua">Acqua</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Evochi un nubifragio torrenziale, il quale spegne le fiamme non magiche.

url:   "/wiki/Incantesimi/Occhi_Oscurati" title="Occhi Oscurati">Occhi Oscurati</a>
asd:  "Darkened Eyes
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Oscurit%C3%A0" title="Tratti/Oscurità">Oscurità</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Fai penetrare le tenebre nella vista del bersaglio.

url:   "/wiki/Incantesimi/Orgoglio_Delirante" title="Orgoglio Delirante">Orgoglio Delirante</a>
asd:  "Delusional Pride
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Sovraccarichi la sicurezza in sé stesso del bersaglio, il quale attribuisce i suoi fallimenti a fattori esterni.

url:   "/wiki/Incantesimi/Parola_di_Libert%C3%A0" title="Parola di Libertà">Parola di Libertà</a>
asd:  "Word of Freedom
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Pronunci una parola di potere che libera una creatura.

url: "/wiki/Incantesimi/Forma_Perfezionata" title="Forma Perfezionata">Forma Perfezionata</a>
asd:  "Perfected Form
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>
asd:  "Focalizzato
asd:  "4
asd:  "Ritira il Tiro Salvezza ed utilizza il risultato migliore.

url:   "/wiki/Incantesimi/Gemello_dell%27Ingannatore" title="Gemello dell'Ingannatore">Gemello dell'Ingannatore</a>
asd:  "Trickster's Twin
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Illusione" title="Tratti/Illusione">Illusione</a>, <a href="/wiki/Incantesimi/Tratti/Visivo" title="Tratti/Visivo">Visivo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Ti accontenti raramente di essere in un posto alla volta.

url:   "/wiki/Incantesimi/Incubo_Condiviso" title="Incubo Condiviso">Incubo Condiviso</a>
asd:  "Shared Nightmare
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Emozione" title="Tratti/Emozione">Emozione</a>, <a href="/wiki/Incantesimi/Tratti/Incapacitazione" title="Tratti/Incapacitazione">Incapacitazione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Fondendo la tua mente con quella del bersaglio, scambi visioni disorientanti tra i vostri incubi.

url:   "/wiki/Incantesimi/Intravedere_Verit%C3%A0" title="Intravedere Verità">Intravedere Verità</a>
asd:  "Glimpse the Truth
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Rivelazione" title="Tratti/Rivelazione">Rivelazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Intuizioni divine ti permettono di vedere le cose per quelle che sono realmente.

url:   "/wiki/Incantesimi/Luminosit%C3%A0_Positiva" title="Luminosità Positiva">Luminosità Positiva</a>
asd:  "Positive Luminance
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Luce" title="Tratti/Luce">Luce</a>, <a href="/wiki/Incantesimi/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Incantesimi/Tratti/Positivo" title="Tratti/Positivo">Positivo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Attirando forza vitale al tuo interno, diventi un faro di energia positiva.

url: "/wiki/Incantesimi/Metalli_Preziosi" title="Metalli Preziosi">Metalli Preziosi</a>
asd:  "Precious Metals
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "La tua Divinità benedice i metalli base per trasformarli in metalli preziosi.

url:   "/wiki/Incantesimi/Proliferazione_Artistica" title="Proliferazione Artistica">Proliferazione Artistica</a>
asd:  "Artistic Flourish
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Trasformi il bersaglio in modo che corrisponda alla tua visione artigianale ed artistica.

url:   "/wiki/Incantesimi/Resistenza_Duratura" title="Resistenza Duratura">Resistenza Duratura</a>
asd:  "Enduring Might
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "4
asd:  "La tua resistenza si unisce alla forza divina per proteggerti.

 url:   "/wiki/Incantesimi/Richiamo_del_Sognatore" title="Richiamo del Sognatore">Richiamo del Sognatore</a>
asd:  "Dreamer's Call
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Incapacitazione" title="Tratti/Incapacitazione">Incapacitazione</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Il bersaglio diventa distratto e suggestionabile, inondato da sogni vividi ad occhi aperti.

url:   "/wiki/Incantesimi/Segnale_Mistico" title="Segnale Mistico">Segnale Mistico</a>
asd:  "Mystic Beacon
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Il prossimo incantesimo che infligge danno o incantesimo di guarigione che il bersaglio lancerà prima dell'inizio del tuo turno successivo infligge danni o ripristina Punti Ferita come se l'incantesimo fosse intensificato a 1 livello superiore al suo effettivo livello.

 url:   "/wiki/Incantesimi/Segreto_Protetto" title="Segreto Protetto">Segreto Protetto</a>
asd:  "Safeguard Secret
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Mentale" title="Tratti/Mentale">Mentale</a>
asd:  "Focalizzato
asd:  "4
asd:  "Metti un segreto al sicuro da occhi indiscreti.

 url:   "/wiki/Incantesimi/Sfera_del_Protettore" title="Sfera del Protettore">Sfera del Protettore</a>
asd:  "Protector's Sphere
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>
asd:  "Focalizzato
asd:  "4
asd:  "Emani un'aura protettiva che ti difende insieme ai tuoi alleati.

url:   "/wiki/Incantesimi/Sostentamento_Malevolo" title="Sostentamento Malevolo">Sostentamento Malevolo</a>
asd:  "Malignant Sustenance
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Incantesimi/Tratti/Negativo" title="Tratti/Negativo">Negativo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Instilli un germe di energia negativa in una creatura non morta, ripristinando il suo vigore innaturale.

url:   "/wiki/Incantesimi/Sradicare_Non_Morti" title="Sradicare Non Morti">Sradicare Non Morti</a>
asd:  "Eradicate Undeath
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Necromanzia" title="Tratti/Necromanzia">Necromanzia</a>, <a href="/wiki/Incantesimi/Tratti/Positivo" title="Tratti/Positivo">Positivo</a>
asd:  "Focalizzato
asd:  "4
asd:  "Una massiccia inondazione di energia vitale fa a pezzi i non morti.

url:   "/wiki/Incantesimi/Tentare_la_Sorte" title="Tentare la Sorte">Tentare la Sorte</a>
asd:  "Tempt Fate
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Divinazione" title="Tratti/Divinazione">Divinazione</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>
asd:  "Focalizzato
asd:  "4
asd:  "Distorci le forze del fato per rendere un momento catastrofico o provvidenziale, senza vie di mezzo.

url:   "/wiki/Incantesimi/Terremoto_Localizzato" title="Terremoto Localizzato">Terremoto Localizzato</a>
asd:  "Localized Quake
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Terra" title="Tratti/Terra">Terra</a>, <a href="/wiki/Incantesimi/Tratti/Trasmutazione" title="Tratti/Trasmutazione">Trasmutazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Scuoti la terra, facendo cadere le creature vicine.

url:   "/wiki/Incantesimi/Tocco_della_Luna" title="Tocco della Luna">Tocco della Luna</a>
asd:  "Touch of the Moon
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Ammaliamento" title="Tratti/Ammaliamento">Ammaliamento</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Luce" title="Tratti/Luce">Luce</a>
asd:  "Focalizzato
asd:  "4
asd:  "Quando tocchi il bersaglio, sulla sua fronte appare un simbolo della luna che risplende di tenue luce lunare.

url:   "/wiki/Incantesimi/Transito_del_Viaggiatore" title="Transito del Viaggiatore">Transito del Viaggiatore</a>
asd:  "Traveler’s Transit
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Invocazione" title="Tratti/Invocazione">Invocazione</a>
asd:  "Focalizzato
asd:  "4
asd:  "Aggiungi potenza ai tuoi muscoli, permettendoti di Nuotare o Scalare pareti con facilità.

url:   "/wiki/Incantesimi/Unit%C3%A0" title="Unità">Unità</a>
asd:  "Unity
asd:  "Chierico
asd:  "<a href="/wiki/Incantesimi/Tratti/Non_Comune" title="Tratti/Non Comune">Non Comune</a>, <a href="/wiki/Incantesimi/Tratti/Abiurazione" title="Tratti/Abiurazione">Abiurazione</a>, <a href="/wiki/Incantesimi/Tratti/Chierico" title="Tratti/Chierico">Chierico</a>, <a href="/wiki/Incantesimi/Tratti/Fortuna" title="Tratti/Fortuna">Fortuna</a>
asd:  "Focalizzato
asd:  "4
asd:  "Metti insieme una difesa unita.

*/
];

export default spells;
