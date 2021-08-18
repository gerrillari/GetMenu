//Création tableau vide pour ajouter le menu et le prix
var menu = [];
var price = [];

//fonction qui récupére les valeurs du formulaire lors du clic bouton et qui ajoute les valeurs dans les tableaux créés
function getMenu() {
    //Récupération de la valeur du menu et prix
    var starter = document.getElementById("starterid").value;
    var starterPrice = parseFloat(document.getElementById("starter-priceid").value);
    var main = document.getElementById("mainid").value;
    var mainPrice = parseFloat(document.getElementById("main-priceid").value);
    var dessert = document.getElementById("dessertid").value;
    var dessertPrice = parseFloat(document.getElementById("dessert-priceid").value);
    //Ajout de la valeur du menu et prix dans les tableaux vides
    menu = [starter, main, dessert];
    price = [starterPrice, mainPrice, dessertPrice];
    //Création variable avec la somme de tous les prix
    totalPrice = parseFloat(starterPrice + mainPrice + dessertPrice);
    //j'appelle ma fonction où je lui passe comme argument Menu, afin qu'il puisse être utilisé dans l'autre fonction
    getListMenu(menu);    
    //j'appelle ma fonction où je lui passe comme argument Price, afin qu'il puisse être utilisé dans l'autre fonction
    getListPrice(price);
    //j'appelle ma fonction où je lui passe comme argument le prix total
    getTotalPrice(totalPrice);
}

//fonction qui crée une liste avec les valeurs du Menu
function getListMenu(menu) {
    //je récupére la liste ul
    var listMenu = document.getElementById("listMenu");
    //je boucle dans le tableau Menu
    for (let i = 0; i < menu.length; i++) {
        //je crée un élément li pour chaque objet dans le menu
        var elementli = document.createElement("li");
        //je crée une variable qui contiendra les objets de notre menu
        var objMenu = document.createTextNode(menu[i]);
        //je lie mon objet du tableau à l'élément li
        elementli.appendChild(objMenu);
        //je lie mon élément li à l'élément liste
        listMenu.appendChild(elementli);
    } 
}

//fonction qui crée une liste avec les valeurs du Prix (idem que la fonction précédente)
function getListPrice(price) {
    var listPrice = document.getElementById("listPrice");
    for (let i = 0; i < price.length; i++) {
        var elementli = document.createElement("li");
        var objPrice = document.createTextNode(price[i]);
        elementli.appendChild(objPrice);
        listPrice.appendChild(elementli); 
    }
}

//fonction qui affiche le prix total (fonctionnement idem que les 2 fonctions précédentes)
function getTotalPrice(totalPrice){
    var total = document.getElementById("totalPrice");
    var objTotalPrice = document.createTextNode(totalPrice);
    total.appendChild(objTotalPrice);
}

//fonction qui nettoie le formulaire lors du clic bouton 
function resetMenu() {
    document.getElementById("frm").reset();
}