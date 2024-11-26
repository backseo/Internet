// Liste des noms de fichiers d'images avec leurs titres
const imageFiles = [
    { fileName: "image1.jpg", title: "Vue de la façade" },
    { fileName: "image2.jpg", title: "Intérieur moderne" },
    { fileName: "image3.jpg", title: "Salle de réunion" },
    { fileName: "image4.jpg", title: "Espace détente" },
];

// Sélectionne la section galerie
const gallery = document.getElementById('gallery');

// Génère dynamiquement les images avec les titres, et les ajoute à la galerie
imageFiles.forEach(image => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    // Crée un lien autour de chaque image pour le lightbox
    const link = document.createElement('a');
    link.href = `images/${image.fileName}`;
    link.setAttribute('data-lightbox', 'gallery'); // attribut pour Lightbox2
    link.setAttribute('data-title', image.title); // titre affiché dans Lightbox

    const img = document.createElement('img');
    img.src = `images/${image.fileName}`;
    img.alt = image.title;
    img.classList.add('thumbnail');

    const title = document.createElement('p');
    title.classList.add('image-title');
    title.textContent = image.title;

    // Ajoute l'image dans le lien, puis le lien dans le conteneur
    link.appendChild(img);
    imgContainer.appendChild(link);
    imgContainer.appendChild(title);
    gallery.appendChild(imgContainer);
});
