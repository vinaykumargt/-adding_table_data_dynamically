
const table = document.getElementById("my-table");
let bookId = 1;

function addBook(event) {
  event.preventDefault();

  const bookName = document.getElementById("book-name").value;
  const issuedTo = document.getElementById("issued-to").value;

  const row = table.insertRow();
  row.insertCell().textContent = bookId++;
  row.insertCell().textContent = bookName;
  row.insertCell().textContent = issuedTo;
  row.insertCell().textContent = new Date();
  const returnStatusCell = row.insertCell();
  const returnStatus = document.createElement("span");
  returnStatus.textContent = "Not Returned";
  returnStatusCell.appendChild(returnStatus);
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    const newStatus = prompt("Enter the new return status:");
    returnStatus.textContent = newStatus;
  });
  returnStatusCell.appendChild(editButton);

  document.getElementById("book-name").value = "";
  document.getElementById("issued-to").value = "";
}