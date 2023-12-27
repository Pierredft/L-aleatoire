
  // Fonction pour générer un nombre aléatoire entre min et max
  function generateRandomNumber() {
    var minInput = document.getElementById("min");
    var maxInput = document.getElementById("max");
    var resultatElement = document.getElementById("resultat");

    // Obtenir les valeurs des champs "min" et "max"
    var min = parseInt(minInput.value);
    var max = parseInt(maxInput.value);

    // Vérifiez que les valeurs sont des nombres valides
    if (!isNaN(min) && !isNaN(max)) {
      // Générez un nombre aléatoire entre min et max
      var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      // Affichez le résultat dans l'élément "resultat"
      resultatElement.textContent = randomNum;
    } else {
      // Affichez un message d'erreur si les valeurs ne sont pas valides
      resultatElement.textContent = "Veuillez entrer des nombres valides pour min et max.";
    }
  }

  // Appuiyer  sur le bouton "Générer" et appelez la fonction generateRandomNumber()
  var generateButton = document.querySelector('input[type="submit"]');
  generateButton.addEventListener("click", generateRandomNumber);
