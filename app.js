const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
let output = document.getElementById('output');

button1.addEventListener('click', getText);
button2.addEventListener('click', getJson);
button3.addEventListener('click', getExternal);

// Get data from local text file
function getText() {
  fetch('test.txt')
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      output.innerHTML = data;
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
}


// Get data from local json file
function getJson() {
  fetch('posts.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let outputedData = '';

      data.forEach(post => {
        outputedData += `
          <p>Title: ${post.title} <br>Body: ${post.body} </p>
        `
      });
      output.innerHTML = outputedData;
    })
    .catch(function(error) {
      console.log(error);
    });  
}

// Get data from external json file
function getExternal() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let outputedData = '';

      data.forEach(post => {
        outputedData += `
          <p>Title: ${post.title} <br>Body: ${post.body} </p>
        `
      });
      output.innerHTML = outputedData;
    })
    .catch(function(error) {
      console.log(error);
    });  
}