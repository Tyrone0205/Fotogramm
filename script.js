const fotos = ['./assets/img/ice_ozean.jpg', './assets/img/animated_city.jpg', './assets/img/dark_clouds.png', './assets/img/bird.jpg', './assets/img/hurican.jpg', './assets/img/white_forest.jpg', './assets/img/bird_in_the_water.jpg', './assets/img/man_in_the_osean.jpg', './assets/img/bird_on_stone.jpg', './assets/img/jagura_babies.jpg', './assets/img/snow_mountains.jpg', './assets/img/white_tree.jpg'];
const fotosAlt = ['Ice Ozean Picture', 'Animated City Picture', 'Dark Clouds Picture', 'Bird Picture', 'Hurican Picture', 'White Forest Picture', 'Bird in the Water Picture', 'Man in the Osean Picture', 'Bird on Stone Picture', 'Jagura Babies Picture', 'Snow Mountains Picture', 'White Tree Picture'];
let fotosRef = document.getElementById('myFotoCollection');
let bodyRef = document.getElementById('myBody');

function showFotoAlbum() {
    fotos.innerHTML = "";
    for (let index = 0; index < fotos.length; index++) {
        fotosRef.innerHTML += `<img onclick="openDialog("${fotos[index]}", "${fotosAlt[index]}" src="${fotos[index]}")"  alt="${fotosAlt[index]}">`
    }
}

function createDialog(img, alt, index) {
    bodyRef.innerHTML += 
    `<dialog id="myDialog" class="picture-dialog">
        <header class="picture-dialog-header">
            <p>${alt}</p>
            <img src="./assets/icon/close.svg" alt="Closing Icon"> 
        </header>

        <main>
            <img src="${img} alt="${alt}">
        </main>

        <footer class="picture-dialog-footer">
            <button class="arrow-left" aria-label="vorheriges Bild"></button>
            <p>${index} / ${fotos.length}</p>
            <button class="arrow-right" aria-label="nächstes Bild"></button>
        </footer>
     </dialog>`;
}

function openDialog(img, alt, index) {
    createDialog(img, alt, index)
    const dialogRef = document.getElementById('myDialog');
    dialogRef.showModal();

}