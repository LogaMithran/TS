function addnum(num1, num2, callback) {
    var result;
    result = num1 + num2;
    callback(result);
}
function print(num) {
    console.log(num);
}
addnum(2, 3, function () { });
