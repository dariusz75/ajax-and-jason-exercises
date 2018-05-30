function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET request method
easyHTTP.prototype.get = function(url, callback) {
    let that = this;

    this.http.open('GET', url, true);
    
    this.http.onload = function() {
        if(that.http.status === 200) {
            callback(that.http.responseText);
        } 
    }
    
    this.http.send();
}

// POST request method
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let that = this;

    this.http.onload = function() {
        callback(that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// PUT request method
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let that = this;

    this.http.onload = function() {
        callback(that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// DELETE request method
easyHTTP.prototype.delete = function(url, callback) {
    let that = this;

    this.http.open('DELETE', url, true);
    
    this.http.onload = function() {
        if(that.http.status === 200) {
            callback('Post deleted');
        } 
    }
    
    this.http.send();
}