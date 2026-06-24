function ouvrirFormulaire(){
    document.getElementById("popup").style.display = "flex";
}

function fermerFormulaire(){
    document.getElementById("popup").style.display = "none";
}

function ajouterAvis(){

    let nom = document.getElementById("nom").value;
    let commentaire = document.getElementById("commentaire").value;

    if(nom === "" || commentaire === ""){
        alert("Veuillez remplir tous les champs");
        return;
    }

    let container =
    document.getElementById("avis-container");

    let avis = document.createElement("div");

    avis.classList.add("card");

    avis.innerHTML = `
        <p>⭐⭐⭐⭐⭐</p>
        <p>${commentaire}</p>
        <h4>- ${nom}</h4>
    `;

    container.appendChild(avis);

    document.getElementById("nom").value = "";
    document.getElementById("commentaire").value = "";

    fermerFormulaire();
}
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icon = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});