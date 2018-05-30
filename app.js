const http = new easyHTTP;

// Get posts from jasonplaceholder website API
http.get('https://jsonplaceholder.typicode.com/posts', function(posts) {
  if(posts) {
  console.log(posts);
  }
});

// Get single post from jasonplaceholder website API
http.get('https://jsonplaceholder.typicode.com/posts/1', function(post) {
  if(post) {
  console.log(post);
  }
});

// Create Data
const data = {
  title: 'Test post',
  body: 'This is a new test post'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(post) {
  if(post) {
    console.log(post);
    }
});

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(post) {
  if(post) {
    console.log(post);
    }
});

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(response) {
  if(response) {
  console.log(response);
  }
});