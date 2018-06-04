const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
let output = document.getElementById('output');

var getButton = document.getElementById('get');
var postButton = document.getElementById('post');
var putButton = document.getElementById('put');
var deleteButton = document.getElementById('delete');

getButton.addEventListener('click', getPost);
postButton.addEventListener('click', createPost);
putButton.addEventListener('click', updatePost);
deleteButton.addEventListener('click', deletePost);


// Get post from jasonplaceholder website API
function getPost() {
  http.get('https://jsonplaceholder.typicode.com/posts/1', function(response) {
    console.clear();
    console.log(response);
  });
}



// Create Post
function createPost() {
  http.post('https://jsonplaceholder.typicode.com/posts/', data, function(response) {
    console.clear();
    console.log(response);
  });
}

// Update Post
function updatePost() {
  http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(response) {
    console.clear();
    console.log(response);
  });
}

// Delete post
function deletePost() {
  http.delete('https://jsonplaceholder.typicode.com/posts/1', data, function(response) {
    console.clear();
    console.log(response);
  });
}