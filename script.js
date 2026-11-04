const fotos = ['./assets/img/ice_ozean.jpg', './assets/img/animated_city.jpg', './assets/img/dark_clouds.png', './assets/img/bird.jpg', './assets/img/hurican.jpg', './assets/img/white_forest.jpg', './assets/img/bird_in_the_water.jpg', './assets/img/man_in_the_osean.jpg', './assets/img/bird_on_stone.jpg', './assets/img/jagura_babies.jpg', './assets/img/snow_mountains.jpg', './assets/img/white_tree.jpg'];
const fotosAlt = ['Ice Ozean Picture', 'Animated City Picture', 'Dark Clouds Picture', 'Bird Picture', 'Hurican Picture', 'White Forest Picture', 'Bird in the Water Picture', 'Man in the Osean Picture', 'Bird on Stone Picture', 'Jagura Babies Picture', 'Snow Mountains Picture', 'White Tree Picture'];
let fotosRef = document.getElementById('myFotoCollection');
let bodyRef = document.getElementById('myBody');
let aktuellerIndex = 0;

function showFotoAlbum() {
    fotosRef.innerHTML = "";

    for (let index = 0; index < fotos.length; index++) {
        fotosRef.innerHTML += `
            <img
                src="${fotos[index]}"
                alt="${fotosAlt[index]}"
                onclick="openDialog('${fotos[index]}', '${fotosAlt[index]}', ${index})"
            >
        `;
    }
}

function createDialog(img, alt, index) {
    bodyRef.insertAdjacentHTML('beforeend', `
    <dialog id="myDialog" class="picture-dialog">
        <header class="picture-dialog-header">
            <p id="dialogTitel">${alt}</p>
            <img src="./assets/icon/close.svg" alt="Closing Icon" onclick="closeDialog()"> 
        </header>

        <main>
            <img id="dialogBild" src="${img}" alt="${alt}">
        </main>

        <footer class="picture-dialog-footer">
            <button class="arrow-button arrow-left" aria-label="vorheriges Bild" onclick="switchDialog(-1)"></button>
            <p id="dialogZaehler">${index + 1} / ${fotos.length}</p>
            <button class="arrow-button arrow-right" aria-label="nächstes Bild" onclick="switchDialog(1)"></button>
        </footer>
    </dialog>
    `);
}

