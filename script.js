fetch('autos.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const autoLijst = document.getElementById('auto-lijst');

        rows.forEach(row => {
            const cells = row.split(',');
            const autoItem = document.createElement('div');
            autoItem.classList.add('auto-item');
            autoItem.innerHTML = `
                <h2>${cells[0]}</h2>
                <p>Logo: ${cells[1]}</p>
                <p>Merk: ${cells[2]}</p>
                <p>Model: ${cells[3]}</p>
                <p>Jaar: ${cells[4]}</p>
                <p>Schaal: ${cells[5]}</p>
                <p>Kleur: ${cells[6]}</p>
                <p>Categorie: ${cells[7]}</p>
                <p>Opmerking: ${cells[8]}</p>
            `;
            autoLijst.appendChild(autoItem);
        });
    });
