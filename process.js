// process是一个全局的变量，所以使用的时候是不需要执行require操作，可以直接使用。

// console.log(process)
// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// let code = 0
// console.log(process.cwd())

// process.env.Node_ENV = 'development'


// process.exit()

// console.log(process.env.Node_ENV, process.pid, process.ppid, process.uptime())

// process.on('exit', (code) => { // 退出时
//     console.log(code); // 0
// })

// process.on('beforeExit', (code) => { // 退出之前
//     console.log(code); // 0
//     code++
// })
// let count = 0

// process.stdin.on('data', function (data) {
//     count++
//     let inputStr = data;
//     console.log('你输入了：' + inputStr);
//     if (count === 2) {
//         process.stdin.pause();
//     }
// });

// console.log('输入结束!')


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入一个字符串：', (answer) => {
  console.log(`你输入了：${answer}`);
  rl.close();
});

console.log('yyds,会阻塞程序执行么?')