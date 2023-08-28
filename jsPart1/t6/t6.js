'use strict';

const userInt = +prompt('Enter a positive integer: ');
document.getElementById(
  'userText'
).innerText = `Entered positive integer: ${userInt}`;

const table = document.createElement('table');

for (let i = 1; i <= userInt; i++) {
  const row = document.createElement('tr');
  for (let ii = 1; ii <= userInt; ii++) {
    const column = document.createElement('td');
    column.innerHTML = i * ii;
    row.appendChild(column);
  }
  table.appendChild(row);
}

document.getElementById('tableParent').appendChild(table);
