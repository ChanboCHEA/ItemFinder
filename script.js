// Load JSON data
async function loadData() {
  const response = await fetch("data.json");
  return response.json();
}

// Search function
async function searchBarcode() {
  const input = document.getElementById("barcodeInput").value.trim();
  const resultDiv = document.getElementById("result");

  // Clear previous results
  resultDiv.textContent = "";

  // Load data and search for the barcode
  const data = await loadData();
  const product = data.find((item) => item.BARCODE === input);

  // Display result
  /*  if (product) {
    resultDiv.textContent = `Description: ${product.DESCRIPTION}`;
  } else {
    resultDiv.textContent = "No product found with this barcode.";
  } */

  if (product) {
    resultDiv.innerHTML = `
          <div>
            <p><strong>Barcode:</strong> ${product.BARCODE}</p>
            <p><strong>Item Code:</strong> ${product.ITEMCODE}</p>
            <p><strong>Description:</strong> ${product.DESCRIPTION}</p>
            <p><strong>Product Shelf Life:</strong> ${product["PRODUCT SHELFLIFE"]} year(s)</p>
          </div>
        `;
  } else {
    resultDiv.textContent = "No product found with this barcode.";
  }
}

// Event listener for the search button
document
  .getElementById("searchButton")
  .addEventListener("click", searchBarcode);
