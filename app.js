var button = document.getElementById('get-jokes');

// Ajax call function 
function getJokes(e) {
  e.preventDefault();

  const number = document.getElementById('number').value;
  console.log(number);

  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'http://api.icndb.com/jokes/random/' + number, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      var output = '';

      response.value.forEach(element => {
        output += `
          <li>${element.joke}</li>
      `;
      });

      

      document.getElementById('jokes').innerHTML = output;
      
    }
  }

  xhr.send();
}




button.addEventListener('click', getJokes);
