// create an Array which contains all information, we need to fill a card

export const gins = [
  {
    imgSrc:
      "https://wacholder-express.de/media/image/75/3f/2d/Studer-Classic_600x600@2x.jpg",
    title: "Studer Swiss Classic Gin",
    country: "schweiz",
    price: 42,
    taste: "normal",
    description: "Ingwer, Koriander, Kubeben-Pfeffer, Lavendel, Wacholder, Zitronengras"
  },
  {
    imgSrc:
      "https://wacholder-express.de/media/image/bf/aa/c6/Blue-Magic_600x600@2x.jpg",
    title: "Sharish Blue Magic Gin",
    country: "portugal",
    price: 27,
    taste: "fruchtig",
    description: "Angelikawurzel, Ingwer, Kardamom, Koriandersamen, Lakritz, Wacholder, Zimt"
  },
  {
    imgSrc:
      "https://wacholder-express.de/media/image/cb/17/7a/360_Gin_RotadoSul_1000x1000_600x600@2x.jpg",
    title: "Gin Sul Edition Rota do Sul",
    country: "deutschland",
    price: 299,
    taste: "kräftig",
    description: "Die Algarve in Portugal mit ihren vielen Sonnentagen, dem heißen und trockenen Sommer und der sanften Meerbrise gilt als die südlichste Region auf dem portogiesischen Festland und spielt bei dem Gin Sul eine große Rolle. Gleiches gilt auch für die Sonderedition von 2016, den Gin Sul in der Edition Rota do Sul. Die Hersteller dieses Gins waren von der Vegetation der portogiesischen Küste so begeistert, dass sie sich kurzerhand aufmachten, um in der Region nach weiteren Botanicals zu suchen, die sie für ihre Gins verwenden konnten. Die Zistrose, eine Art Strauch, wächst im heißen Klima des Mittelmeers und an der Atlantikküste Portugals. Diese Zutat findet bereits im klassischen Gin Sul Verwendung. Da verwundert es nicht, dass die Hersteller des Gins für den Rota do Sul erneut die sonnenbeschienene Region aufsuchten. Die ausgewählten Botanicals für diesen Gin spiegeln das Flair der portogiesischen Küste perfekt wider. Oregano, Thymianblüten und Rosmarin verleihen dem Rota do Sul eine kräuterige Note, während Strohblumen den Gin mit ihren floralen Aromen untermalen. Frische Zitronen, Apfelsinen und Aprikosen sorgen für eine angenehme Frische, die nicht nur im heißen Klima der Algarve äußerst willkommen ist. In der Altoaner Spirituosen Manufaktur in Hamburg wurde schließlich klares Quellwasser aus dem Monchique-Gebirge hinzugegeben, das dem Rota do Sul noch mehr Exklusivität verleiht. Der Gin ist außerdem auf nur 2.000 Flaschen limitiert."
  },
  {
    imgSrc:
      "https://wacholder-express.de/media/image/23/35/66/Goldcap-2018_600x600@2x.jpg",
    title: "Ferdinand's Saar Dry Gin Goldcap 2018 in Messingschatulle",
    country: "deutschland",
    price: 27,
    taste: "kräftig",
    description: "geheime Zutaten, Riesling"
  },
  {
    imgSrc:
      "https://wacholder-express.de/media/image/f2/37/fc/Procera-Gin_600x600@2x.jpg",
    title: "Teuer Gin",
    country: "portugal",
    price: 89,
    taste: "fruchtig",
    description: "Angelikawurzel, Ingwer, Kardamom, Koriandersamen, Lakritz, Wacholder, Zimt"
  },
  {
  imgSrc:
      "https://wacholder-express.de/media/image/03/fe/04/Gin-Mare-Mini_600x600@2x.jpg",
    title: "Gin Mare",
    country: "spanien",
    price: 9,
    taste: "kräftig",
    description: "Basilikum, Oliven, Rosmarin, Thymian"
  },  
  
];

export const tonicwaters = [
  {
    imgSrc:
      "https://www.rheinspirits.com/wp-content/uploads/2018/02/Thomas-Henry-Tonic-02l.jpg",
    title: "Rheinspirit",
    country: "deutschland",
    price: 1,
    taste: "normal",
    description: "Ingwer, Koriander, Kubeben-Pfeffer, Lavendel, Wacholder, Zitronengras",
    gin: ["Gin Mare", "Teuer Gin","Ferdinand's Saar Dry Gin Goldcap 2018 in Messingschatulle","Studer Swiss Classic Gin","Sharish Blue Magic Gin"]
  },
  {
    imgSrc:
      "https://www.durstretter.de/media/image/product/185/lg/schweppes-indian-tonic-water-6x10l-mehrweg.jpg",
    title: "Indian",
    country: "portugal",
    price: 2.70,
    taste: "fruchtig",
    description: "Angelikawurzel, Ingwer, Kardamom, Koriandersamen, Lakritz, Wacholder, Zimt",
    gin: ["Gin Mare", "Teuer Gin","Gin Sul Edition Rota do Sul"]
  },
  {
    imgSrc: "https://www.novado.de/pub/media/catalog/product/cache/db563f2302460f8ef73bd3b1c97ac808/g/o/goldberg-_tonic_water-_0_20_glasflasche_3.jpg",
    title: "Schweppes",
    country: "deutschland",
    price: 29.99,
    taste: "kräftig",
    description: "Die Algarve in Portugal mit ihren vielen Sonnentagen, dem heißen und trockenen Sommer und der sanften Meerbrise gilt als die südlichste Region auf dem portogiesischen Festland und spielt bei dem Gin Sul eine große Rolle. Gleiches gilt auch für die Sonderedition von 2016, den Gin Sul in der Edition Rota do Sul. Die Hersteller dieses Gins waren von der Vegetation der portogiesischen Küste so begeistert, dass sie sich kurzerhand aufmachten, um in der Region nach weiteren Botanicals zu suchen, die sie für ihre Gins verwenden konnten. Die Zistrose, eine Art Strauch, wächst im heißen Klima des Mittelmeers und an der Atlantikküste Portugals. Diese Zutat findet bereits im klassischen Gin Sul Verwendung. Da verwundert es nicht, dass die Hersteller des Gins für den Rota do Sul erneut die sonnenbeschienene Region aufsuchten. Die ausgewählten Botanicals für diesen Gin spiegeln das Flair der portogiesischen Küste perfekt wider. Oregano, Thymianblüten und Rosmarin verleihen dem Rota do Sul eine kräuterige Note, während Strohblumen den Gin mit ihren floralen Aromen untermalen. Frische Zitronen, Apfelsinen und Aprikosen sorgen für eine angenehme Frische, die nicht nur im heißen Klima der Algarve äußerst willkommen ist. In der Altoaner Spirituosen Manufaktur in Hamburg wurde schließlich klares Quellwasser aus dem Monchique-Gebirge hinzugegeben, das dem Rota do Sul noch mehr Exklusivität verleiht. Der Gin ist außerdem auf nur 2.000 Flaschen limitiert.",
    gin: ["Teuer Gin"]
  },
  
  
];

export const ingredients = [
  {
    imgSrc: "https://images.eatsmarter.de/sites/default/files/styles/facebook/public/warenkunde-nelken-300x225.jpg",
    title: "Nelke",
    country: "deutschland",
    price: 1,
    taste: "normal",
    description: "Ingwer, Koriander, Kubeben-Pfeffer, Lavendel, Wacholder, Zitronengras",
    gin: ["Gin Mare", "Teuer Gin","Ferdinand's Saar Dry Gin Goldcap 2018 in Messingschatulle","Studer Swiss Classic Gin","Sharish Blue Magic Gin"]
  },
  {
    imgSrc:"https://www.gartenmagazin.net/wp-content/uploads/2014/03/10-03-2014-09-46-20.jpg",
    title:  "Gurke",
    country: "portugal",
    price: 2.70,
    taste: "fruchtig",
    description: "Angelikawurzel, Ingwer, Kardamom, Koriandersamen, Lakritz, Wacholder, Zimt",
    gin: ["Gin Mare", "Teuer Gin"]
  },
  {
    imgSrc:"https://praxistipps-images.chip.de/2FYqpf5fQIpZZGGesA-0Ufq-y6s=/0x0/filters:format(jpeg):fill(fff,true):no_upscale()/praxistipps.s3.amazonaws.com%2Flimette-und-zitrone-unterschiede-in-der-haltbarkeit-bild-pixabay-_8b0b4a23.jpg",
    title: "Limette",
    country: "deutschland",
    price: 29.99,
    taste: "kräftig",
    description: "Die Algarve in Portugal mit ihren vielen Sonnentagen, dem heißen und trockenen Sommer und der sanften Meerbrise gilt als die südlichste Region auf dem portogiesischen Festland und spielt bei dem Gin Sul eine große Rolle. Gleiches gilt auch für die Sonderedition von 2016, den Gin Sul in der Edition Rota do Sul. Die Hersteller dieses Gins waren von der Vegetation der portogiesischen Küste so begeistert, dass sie sich kurzerhand aufmachten, um in der Region nach weiteren Botanicals zu suchen, die sie für ihre Gins verwenden konnten. Die Zistrose, eine Art Strauch, wächst im heißen Klima des Mittelmeers und an der Atlantikküste Portugals. Diese Zutat findet bereits im klassischen Gin Sul Verwendung. Da verwundert es nicht, dass die Hersteller des Gins für den Rota do Sul erneut die sonnenbeschienene Region aufsuchten. Die ausgewählten Botanicals für diesen Gin spiegeln das Flair der portogiesischen Küste perfekt wider. Oregano, Thymianblüten und Rosmarin verleihen dem Rota do Sul eine kräuterige Note, während Strohblumen den Gin mit ihren floralen Aromen untermalen. Frische Zitronen, Apfelsinen und Aprikosen sorgen für eine angenehme Frische, die nicht nur im heißen Klima der Algarve äußerst willkommen ist. In der Altoaner Spirituosen Manufaktur in Hamburg wurde schließlich klares Quellwasser aus dem Monchique-Gebirge hinzugegeben, das dem Rota do Sul noch mehr Exklusivität verleiht. Der Gin ist außerdem auf nur 2.000 Flaschen limitiert.",
    gin: ["Teuer Gin","Gin Sul Edition Rota do Sul"]
  },
  {
    imgSrc:"https://www.fitforfun.de/files/images/201503/7/fff-video-schlank-mit-zitrone,181912_1x1_n.jpg",
    title: "Zitrone",
    country: "deutschland",
    price: 0.40,
    taste: "kräftig",
    description: "geheime Zutaten, Riesling",
    gin: ["Gin Sul Edition Rota do Sul"]
  },
  {
    imgSrc:"https://images.eatsmarter.de/sites/default/files/styles/facebook/public/zimt_576x432.jpg",
    title: "Zimt",
    country: "portugal",
    price: 89,
    taste: "fruchtig",
    description: "Angelikawurzel, Ingwer, Kardamom, Koriandersamen, Lakritz, Wacholder, Zimt",
    gin: ["Teuer Gin"]
  },
];

const dummi =[
{
  imgSrc:
    "https://bilder.t-online.de/b/87/56/68/26/id_87566826/tid_da/geissbock-hennes-zusammen-mit-seiner-dame-ilse-wurde-er-zweifacher-vater-.jpg",
  title: "Tonic 7",
  categories: ["museum"],
  distance: 20,
  rating: "⭐️",
  description: "Sweet like sugar"
}
]