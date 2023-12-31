import * as http from 'http';

const port = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    // Récupérer les headers de la requête
    const headers = req.headers;

    // Retourner les headers au format JSON
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(headers));
  } else {
    // Gérer les autres requêtes avec une réponse 404
    res.statusCode = 404;
    res.end();
  }
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});