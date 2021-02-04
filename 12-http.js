const http = require('http'); // importing http module 

http.createServer((req, res) => {
  console.log('Req received');
  // req obj will have URL, headers, req method, req body, req params /URL Params, Query Params

  console.log(req.url);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  switch(req.url){
    case '/':
      res.write(`<html>
          <head>
            <title>Welcome to Home Page!</title>
          </head>
          <body>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
            <h1>Welcome to Home Page!<h1>
          </body>
        </html>
      `);
      break;
    
    case '/about':
      res.write(`<html>
          <head>
            <title>Welcome to About Page!</title>
          </head>
          <body>
            <h1>Welcome to About Page!<h1>
          </body>
        </html>
      `);
      break;
    
    case '/contact':
      if(req.method == 'GET'){
        res.write(`<html>
          <head>
            <title>Welcome to Contact Page!</title>
          </head>
          <body>
            <h1>Welcome to Contact Page!<h1>
          </body>
        </html>
      `);
      }
      
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(`<html>
          <head>
            <title>404 - Page Not Page!</title>
          </head>
          <body>
            <h1>404 - Page Not Found!<h1>
          </body>
        </html>
      `);
      break;
  }

  res.end();

}).listen(3000, () => {
  console.log('Server is listening on Port 3000. You can access your app in http://localhost:3000');
});