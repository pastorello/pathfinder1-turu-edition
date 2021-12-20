const primeviSpells = [
  {
    level: 3,
    url: "/wiki/Incantesimi/Forma_di_Insetto",
    name: "Incantesimi/Forma di Insetto Forma di Insetto ",
    school: "trasmutazione",
    description: "Ti trasformi in un pericoloso insetto gigante",
  },
  {
    level: 3,
    url: "/wiki/Muro_di_Spine",
    name: "Muro di Spine Muro di Spine ",
    school: "evocazione",
    description: "Crei un muro di rovi",
  },
  {
    level: 3,
    url: "/wiki/Visione_dell%27Animale",
    name: "Visione dell'Animale Visione dell'Animale ",
    school: "divinazione",
    description: "Sposti i tuoi sensi su un animale",
  },
];

const occultSpells = [
  {
    level: 3,
    url: "/wiki/Comando_di_Liberazione",
    name: "Comando di Liberazione Comando di Liberazione",
    school: "ammaliamento",
    description:
      "Emetti un urlo liberatorio, spronando un alleato a liberarsi da un effetto che lo tiene fermo",
  },
  {
    level: 3,
    url: "/wiki/Ipercognizione",
    name: "Ipercognizione Ipercognizione",
    school: "divinazione",
    description: "Ricordi enormi quantità di informazioni in un istante",
  },
];

const divineSpells = [
  {
    level: 3,
    url: "/wiki/Cerchio_di_Protezione",
    name: "Cerchio di Protezione Cerchio di Protezione ",
    school: "abiurazione",
    description:
      "Una creatura emette un'aura che protegge coloro che vi si trovano all'interno da un dato allineamento",
  },
  {
    level: 3,
    url: "/wiki/Crisi_Mistica",
    name: "Crisi Mistica Crisi Mistica ",
    school: "ammaliamento",
    description:
      "Provochi danni mentali, e potenzialmente rendi un devoto incapace di lanciare incantesimi",
  },
  {
    level: 3,
    url: "/wiki/Eroismo",
    name: "Eroismo Eroismo ",
    school: "ammaliamento",
    description:
      "Ravvivi l'eroismo insito in una creatura per renderla più abile",
  },
  {
    level: 3,
    url: "/wiki/Guida_del_Girovago",
    name: "Guida del Girovago Guida del Girovago",
    school: "divinazione",
    description: "Trovi un tragitto ideale verso una destinazione",
  },
  {
    level: 3,
    url: "/wiki/Luce_Incandescente",
    name: "Luce Incandescente Luce Incandescente ",
    school: "invocazione",
    description:
      "Un raggio di luce incandescente infligge danni aggiuntivi ai non morti e contrasta l'oscurità",
  },
  {
    level: 3,
    url: "/wiki/Mostrare_la_Via",
    name: "Mostrare la Via Mostrare la Via ",
    school: "divinazione",
    description:
      "Tu e i tuoi alleati influenzati ottenete una conoscenza preternaturale del sentiero davanti a voi",
  },
  {
    level: 3,
    url: "/wiki/Neutralizza_Veleno",
    name: "Neutralizza Veleno Neutralizza Veleno",
    school: "necromanzia",
    description: "Curi un veleno che affligge una creatura",
  },
  {
    level: 3,
    url: "/wiki/Oscurit%C3%A0_Gelida",
    name: "Oscurità Gelida Oscurità Gelida ",
    school: "invocazione",
    description:
      "Un raggio di oscurità malvagia infligge danni da freddo, contrasta la luce e ferisce i celestiali",
  },
  {
    level: 3,
    url: "/wiki/Rimuovi_Malattia",
    name: "Rimuovi Malattia Rimuovi Malattia",
    school: "necromanzia",
    description: "Curi una malattia che affligge una creatura",
  },
  {
    level: 3,
    url: "/wiki/Sciarpe_Turbinanti",
    name: "Sciarpe Turbinanti Sciarpe Turbinanti ",
    school: "abiurazione",
    description:
      "Vieni circondato da un vortice di turbinanti sciarpe colorate di forza che ti offuscano e disorientano i tuoi nemici",
  },
  {
    level: 3,
    url: "/wiki/Terreno_Consacrato",
    name: "Terreno Consacrato Terreno Consacrato",
    school: "abiurazione",
    description:
      "Crei un'area di protezione della durata di 24 ore contro aberrazioni, celestiali, draghi, nefandi o non morti",
  },
  {
    level: 3,
    url: "/wiki/Zona_di_Verit%C3%A0",
    name: "Zona di Verità Zona di Verità ",
    school: "ammaliamento",
    description: "Costringi le creature a dire la verità",
  },
];

const arcaneSpells = [
  {
    level: 3,
    url: "/wiki/Anti-Individuazione",
    name: "Anti-Individuazione Anti-Individuazione",
    school: "abiurazione",
    description: "Proteggi una creatura o un oggetto dall'individuazione",
  },
  {
    level: 3,
    url: "/wiki/Arma_Spettrale",
    name: "Arma Spettrale Arma Spettrale",
    school: "trasmutazione",
    description: "un'arma ha effetto sulle creature incorporee",
  },
  {
    level: 3,
    url: "/wiki/Cecit%C3%A0",
    name: "Cecità Cecità",
    school: "necromanzia",
    description: "Rendi cieco un bersaglio",
  },
  {
    level: 3,
    url: "/wiki/Chiaroudienza",
    name: "Chiaroudienza Chiaroudienza",
    school: "divinazione",
    description: "Puoi udire attraverso un sensore magico invisibile",
  },
  {
    level: 3,
    url: "/wiki/Estasiare",
    name: "Estasiare Estasiare",
    school: "ammaliamento",
    description: "Le creature sono affascinate dal tuo discorso",
  },
  {
    level: 3,
    url: "/wiki/Fondersi_nella_Pietra",
    name: "Fondersi nella Pietra Fondersi nella Pietra",
    school: "trasmutazione",
    description: "Ti fondi in un blocco di pietra",
  },
  {
    level: 3,
    url: "/wiki/Fulmine",
    name: "Fulmine Fulmine",
    school: "invocazione",
    description: "Un fulmine colpisce tutte le creature in una linea",
  },
  {
    level: 3,
    url: "/wiki/Glifo_di_Interdizione",
    name: "Glifo di Interdizione Glifo di Interdizione",
    school: "abiurazione",
    description: "Infondi un incantesimo in un simbolo per creare una trappola",
  },
  {
    level: 3,
    url: "/wiki/Legare_Non_Morto",
    name: "Legare Non Morto Legare Non Morto",
    school: "necromanzia",
    description: "Prendi il controllo di un non morto privo di intelletto",
  },
  {
    level: 3,
    url: "/wiki/Legato_a_Terra",
    name: "Legato a Terra Legato a Terra",
    school: "trasmutazione",
    description: "Porti a terra una creatura volante",
  },
  {
    level: 3,
    url: "/wiki/Leggere_nella_Mente",
    name: "Leggere nella Mente Leggere nella Mente",
    school: "divinazione",
    description: "Leggi i pensieri superficiali di una creatura",
  },
  {
    level: 3,
    url: "/wiki/Lentezza",
    name: "Lentezza Lentezza",
    school: "trasmutazione",
    description: "Rallenti una creatura, riducendone le azioni",
  },
  {
    level: 3,
    url: "/wiki/Levitazione",
    name: "Levitazione Levitazione",
    school: "invocazione",
    description: "Fai fluttuare un oggetto o creatura a qualche metro da terra",
  },
  {
    level: 3,
    url: "/wiki/Localizzare",
    name: "Localizzare Localizzare",
    school: "divinazione",
    description: "Apprendi la direzione verso un oggetto",
  },
  {
    level: 3,
    url: "/wiki/Messaggio_Onirico",
    name: "Messaggio Onirico Messaggio Onirico",
    school: "ammaliamento",
    description: "Invii un messaggio che arriva tramite un sogno",
  },
  {
    level: 3,
    url: "/wiki/Muro_di_Vento",
    name: "Muro di Vento Muro di Vento",
    school: "invocazione",
    description:
      "Crei un muro di venti vorticosi che impedisce il movimento e gli attacchi a distanza",
  },
  {
    level: 3,
    url: "/wiki/Nube_Maleodorante",
    name: "Nube Maleodorante Nube Maleodorante",
    school: "evocazione",
    description: "Formi una nube che nausea le creature",
  },
  {
    level: 3,
    url: "/wiki/Pagina_Segreta",
    name: "Pagina Segreta Pagina Segreta",
    school: "illusione",
    description: "Alteri l'apparenza di una pagina",
  },
  {
    level: 3,
    url: "/wiki/Palla_di_Fuoco",
    name: "Palla di Fuoco Palla di Fuoco",
    school: "invocazione",
    description: "un'esplosione di fuoco in  un'area brucia le creature",
  },
  {
    level: 3,
    url: "/wiki/Paralizzare",
    name: "Paralizzare Paralizzare",
    school: "ammaliamento",
    description: "Blocchi un umanoide sul posto",
  },
  {
    level: 3,
    url: "/wiki/Piedi_Pinnati",
    name: "Piedi Pinnati Piedi Pinnati",
    school: "trasmutazione",
    description:
      "Trasforma i piedi di una creatura in pinne, consentendole di nuotare ma rallentandola sul terreno",
  },
  {
    level: 3,
    url: "/wiki/Pozzo_Gravitazionale",
    name: "Pozzo Gravitazionale Pozzo Gravitazionale",
    school: "invocazione",
    description: "Crei una sfera di gravità alterata",
  },
  {
    level: 3,
    url: "/wiki/Restringere_Oggetto",
    name: "Restringere Oggetto Restringere Oggetto",
    school: "trasmutazione",
    description: "Riduci un oggetto alle dimensioni di una moneta",
  },
  {
    level: 3,
    url: "/wiki/Sabbie_Mobili",
    name: "Sabbie Mobili Sabbie Mobili",
    school: "trasmutazione",
    description: "Fai sussultare la superficie",
  },
  {
    level: 3,
    url: "/wiki/Sfera_di_Invisibilit%C3%A0",
    name: "Sfera di Invisibilità Sfera di Invisibilità",
    school: "illusione",
    description:
      "Tu e le creature vicine diventate invisibili mentre esplorate",
  },
  {
    level: 3,
    url: "/wiki/Tazza_di_Polvere",
    name: "Tazza di Polvere Tazza di Polvere",
    school: "necromanzia",
    description:
      "Maledici il bersaglio con una sete che nessuna bevanda può estinguere",
  },
  {
    level: 3,
    url: "/wiki/Tocco_del_Vampiro",
    name: "Tocco del Vampiro Tocco del Vampiro",
    school: "necromanzia",
    description:
      "Infliggi danni di tipo negativo e ottieni pf temporanei con un tocco",
  },
  {
    level: 3,
    url: "/wiki/Trama_Ipnotica",
    name: "Trama Ipnotica Trama Ipnotica",
    school: "illusione",
    description: "Colori cangianti abbagliano ed affascinano le creature",
  },
  {
    level: 3,
    url: "/wiki/Incantesimi/Velocit%C3%A0",
    name: "Incantesimi/Velocità Velocità",
    school: "trasmutazione",
    description:
      "Velocizzi una creatura in modo che possa attaccare o muoversi più spesso",
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
