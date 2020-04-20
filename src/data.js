/**
 * single image artwork
 */
import frida from './assets/frida.jpg';
import heart from './assets/heart.jpg';
import palach from './assets/palach.jpg';
import overthinking from './assets/overthinking.jpg';
import vrana from './assets/vrana.jpg';
import astronaut from './assets/astronaut.jpg';

/**
 * artwork photosets import
 */
import cake from './assets/carrot_cake/cake.jpg';
import carrotCake from './assets/carrot_cake/1_carrot cake.jpg';
import mrkva from './assets/carrot_cake/2_mrkva.jpg';
import orah from './assets/carrot_cake/3_orah.jpg';
import limun from './assets/carrot_cake/4_limun.jpg';
import cimet from './assets/carrot_cake/5_cimet.jpg';
import javorovSirup from './assets/carrot_cake/6_javorov_sirup.jpg';
import receptKrema from './assets/carrot_cake/7_recept_krema.jpg';
import receptKruh from './assets/carrot_cake/8_recept_kruh.jpg';

import krovovi1 from './assets/alle_farben/1_krovovi.jpg';
import krovovi2 from './assets/alle_farben/2_krovovi.jpg';
import krovovi3 from './assets/alle_farben/3_krovovi.jpg';

import beetlePatch from './assets/dung_beetle/patch.jpg';
import beetleShirt1 from './assets/dung_beetle/1_shirt.jpg';
import beetleShirt2 from './assets/dung_beetle/2_shirt.jpg';

import activismMegafon from './assets/movie_activism/megafon.jpg';
import activismBag from './assets/movie_activism/bag.jpg';
import activismShirt from './assets/movie_activism/shirt.jpg';

import rijekaMap1 from './assets/use-it/1_map.jpg';
import rijekaMap2 from './assets/use-it/2_map.jpg';
import rijekaMap3 from './assets/use-it/3_map.jpg';
import rijekaMap4 from './assets/use-it/4_map.jpg';
import rijekaMap5 from './assets/use-it/5_map.jpg';
import rijekaMap6 from './assets/use-it/6_map.jpg';
import rijekaMap7 from './assets/use-it/7_map.jpg';

import noodles from './assets/overeating/noodles.jpg';
import salsa from './assets/overeating/salsa.jpg';

import dubrovnik1 from './assets/dubrovnik/dubrovnik.jpg';
import dubrovnik2 from './assets/dubrovnik/dubrovnik-2.jpg';

import prasac1 from './assets/prasac/prasac.png';
import prasac2 from './assets/prasac/prasac-2.jpg';

import obrucColor from './assets/obruc/obruc-color.jpg';
import obrucGrey from './assets/obruc/obruc-grey.jpg';

import limunada1 from './assets/limunada/limunada.jpg';
import limunada2 from './assets/limunada/limunada-2.jpg';

/**
 * artwork photosets
 */
const carrotCakePhotoSet = [
  carrotCake,
  receptKrema,
  receptKruh,
  mrkva,
  orah,
  limun,
  cimet,
  javorovSirup,
];
const rooftopsPhotoSet = [krovovi1, krovovi2, krovovi3];
const beetlePhotoSet = [beetlePatch, beetleShirt1, beetleShirt2];
const movieActivismPhotoSet = [activismMegafon, activismShirt, activismBag];
const overeatingPhotoSet = [noodles, salsa];
const dubrovnikPhotoSet = [dubrovnik1, dubrovnik2];
const prasacPhotoSet = [prasac1, prasac2];
const obrucPhotoSet = [obrucColor, obrucGrey];
const lemonadePhotoSet = [limunada1, limunada2];
const useItMapPhotoSet = [
  rijekaMap1,
  rijekaMap2,
  rijekaMap3,
  rijekaMap4,
  rijekaMap5,
  rijekaMap6,
  rijekaMap7,
];

const artwork = [
  {
    id: 12,
    name: 'USE-IT Rijeka Map',
    cover: rijekaMap1,
    client: 'USE-IT Maps',
    year: 2019,
    technique: 'Mixed Media',
    photoSet: useItMapPhotoSet,
    description: '',
  },
  {
    id: 3,
    name: 'Carrot Cake Recipe',
    cover: cake,
    client: 'Foodoris',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: carrotCakePhotoSet,
    description: 'Recipe and food illustration for food blog Foodoris',
  },
  {
    id: 7,
    name: 'Motovun Rooftops',
    cover: krovovi1,
    client: 'Personal Work',
    year: 2019,
    technique: 'Mixed Media',
    photoSet: rooftopsPhotoSet,
    description: '',
  },
  {
    id: 11,
    name: 'Movie Activism',
    cover: activismMegafon,
    client: 'Movie Activism Berlin Film Festival',
    year: 2019,
    technique: 'Mixed Media',
    photoSet: movieActivismPhotoSet,
    description: '',
  },
  {
    id: 10,
    name: 'Dung Beetle',
    cover: beetlePatch,
    client: 'Personal Work',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: beetlePhotoSet,
    description: '',
  },
  {
    id: 1,
    name: 'OVEReating series',
    cover: noodles,
    client: 'Personal work',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: overeatingPhotoSet,
    description: 'Food illustration',
  },
  {
    id: 4,
    name: 'Dubrovnik',
    cover: dubrovnik1,
    client: 'Personal Work',
    year: 2018,
    technique: 'Ink & Paper',
    photoSet: dubrovnikPhotoSet,
    description:
      "I have a thing for little packed stone houses, faded rooftops and the feeling that the modern world didn't come there.",
  },
  {
    id: 5,
    name: 'Grobnik Alps',
    cover: obrucColor,
    client: ' P.D. Obruč - Jelenje',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: obrucPhotoSet,
    description:
      'As a kid all I ever wanted was to have a paprika birthday cake since I refused to eat everything but carrots and paprikas. In that time in Yugoslavia, existence of carrot cake was unknown. ',
  },
  {
    id: 2,
    name: 'Paprika Birthday Cake',
    cover: frida,
    client: 'Personal Work',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: [frida],
  },
  {
    id: 6,
    name: 'Blue Blood',
    cover: heart,
    client: 'Personal Work',
    year: 2019,
    technique: 'Mixed Media',
    photoSet: [heart],
    description:
      'Illustration of the song “Blue Blood” from the band Foals for a magazine competition.',
  },
  {
    id: 8,
    name: 'Jan Palach',
    cover: palach,
    client: 'Personal Work',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: [palach],
  },
  {
    id: 9,
    name: "Orwell's pigs",
    cover: prasac1,
    client: 'Personal Work',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: prasacPhotoSet,
    description:
      'Illustration homage of Orwell’s pigs from dystopian book “Animal Farm” disguised as modern characters.',
  },
  {
    id: 12,
    name: 'Overthinking',
    cover: overthinking,
    client: 'Personal work',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: [overthinking],
    description:
      'Illustration of excessive thinking about a problem/situation, or so-called overthinking.',
  },
  {
    id: 16,
    name: "Rijeka's lemonade",
    cover: limunada2,
    client: 'Urbani Separe',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: lemonadePhotoSet,
    description:
      'The pop-up stickers were part of the event "Gledaj (u)druge" which promotes different associations and their courageous work to make post-industrial town of Rijeka in Croatia alive once again. As it is lemonade from Rijeka, which is statistically known to be the rainiest city in Croatia... the idea for the design just imposed by itself. Lemon + rain = lemonade! At least in Rijeka!',
  },
  {
    id: 14,
    name: 'Crow & Poppies',
    cover: vrana,
    client: 'Personal work',
    year: 2018,
    technique: 'Mixed Media',
    photoSet: [vrana],
    description:
      'Illustration inspired by Berlin’s crows that secretly own the city.  ',
  },
  {
    id: 15,
    name: 'Floating astronaut',
    cover: astronaut,
    client: 'Private commision',
    year: 2018,
    technique: 'Ink & Paper',
    photoSet: [astronaut],
    description: 'Illustration for SF lover boy',
  },
];

export default artwork;
