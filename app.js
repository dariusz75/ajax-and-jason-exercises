var button = document.getElementById('button');

// basic Ajax call function
function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`
      console.log(this.responseText);
  }
  }

  xhr.send();
}

button.addEventListener('click', loadData);
