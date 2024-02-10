const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>enter message</title></head>");
    res.write("<body><h3>Welcome Home<h3></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/aboutus") {
    res.write("<html>");
    res.write("<head><title>enter message</title></head>");
    res.write("<body><h3>Welcome to about us Page<h3></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>enter message</title></head>");
    res.write("<body><h3>Welcome  to Node js <h3></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
