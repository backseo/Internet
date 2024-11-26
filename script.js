// Liste des noms de fichiers d'images avec leurs titres
const imageFiles = [
    { fileName: "image-01.jpg", title: "Vue de la façade" },
    { fileName: "image-02.jpg", title: "Vue de la façade" },
    { fileName: "image-03.jpg", title: "Plan large de l'accès" },
    { fileName: "image-04.jpg", title: "Plan 3/4 de l'accès" },
    { fileName: "image-05.jpg", title: "Plan 3/4 plongée" },
    { fileName: "image-06.jpg", title: "Plan vide dessus" },
    { fileName: "image-07.jpg", title: "Plan vide 3/4 dessus" },
    { fileName: "image-08.jpg", title: "Entrée vide" },
    { fileName: "image-09.jpg", title: "Chambre vide" },
    { fileName: "image-10.jpg", title: "Salle à manger / Salon" },
    { fileName: "image-11.jpg", title: "Salle de bain" },
    { fileName: "image-12.jpg", title: "Plan 3/4 dessus meublé" },
    { fileName: "image-13.jpg", title: "Palier" },
    { fileName: "image-14.jpg", title: "Entrée meublée" },
    { fileName: "image-15.jpg", title: "Chambre meublée" },
    { fileName: "image-16.jpg", title: "SAM / Salon meublé" },
    { fileName: "image-17.jpg", title: "SAM / Salon meublé" },
    { fileName: "image-18.jpg", title: "SAM / Salon meublé" },
    { fileName: "image-19.jpg", title: "Salle de bain meublée" },
    { fileName: "image-20.jpg", title: "SDB / Toilettes" },

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
