const http = require('http');

const server = http.createServer((request, response) => {
    // 设置返回值类型
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('server start');
    return response.end(); // 结束
});

server.listen(3000); // 服务监听的端口号
