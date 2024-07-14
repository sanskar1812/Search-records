document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let rows = document.querySelector("#recordTable").rows;

    for (let i = 0; i < rows.length; i++) {
        let firstCol = rows[i].cells[0].textContent.toUpperCase();
        let thirdCol = rows[i].cells[2].textContent.toUpperCase();
        let sixthCol = rows[i].cells[5].textContent.toUpperCase();
        let seventhCol = rows[i].cells[6].textContent.toUpperCase();
        let ninthCol = rows[i].cells[8].textContent.toUpperCase();
        let tenthCol = rows[i].cells[9].textContent.toUpperCase();
        let eleventhCol = rows[i].cells[10].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 || 
        thirdCol.indexOf(filter) > -1 || 
        sixthCol.indexOf(filter) > -1 ||
        seventhCol.indexOf(filter) > -1 ||
        ninthCol.indexOf(filter) > -1 ||
        tenthCol.indexOf(filter) > -1 ||
        eleventhCol.indexOf(filter) > -1
    ) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});
