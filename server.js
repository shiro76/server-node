const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Voila la réponse du server !')
});

server.listen(process.env.PORT || 3000);
console.log('Server de Shiro !');