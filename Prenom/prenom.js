//   Fonction pour ajouter une ligne a un tableau apres click buton
  document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector('input[type="submit"]');
    var inputElement = document.getElementById("prenom");
    var tableBody = document.querySelector(".table tbody");

    addButton.addEventListener("click", function () {
      var inputValue = inputElement.value.trim();

      if (inputValue !== "") {
        var newRow = tableBody.insertRow();
        var cell = newRow.insertCell(0);
        cell.textContent = inputValue;

        inputElement.value = "";
      }
    });
  });


  // Fonction pour générer un nombre aléatoire entre 0 et la longueur du tableau
function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }
  
  // Fonction pour gérer le clic sur le bouton "Générer"
  function genererResultat() {
    // Sélectionnez le tableau des prénoms
    var tableBody = document.querySelector('table tbody');
  
    // Vérifiez s'il y a des entrées dans le tableau
    if (tableBody.children.length === 0) {
      document.getElementById('resultat').textContent = "Le tableau est vide.";
    } else {
      // Générez un index aléatoire en fonction de la longueur du tableau
      var randomIndex = generateRandomIndex(tableBody.children.length);
  
      // Sélectionne la ligne du tableau correspondant à l'index aléatoire
      var randomRow = tableBody.children[randomIndex];
  
      // Obtenir le texte de la cellule dans cette ligne (colonne "Prénom")
      var randomFirstName = randomRow.querySelector('td').textContent;
  
      // Affichez le prénom aléatoire dans l'élément avec l'ID "resultat"
      document.getElementById('resultat').textContent =  randomFirstName;
    }
  }
  
  // Associez la fonction genererResultat au clic du bouton "Générer"
  document.querySelector('input[value="Générer"]').addEventListener('click', genererResultat);
  
