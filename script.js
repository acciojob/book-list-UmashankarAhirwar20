//your JS code here. If required.
let bookForm = document.getElementById("book-form");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let isbnInput = document.getElementById("isbn");
let bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = titleInput.value.trim();
  let author = authorInput.value.trim();
  let isbn = isbnInput.value.trim();

  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
    `;
  bookList.appendChild(tr);

  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const row = e.target.closest("tr");
    row.remove();
  }
});
