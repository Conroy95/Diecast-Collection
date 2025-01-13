document.addEventListener('DOMContentLoaded', () => {
    const autoData = [
        {
            logo: 'img/logo1.png',
            merknaam: 'Merk A',
            model: 'Model 1',
            jaar: 2020,
            schaal: '1:18',
            categorie: 'Sport',
            opmerking: 'Mooie gedetailleerde auto'
        },
        {
            logo: 'img/logo2.png',
            merknaam: 'Merk B',
            model: 'Model 2',
            jaar: 2018,
            schaal: '1:24',
            categorie: 'Oldtimer',
            opmerking: 'Vintage model'
        }
        // Voeg hier meer gegevens toe
    ];

    const tableBody = document.querySelector('#auto-database tbody');

    autoData.forEach(auto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${auto.logo}" alt="${auto.merknaam} logo" style="width:50px;"></td>
            <td>${auto.merknaam}</td>
            <td>${auto.model}</td>
            <td>${auto.jaar}</td>
            <td>${auto.schaal}</td>
            <td>${auto.categorie}</td>
            <td>${auto.opmerking}</td>
        `;
        tableBody.appendChild(row);
    });
});
