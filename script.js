const PHOTOS = [
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

const PHOTO_DESCRIPTIONS = [
    'Ice Ocean Picture',
    'Animated City Picture',
    'Dark Clouds Picture',
    'Bird Picture',
    'Hurricane Picture',
    'White Forest Picture',
    'Bird in the Water Picture',
    'Man in the Ocean Picture',
    'Bird on Stone Picture',
    'Jaguar Babies Picture',
    'Snow Mountains Picture',
    'White Tree Picture'
];

const photosRef = document.getElementById('myPhotoCollection');
const dialogRef = document.getElementById('myDialog');
const dialogImageRef = document.getElementById('dialogImage');
const dialogTitleRef = document.getElementById('dialogTitle');
const dialogCounterRef = document.getElementById('dialogCounter');

let currentIndex = 0;

function init() {
    showPhotoAlbum();

    document.getElementById('dialogClose').addEventListener('click', closeDialog);
    document.getElementById('dialogPrevious').addEventListener('click', () => switchPhoto(-1));
    document.getElementById('dialogNext').addEventListener('click', () => switchPhoto(1));
    dialogRef.addEventListener('click', closeDialogOutside);
}

function showPhotoAlbum() {
    photosRef.replaceChildren();

    for (let index = 0; index < PHOTOS.length; index++) {
        const photoElement = createPhotoElement(index);
        photosRef.appendChild(photoElement);
    }
}

function createPhotoElement(index) {
    const button = document.createElement('button');
    const image = document.createElement('img');

    button.type = 'button';
    button.className = 'photo-button';
    button.setAttribute('aria-label', `Open ${PHOTO_DESCRIPTIONS[index]}`);
    button.addEventListener('click', () => openDialog(index));

    image.src = PHOTOS[index];
    image.alt = '';

    button.appendChild(image);
    return button;
}

function openDialog(index) {
    currentIndex = index;
    updateDialog();
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

function switchPhoto(direction) {
    currentIndex += direction;

    if (currentIndex >= PHOTOS.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = PHOTOS.length - 1;
    }

    updateDialog();
}

function updateDialog() {
    dialogImageRef.setAttribute('src', PHOTOS[currentIndex]);
    dialogImageRef.setAttribute('alt', PHOTO_DESCRIPTIONS[currentIndex]);

    dialogTitleRef.textContent = PHOTO_DESCRIPTIONS[currentIndex];
    dialogCounterRef.textContent = `${currentIndex + 1} / ${PHOTOS.length}`;
}

function closeDialogOutside(event) {
    const rect = dialogRef.getBoundingClientRect();

    const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isOutside) {
        closeDialog();
    }
}