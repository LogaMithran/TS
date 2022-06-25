function addnum(num1: number, num2: number, callback: (result: number)=> void): void{
    let result: number;
    result = num1+num2;
    callback(result)
}


addnum(2,3,(result) => {
    console.log(result)
})