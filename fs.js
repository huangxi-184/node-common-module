const fs = require('fs')
const path = require('path');
// access: 判断文件或目录是否具有操作权限

// fs.access(__filename, (err) => {
//     console.log(err); // 存在错误就是没有权限
// })

// const fileDir = fs.stat(__dirname, (err,stats) => {
//     console.log(err); // 存在错误就是没有权限
//     console.log(stats)
// })

// fs.mkdir(path.join(__dirname, 'test/test/test'), { recursive: true, }, (err) => {
//     console.log(err);
// })

// fs.rmdir(path.join(__dirname, 'test'), {
//     recursive: true, // 递归删除
// }, (err) => {
//     console.log(err);
// })

// fs.readdir(__dirname, (err, files) => {
//     console.log(files);
// })

// fs.unlink("./test.vue", (err) => {
//     console.log(err);
// })

// 文件读写操作

// fs.readFile(path.resolve('./test.txt'), 'utf-8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// fs.writeFile(path.resolve('./test.txt'), 'hello', {
//     mode: 777, // 操作位
//     flag: 'w+',
//     encoding: 'utf-8'
// }, (err) => {
//     console.log(err);
// })

// fs.appendFile(path.resolve('./test.txt'), 'hello', {}, (err) => {
//     console.log(err);
// })

// fs.copyFile('./test.txt', './test1.txt', (err) => {
//     console.log(err);
// })

// fs.watchFile('./test1.txt', {
//     interval: 1000 // 20ms监控一次
// }, (curr, prev) => {
//     if (curr.mtime !== prev.mtime) {
//         console.log('文件被修改了!')
//     }
// })

fs.open(path.resolve('./test1.txt'), 'r', (err, fd) => {
    console.log(err);
    console.log(fd);
    
    fs.close(fd, (err) => {
        if (err) {
            console.log(err)
        }
    });
})