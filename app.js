const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let output = document.getElementById('output');

button1.addEventListener('click', getUserNames);
button2.addEventListener('click', getUserDetails);

const http = new EasyHTTP;

function insertUserNames(users) {
  let listedUsers = '';
  users.forEach(user => {
    listedUsers += `<li>${user.name}</li>`
      console.log(user.name);
  })
  output.innerHTML = listedUsers;
}


function insertUserDetails(users) {
  let listedUsers = '';
  users.forEach(user => {
    listedUsers += `
    <ul>
      <li>ID: ${user.id}</li>
      <li>Name: ${user.name}</li>
      <li>Username: ${user.username}</li>
    </ul>`
      console.log(user.name);
  })
  output.innerHTML = listedUsers;
}


function getUserNames() {
  // Get Users
  http.get('https://jsonplaceholder.typicode.com/users')
  .then(function(data) {
    insertUserNames(data);
  })
  .catch(error => console.log(error));
}


function getUserDetails() {
  // Get Users
  http.get('https://jsonplaceholder.typicode.com/users')
  .then(function(data) {
    insertUserDetails(data);
  })
  .catch(error => console.log(error));
}

