let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let index = 1;
        let lettersInCurrentRow = 0;
        let currentRow;

        function choisirLettreAleatoire() {
            const lettresTable = document.getElementById('lettresTable');
            
            if (alphabet.length === 0) {
                alert("Toutes les lettres ont été choisies!");
                return;
            }

            const randomIndex = Math.floor(Math.random() * alphabet.length);
            const randomLetter = alphabet[randomIndex];

            alphabet = alphabet.slice(0, randomIndex) + alphabet.slice(randomIndex + 1);

            // Check if a new row needs to be added
            if (lettersInCurrentRow % 12 === 0) {
                currentRow = lettresTable.insertRow();
            }

            const cell = currentRow.insertCell();
            cell.textContent = `${index++}. ${randomLetter}`;

            lettersInCurrentRow++;

            if (alphabet.length === 0) {
                document.querySelector('button').disabled = true;
            }
        }