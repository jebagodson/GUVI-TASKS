const table = document.getElementById('myTable');
table.setAttribute("class", "table table-bordered");
const tbody = table.getElementsByTagName('tbody')[0];
const pagination = document.getElementById('buttons');

const rowPerPage = 6;
let currentPage = 1;

function displayTableRows(data) {
  tbody.innerHTML = '';
  const start = (currentPage - 1) * rowPerPage;
  const end = start + rowPerPage;
  const paginatedData = data.slice(start, end);
  paginatedData.forEach(item => {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    idCell.textContent = item.id;
    row.appendChild(idCell);
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);
    const emailCell = document.createElement('td');
    emailCell.textContent = item.email;
    row.appendChild(emailCell);
    tbody.appendChild(row);
  });
}

function displayPaginationButtons(data) {

  pagination.innerHTML = '';
  const pageCount = Math.ceil(data.length / rowPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('button');
    button.classList.add('page-link');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      displayTableRows(data);
      displayPaginationButtons(data);
    });
    if (i === currentPage) {
      button.classList.add('active');
    }
    pagination.appendChild(button);
  }
}



fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
  .then(result => result.json())
  .then(data => {
    displayTableRows(data);
    displayPaginationButtons(data);
  });