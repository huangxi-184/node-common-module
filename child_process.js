// 调用C语言,这类编译语言的代码

// const { spawn } = require('child_process');

// const child = spawn('./test', ['huangxi', 'ceshiC']);

// child.stdout.on('data', (data) => {
//     console.log(`输出：${data}`);
// });

// child.stderr.on('data', (data) => {
//     console.error(`错误：${data}`);
// });

// child.on('close', (code) => {
//     console.log(`子进程退出，退出码 ${code}`);
// });


const { spawn } = require('child_process');

const child = spawn('cmd.exe', ['/c', 'python.exe', './test.py', 'arg1', 'arg2']);

child.stdout.on('data', (data) => {
    console.log(`输出：${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`错误：${data}`);
});

child.on('close', (code) => {
    console.log(`子进程退出，退出码 ${code}`);
});