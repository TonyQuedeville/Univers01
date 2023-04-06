    const loadpage = document.getElementById("loadingpage")
    
    const imgs = document.getElementsByTagName("img")
    
    const imgnb = imgs.length + 1

    var loadimages = 0

    // Créez une nouvelle instance de l'objet Image
    var spaceshipImg = new Image();

    // Définissez l'attribut src de l'image sur l'URL de l'image de fond
    spaceshipImg.src = getComputedStyle(document.body).backgroundImage.slice(4, -1).replace(/"/g, "");

    // Attendez que l'image soit chargée avec succès
    spaceshipImg.addEventListener('load', ()=>{
        loadimages += 1
        if (loadimages === imgnb) OnAllImgLoad()
    });

    // parcours des autres
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