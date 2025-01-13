// Functie om de Excel-gegevens in de tabel te laden
function laadAutoDatabase() {
    fetch('auto-database.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, {type: 'array'});
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            const tabelLichaam = document.querySelector("#auto-database tbody");
            jsonData.forEach(auto => {
                let row = tabelLichaam.insertRow();
                row.innerHTML = `
                    <td><img src="${auto['Merk Logo']}" alt="${auto['Merknaam']}" width="50"></td>
                    <td>${auto['Merknaam']}</td>
                    <td>${auto['Model']}</td>
                    <td>${auto['Jaar']}</td>
                    <td>${auto['Schaal']}</td>
                    <td>${auto['Categorie']}</td>
                    <td>${auto['Opmerking']}</td>
                `;
            });
        })
        .catch(error => console.error('Fout bij het laden van de database:', error));
}

window.onload = laadAutoDatabase;
