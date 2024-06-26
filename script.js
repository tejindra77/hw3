document.getElementById("multiplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    generateMultiplicationTable();
});

function generateMultiplicationTable() {
    const startHorizontal = parseInt(document.getElementById("startHorizontal").value);
    const endHorizontal = parseInt(document.getElementById("endHorizontal").value);
    const startVertical = parseInt(document.getElementById("startVertical").value);
    const endVertical = parseInt(document.getElementById("endVertical").value);

    const errorMessages = document.getElementById("errorMessages");
    errorMessages.textContent = ""; // Clear previous error messages

    if (isNaN(startHorizontal) || isNaN(endHorizontal) || isNaN(startVertical) || isNaN(endVertical)) {
        errorMessages.textContent = "Please enter valid numbers for all fields.";
        return;
    }

    if (startHorizontal < -50 || startHorizontal > 50 || endHorizontal < -50 || endHorizontal > 50 ||
        startVertical < -50 || startVertical > 50 || endVertical < -50 || endVertical > 50) {
        errorMessages.textContent = "Please enter numbers between -50 and 50 for all fields.";
        return;
    }

    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous table if any

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    // Generate table rows and cells
    for (let i = startVertical - 1; i <= endVertical; i++) {
        const row = document.createElement("tr");
        for (let j = startHorizontal - 1; j <= endHorizontal; j++) {
            const cell = document.createElement("td");
            if (i === startVertical - 1 && j === startHorizontal - 1) {
                cell.textContent = ""; // Empty cell for the top-left corner
            } else if (i === startVertical - 1) {
                cell.textContent = j;
            } else if (j === startHorizontal - 1) {
                cell.textContent = i;
            } else {
                cell.textContent = i * j;
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}
