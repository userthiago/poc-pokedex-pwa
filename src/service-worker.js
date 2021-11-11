const build = 1;

const files = [
  './',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap',
  'https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmYUtfBBc4.woff2',
  'https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2',
  'https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
  'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0',
  'https://pokeapi.co/api/v2/pokemon/1/',
  'https://pokeapi.co/api/v2/pokemon/2/',
  'https://pokeapi.co/api/v2/pokemon/3/',
  'https://pokeapi.co/api/v2/pokemon/4/',
  'https://pokeapi.co/api/v2/pokemon/5/',
  'https://pokeapi.co/api/v2/pokemon/6/',
  'https://pokeapi.co/api/v2/pokemon/7/',
  'https://pokeapi.co/api/v2/pokemon/8/',
  'https://pokeapi.co/api/v2/pokemon/9/',
  'https://pokeapi.co/api/v2/pokemon/10/',
  'https://pokeapi.co/api/v2/pokemon/11/',
  'https://pokeapi.co/api/v2/pokemon/12/',
  'https://pokeapi.co/api/v2/pokemon/13/',
  'https://pokeapi.co/api/v2/pokemon/14/',
  'https://pokeapi.co/api/v2/pokemon/15/',
  'https://pokeapi.co/api/v2/pokemon/16/',
  'https://pokeapi.co/api/v2/pokemon/17/',
  'https://pokeapi.co/api/v2/pokemon/18/',
  'https://pokeapi.co/api/v2/pokemon/19/',
  'https://pokeapi.co/api/v2/pokemon/20/',
  'https://pokeapi.co/api/v2/pokemon/21/',
  'https://pokeapi.co/api/v2/pokemon/22/',
  'https://pokeapi.co/api/v2/pokemon/23/',
  'https://pokeapi.co/api/v2/pokemon/24/',
  'https://pokeapi.co/api/v2/pokemon/25/',
  'https://pokeapi.co/api/v2/pokemon/26/',
  'https://pokeapi.co/api/v2/pokemon/27/',
  'https://pokeapi.co/api/v2/pokemon/28/',
  'https://pokeapi.co/api/v2/pokemon/29/',
  'https://pokeapi.co/api/v2/pokemon/30/',
  'https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
  'assets/img/pokebola.jpg',
  'static/js/2.071ad9d5.chunk.js.LICENSE.txt',
  'static/js/2.071ad9d5.chunk.js.map',
  'static/js/main.d951de22.chunk.js',
  'static/js/2.071ad9d5.chunk.js',
  'static/js/main.d951de22.chunk.js.map',
  'static/js/runtime-main.4d004fd3.js',
  'static/js/runtime-main.4d004fd3.js.map',
  'static/js/fontawesome.all.min.js',
  'assets/js/register.js',
];

self.addEventListener('activate', () => {
  caches.open(`pwa-files-${build}`).then((cache) => {
    cache.addAll(files).then(() => caches.delete(`pwa-files-${build - 1}`))
  })
})

self.addEventListener('fetch', (event) => {
  const { request } = event;

  const response = caches
    .match(request)
    .then((cache) => cache || fetch(request))

  event.respondWith(response);
})