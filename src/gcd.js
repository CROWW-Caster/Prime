function GCD(num1, num2){
    function factors(num){
        let factors = [1];
        function check(i, num){
            return num % i
        }
    
        for(let i = Math.floor(num); i > 1 ; --i){
            let checkings = check(i, num);
            if(checkings == 0){
                factors.unshift(i)
            }
            else{
                continue
            }
        }
        return factors
    }
    let factors1 = factors(num1);
    let factors2 = factors(num2);
    let commonFactors = [1];

    for(let factor1 of factors1){
        for(let factor2 of factors2){
            if(factor1 == factor2){
                commonFactors.push(factor2)
            }
        }
    }

    let gcd = new Set(commonFactors);
    return Math.max(...gcd)
}

document.getElementById("calculate").onclick = function(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let answer = GCD(num1, num2);;

    console.log(Math.max[0, 346]);

    if(document.getElementById("num1").value === '' || document.getElementById("num2").value === ''){
        document.getElementById("answer").innerHTML = `UNDEFINED!!!`;
    }
    else if(num1 === 0 || num2 === 0){
        answer = Math.max(num1, num2)
    }
    else if(typeof num1 === 'number' && typeof num2 === 'number'){
        document.getElementById("answer").innerHTML = `The GCD is ${answer}`;
    }
    else{
        document.getElementById("answer").innerHTML = `UNDEFINED!!!`;
    }

}
