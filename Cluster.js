const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) { // 主进程
    console.log(`主进程 ${process.pid} 正在运行`);
    // 创建子进程
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => { // 监听子进程退出事件
        console.log(`子进程 ${worker.process.pid} 已退出`);
    });
} else { // 子进程
    console.log(`子进程 ${process.pid} 正在运行`);
    http.createServer((req, res) => { // 创建HTTP服务器
        res.writeHead(200);
        res.end('你好世界\n');
    }).listen(8000);
}
