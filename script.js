const FOTOS = [
    './assets/img/ice_ozean.jpg',
    './assets/img/animated_city.jpg',
    './assets/img/dark_clouds.png',
    './assets/img/bird.jpg',
    './assets/img/hurican.jpg',
    './assets/img/white_forest.jpg',
    './assets/img/bird_in_the_water.jpg',
    './assets/img/man_in_the_osean.jpg',
    './assets/img/bird_on_stone.jpg',
    './assets/img/jagura_babies.jpg',
    './assets/img/snow_mountains.jpg',
    './assets/img/white_tree.jpg'
];

const FOTOS_ALT = [
    'Ice Ozean Picture',
    'Animated City Picture',
    'Dark Clouds Picture',
    'Bird Picture',
    'Hurican Picture',
    'White Forest Picture',
    'Bird in the Water Picture',
    'Man in the Osean Picture',
    'Bird on Stone Picture',
    'Jagura Babies Picture',
    'Snow Mountains Picture',
    'White Tree Picture'
];

const fotosRef = document.getElementById('myFotoCollection');
const dialogRef = document.getElementById('myDialog');
const dialogBildRef = document.getElementById('dialogBild');
const dialogTitelRef = document.getElementById('dialogTitel');
const dialogZaehlerRef = document.getElementById('dialogZaehler');

let aktuellerIndex = 0;

function init() {
    showFotoAlbum();

    document.getElementById('dialogSchliessen').addEventListener('click', closeDialog);
    document.getElementById('dialogZurueck').addEventListener('click', () => switchDialog(-1));
    document.getElementById('dialogWeiter').addEventListener('click', () => switchDialog(1));
}

function showFotoAlbum() {
    fotosRef.replaceChildren();

    for (let index = 0; index < FOTOS.length; index++) {
        const fotoElement = createFotoElement(index);
        fotosRef.appendChild(fotoElement);
    }
}

function createFotoElement(index) {
    const button = document.createElement('button');
    const bild = document.createElement('img');

    button.type = 'button';
    button.className = 'foto-button';
    button.setAttribute('aria-label', `${FOTOS_ALT[index]} öffnen`);
    button.addEventListener('click', () => openDialog(index));

    bild.src = FOTOS[index];
    bild.alt = '';

    button.appendChild(bild);
    return button;
}

function openDialog(index) {
    aktuellerIndex = index;
    updateDialog();
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

function switchDialog(richtung) {
    aktuellerIndex += richtung;

    if (aktuellerIndex >= FOTOS.length) {
        aktuellerIndex = 0;
    } else if (aktuellerIndex < 0) {
        aktuellerIndex = FOTOS.length - 1;
    }

    updateDialog();
}

function updateDialog() {
    dialogBildRef.setAttribute('src', FOTOS[aktuellerIndex]);
    dialogBildRef.setAttribute('alt', FOTOS_ALT[aktuellerIndex]);

    dialogTitelRef.textContent = FOTOS_ALT[aktuellerIndex];
    dialogZaehlerRef.textContent = `${aktuellerIndex + 1} / ${FOTOS.length}`;
}

init();
