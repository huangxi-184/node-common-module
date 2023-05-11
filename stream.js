const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream('./image.jpg'); // 创建可读流
const writeStream = fs.createWriteStream(path.join(__dirname, 'output.jpg')); // 创建可写流

readStream.on('data', function (chunk) { // 监听data事件
    writeStream.write(chunk); // 将读取的数据写入可写流中
});

readStream.on('end', function () { // 监听end事件
    console.log('图片读取完成');
    writeStream.end(); // 结束可写流
});

writeStream.on('finish', function () { // 监听finish事件
    console.log('图片保存完成');
});
