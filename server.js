const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf8",
      });
      if (req.url === "/picles") return res.end("picles");
      if (req.url === "/pepinos") return res.end("pepinos");
      if (req.url === "/pessego") return res.end("pêssego");
      if (req.url === "/teste") return res.end("Teste Nodemon");
      if (req.url === "/") return res.end("Vazio");
      return res.end('Não identificado');
}).listen(3030, "localhost")