const countries = [
  {
    id: 'usa',
    name: 'USA',
    locations: [
      'Moncks Corner, South Carolina',
      'Council Bluffs, Iowa',
      'Ashburn, Virginia',
      'Columbus, Ohio',
      'Dallas, Texas',
      'The Dalles, Oregon',
      'Los Angeles, California',
      'Salt Lake City, Utah',
      'Las Vegas, Nevada',
      'Secaucus, New Jersey',
    ],
    coordinates: { x: 239, y: 293 },
  },
  {
    id: 'china',
    name: 'China ',
    locations: ['Hong Kong'],
    coordinates: { x: 1002, y: 270 },
  },
  {
    id: 'israel',
    name: 'Israel ',
    locations: ['Tel-Aviv'],
    coordinates: { x: 719, y: 191 },
  },
  {
    id: 'finland',
    name: 'Finland',
    locations: ['Helsinki', 'Hamina'],
    coordinates: { x: 685, y: 96 },
  },
  {
    id: 'serbia',
    name: 'Serbia',
    locations: ['Belgrade'],
    coordinates: { x: 670, y: 153 },
  },
  {
    id: 'estonia',
    name: 'Estonia',
    locations: ['Tallinn'],
    coordinates: { x: 689, y: 112 },
  },
  {
    id: 'brazil',
    name: 'Brazil',
    locations: ['Osasco, São Paulo'],
    coordinates: { x: 435, y: 322 },
  },
  {
    id: 'ukraine',
    name: 'Ukraine',
    locations: ['Kiev'],
    coordinates: { x: 719, y: 144 },
  },
  {
    id: 'germany',
    name: 'Germany',
    locations: ['Berlin', 'Frankfurt'],
    coordinates: { x: 626, y: 134 },
  },
  {
    id: 'turkey',
    name: 'Turkey',
    locations: ['Istanbul'],
    coordinates: { x: 717, y: 173 },
  },
  {
    id: 'hungary',
    name: 'Hungary',
    locations: ['Budapest'],
    coordinates: { x: 662, y: 146 },
  },
  {
    id: 'ireland',
    name: 'Ireland',
    locations: ['Dublin'],
    coordinates: { x: 555, y: 132 },
  },
  {
    id: 'norway',
    name: 'Norway',
    locations: ['Oslo'],
    coordinates: { x: 619, y: 103 },
  },
  {
    id: 'japan',
    name: 'Japan',
    locations: ['Tokyo', 'Osaka'],
    coordinates: { x: 1082, y: 335 },
  },
  {
    id: 'russia',
    name: 'Russia',
    locations: ['Moscow'],
    coordinates: { x: 873, y: 121 },
  },
  {
    id: 'canada',
    name: 'Canada',
    locations: ['Montréal, Québec', 'Toronto, Ontario'],
    coordinates: { x: 261, y: 227 },
  },
  {
    id: 'poland',
    name: 'Poland',
    locations: ['Warsaw'],
    coordinates: { x: 667, y: 132 },
  },
  {
    id: 'portugal',
    name: 'Portugal',
    locations: ['Lisbon'],
    coordinates: { x: 559, y: 171 },
  },
  {
    id: 'france',
    name: 'France',
    locations: ['Paris'],
    coordinates: { x: 600, y: 147 },
  },
  {
    id: 'denmark',
    name: 'Denmark',
    locations: ['Copenhagen'],
    coordinates: { x: 625, y: 119 },
  },
  {
    id: 'slovenia',
    name: 'Slovenia',
    locations: ['Ljubljana'],
    coordinates: { x: 645, y: 145 },
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    locations: ['Meppel', 'Eemshaven'],
    coordinates: { x: 612, y: 127 },
  },
  {
    id: 'slovakia',
    name: 'Slovakia',
    locations: ['Bratislava'],
    coordinates: { x: 665, y: 140 },
  },
  {
    id: 'bulgaria',
    name: 'Bulgaria',
    locations: ['Sofia'],
    coordinates: { x: 691, y: 159 },
  },
  {
    id: 'sweden',
    name: 'Sweden',
    locations: ['Stockholm'],
    coordinates: { x: 640, y: 111 },
  },
  {
    id: 'spain',
    name: 'Spain',
    locations: ['Madrid'],
    coordinates: { x: 582, y: 166 },
  },
  {
    id: 'austria',
    name: 'Austria',
    locations: ['Vienna'],
    coordinates: { x: 653, y: 148 },
  },
  {
    id: 'macedonia',
    name: 'North Macedonia',
    locations: ['Skopje'],
    coordinates: { x: 678, y: 162 },
  },
  {
    id: 'moldova',
    name: 'Moldova',
    locations: ['Kishinev'],
    coordinates: { x: 700, y: 148 },
  },
  {
    id: 'czech',
    name: 'Czech Republic',
    locations: ['Prague'],
    coordinates: { x: 650, y: 137 },
  },
  {
    id: 'romania',
    name: 'Romania',
    locations: ['Bucharest'],
    coordinates: { x: 682, y: 149 },
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    locations: ['Geneva', 'Zurich'],
    coordinates: { x: 618, y: 147 },
  },
  {
    id: 'greece',
    name: 'Greece',
    locations: ['Thessaloniki'],
    coordinates: { x: 678, y: 172 },
  },
  {
    id: 'belgium',
    name: 'Belgium',
    locations: ['Brussels', 'St. Ghislain'],
    coordinates: { x: 605, y: 133 },
  },
  {
    id: 'armenia',
    name: 'Armenia',
    locations: ['Yerevan'],
    coordinates: { x: 756, y: 177 },
  },
  {
    id: 'latvia',
    name: 'Latvia',
    locations: ['Riga'],
    coordinates: { x: 682, y: 118 },
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    locations: ['London'],
    coordinates: { x: 576, y: 129 },
  },
  {
    id: 'italy',
    name: 'Italy',
    locations: ['Rome', 'Turin', 'Milan'],
    coordinates: { x: 637, y: 156 },
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    locations: ['Almaty'],
    coordinates: { x: 851, y: 165 },
  },
  {
    id: 'lithuania',
    name: 'Lithuania',
    locations: ['Vilnius'],
    coordinates: { x: 671, y: 121 },
  },
  {
    id: 'iceland',
    name: 'Iceland',
    locations: ['Reykjavik'],
    coordinates: { x: 524, y: 95 },
  },
  {
    id: 'croatia',
    name: 'Croatia',
    locations: ['Zagreb'],
    coordinates: { x: 653, y: 158 },
  },
  {
    id: 'southafrica',
    name: 'South Africa',
    locations: ['Johannesburg'],
    coordinates: { x: 679, y: 332 },
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    locations: ['Changhua County'],
    coordinates: { x: 1020, y: 334 },
  },
  {
    id: 'korea',
    name: 'South Korea',
    locations: ['Seoul'],
    coordinates: { x: 1059, y: 312 },
  },
  {
    id: 'india',
    name: 'India',
    locations: ['Mumbai', 'Delhi'],
    coordinates: { x: 880, y: 257 },
  },
  {
    id: 'singapore',
    name: 'Singapore',
    locations: ['Jurong West'],
    coordinates: { x: 949, y: 343 },
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    locations: ['Jakarta'],
    coordinates: { x: 984, y: 368 },
  },
  {
    id: 'australia',
    name: 'Australia',
    locations: ['Sydney', 'Melbourne'],
    coordinates: { x: 986, y: 444 },
  },
  {
    id: 'qatar',
    name: 'Qatar',
    locations: ['Doha'],
    coordinates: { x: 785, y: 215 },
  },
  {
    id: 'arabia',
    name: '  Saudi Arabia',
    locations: ['Dammam'],
    coordinates: { x: 759, y: 219 },
  },
  {
    id: 'mexico',
    name: 'Mexico',
    locations: ['Queretaro'],
    coordinates: { x: 261, y: 339 },
  },
  {
    id: 'chile',
    name: 'Chile',
    locations: ['Santiago'],
    coordinates: { x: 402, y: 404 },
  },
];

const mapWidth = 1280;
const mapHeight = 584;

const mapElem = document.querySelector('.map');
const mapCountryElems = document.querySelectorAll('.map__country');

const mapTooltip = document.querySelector('.map__tooltip');
const mapTooltipCountry = document.querySelector('.map__tooltip-country');
const mapTooltipLocation = document.querySelector('.map__tooltip-location');

let mapIntervalId = createMapInterval();
let mapClearTimeoutId = null;

function createMapInterval() {
  const country = countries[Math.floor(Math.random() * countries.length)];
  updateTooltip(country);
  return setInterval(() => {
    const country = countries[Math.floor(Math.random() * countries.length)];
    resetTooltip();
    updateTooltip(country);
    mapClearTimeoutId = setTimeout(() => resetTooltip(), 2700);
  }, 3000);
}

function updateTooltip(country) {
  const countryElem = document.querySelector(`.map__country[data-country="${country.id}"]`);
  const coordX = country.coordinates.x / mapWidth;
  const coordY = country.coordinates.y / mapHeight;

  if (countryElem) countryElem.classList.add('active');

  if (mapTooltipCountry) mapTooltipCountry.innerHTML = country.name;

  if (mapTooltipLocation) {
    mapTooltipLocation.innerHTML = country.locations
      .map((location) => `<li>${location}</li>`)
      .join('');
  }

  if (mapTooltip) {
    mapTooltip.style.left = `${coordX * 100}%`;
    mapTooltip.style.top = `${coordY * 100}%`;
    mapTooltip.classList.add('active');
  }
}

function resetTooltip() {
  if (!mapTooltip) return;
  mapTooltip.classList.remove('active');
  mapCountryElems.forEach((element) => element.classList.remove('active'));
}

mapCountryElems.forEach((mapCountryElem) => {
  mapCountryElem.addEventListener('click', (event) => {
    const country = countries.find((item) => item.id === event.currentTarget.dataset.country);
    window.clearInterval(mapIntervalId);
    window.clearTimeout(mapClearTimeoutId);
    resetTooltip();
    if (country) {
      updateTooltip(country);
      setTimeout(() => {
        resetTooltip();
        mapIntervalId = createMapInterval();
      }, 5000);
    }
  });
});
