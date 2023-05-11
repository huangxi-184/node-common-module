const assert = require('assert');
// assert(条件, 一段话)
function sum(a, b) {
    assert(arguments.length === 2, '必须有两个参数');
    assert(typeof a === 'number', '第一个参数必须是数字');
}

sum(13, 'y')