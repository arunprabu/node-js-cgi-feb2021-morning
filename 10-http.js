const http = require('http'); // importing http module 

http.createServer( (req, res) => {
  console.log('Req received');
  // req obj will have URL, headers, req method, req body, req params /URL Params, Query Params

  console.log(req.url);
  
  res.write('Welcome to Home Page!');
  res.end();

}).listen(3000, () => {
  console.log('Server is listening on Port 3000. You can access your app in http://localhost:3000');
});