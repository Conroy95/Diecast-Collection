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
                <p>Model: ${cells[1]}</p>
                <p>Jaar: ${cells[2]}</p>
                <p>Kleur: ${cells[3]}</p>
            `;
            autoLijst.appendChild(autoItem);
        });
    });
