    const loadpage = document.getElementById("loadingpage")
    
    const imgs = document.getElementsByTagName("img")
    
    const imgnb = imgs.length + 1

    var loadimages = 0

    // Sélectionnez l'élément avec le fond d'écran que vous souhaitez attendre
    var element = document.body;

    // Créez une nouvelle instance de l'objet Image
    var image = new Image();

    // Définissez l'attribut src de l'image sur l'URL de l'image de fond
    image.src = getComputedStyle(element).backgroundImage.slice(4, -1).replace(/"/g, "");

    // Attendez que l'image soit chargée avec succès
    image.addEventListener('load', ()=>{
        loadimages += 1
        if (loadimages === imgnb) OnAllImgLoad()
    });

    for (const img of imgs) {
        if (img.complete && img.naturalHeight !== 0) {loadimages++; continue}
        const l = ()=>{
            loadimages += 1
            if (loadimages === imgnb) OnAllImgLoad()
            img.removeEventListener('load', l)
        }
        img.addEventListener('load', l)
    }

    function OnAllImgLoad() {
        loadpage.style.display = "none"
    }