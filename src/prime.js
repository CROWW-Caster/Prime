function Prime(n){
    if(n == 2 || n == 3 || n == 5 || n == 7 || n == 11 || n == 13 || n == 17 ||
        n === 19|| n === 23|| n === 29|| n === 31|| n === 37|| n === 41|| n === 43|| 
        n === 47|| n === 53|| n === 59|| n === 61|| n === 67|| n === 71|| n === 73|| 
        n === 79|| n === 83|| n === 89|| n === 97|| n === 101|| n === 103|| n === 107|| 
        n === 109|| n === 113|| n === 127|| n === 131|| n === 137|| n === 139|| n === 149|| 
        n === 151|| n === 157|| n === 163|| n === 167|| n === 173|| n === 179|| n === 181|| 
        n === 191|| n === 193|| n === 197|| n === 199){
        return true
    }
    else if(n < 2 || n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0 || n % 11 == 0 || n % 13 == 0 || 
        n % 17 === 0 || n % 19 === 0 || n % 23 === 0 || n % 29 === 0 || n % 31 === 0 || n % 37 === 0 ||
        n % 41 === 0 || n % 43 === 0 || n % 47 === 0 || n % 53 === 0 || n % 59 === 0 || n % 61 === 0 || 
        n % 67 === 0 || n % 71 === 0 || n % 73 === 0 || n % 79 === 0 || n % 83 === 0 || n % 89 === 0 || 
        n % 97 === 0 || n % 101 === 0 || n % 103 === 0 || n % 107 === 0 || n % 109 === 0 || n % 113 === 0 || 
        n % 127 === 0 || n % 131 === 0 || n % 137 === 0 || n % 139 === 0 || n % 149 === 0 || n % 151 === 0 || 
        n % 157 === 0 || n % 163 === 0 || n % 167 === 0 || n % 173 === 0 || n % 179 === 0 || n % 181 === 0 || 
        n % 191 === 0 || n % 193 === 0 || n % 197 === 0 || n % 199 === 0
    ){
        return false
    }
    else{
        return true
    }
}

document.getElementById("generate").onclick = function(){
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    
    function check(){
        var prime = [];
 
        for(let i = Number(from); i <= Number(to); i += 1){
            if(Prime(i)){
                prime.push(i);
            }
            else{
                continue
            }
        }
        var primeNumbers = prime.reduce((total, item) => {
            return total + " " + item
        })
        return primeNumbers
    }

    let prime = check()

    document.getElementById('prime').innerHTML = prime

}




