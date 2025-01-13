// Dit script leest het CSV-bestand en toont de auto's met afbeeldingen op de pagina

// Bestand pad naar het CSV bestand (zet je eigen pad hier)
const csvBestand = 'autos.csv';

// Wanneer de pagina volledig is geladen, wordt de CSV ingelezen en weergegeven
window.onload = function() {
    // Gebruik PapaParse om het CSV-bestand te parseren
    Papa.parse(csvBestand, {
        download: true, // Dit zorgt ervoor dat we het bestand downloaden
        header: true, // De eerste rij bevat de kolomnamen
        complete: function(result) {
            // Nadat het CSV-bestand is geladen, voeren we deze functie uit
            toonAutoLijst(result.data);
        },
        error: function(error) {
            console.error('Er is een fout opgetreden bij het laden van het CSV-bestand:', error);
        }
    });
}

// Functie om de auto's weer te geven op de pagina
function toonAutoLijst(autos) {
    const autoLijst = document.getElementById('auto-lijst');

    // Itereer door alle auto's in de CSV data
    autos.forEach(auto => {
        const autoItem = document.createElement('div');
        autoItem.classList.add('auto-item');
        autoItem.innerHTML = `
            <h2>${auto.Naam}</h2>
            <p><strong>Merk:</strong> ${auto.Merk}</p>
            <p><strong>Model:</strong> ${auto.Model}</p>
            <p><strong>Jaar:</strong> ${auto.Jaar}</p>
            <p><strong>Schaal:</strong> ${auto.Schaal}</p>
            <p><strong>Kleur:</strong> ${auto.Kleur}</p>
            <p><strong>Categorie:</strong> ${auto.Categorie}</p>
            <p><strong>Opmerking:</strong> ${auto.Opmerking}</p>
            <img src="${auto.Afbeelding}" alt="${auto.Naam}" class="auto-afbeelding">
        `;
        autoLijst.appendChild(autoItem);
    });
}
