function passwordGen(max){
    if (max == undefined || max== ""){
        max = 7
    }
    let allSym = []; //index 66 is max || so total 67 values
    let password = "";
    const num = genArray(0, 10); //10
    const cChar = genString(true) //25
    const lChar = genString(false); //25
    const symbols = [".", "?" ,"!", "@"]; //3
    
    for (i = 0; i < 11; i++){
        allSym.push(num[i])
    }
    for (i = 0; i < 26; i++){
        allSym.push(cChar[i])
    }
    for (i = 0; i < 26; i++){
        allSym.push(lChar[i])
    }
    for (i = 0; i < 4; i++){
        allSym.push(symbols[i])
    }

    for(let i = 0; i < max; i++){
        password += allSym[GenNum(67)]
    }
    alert(password) //Optional: alerts the password
    return password //Returns password
};


function GenNum(max_){
    return Math.floor(Math.random() * max_) + 1
};

function genString(cap){
    var alpha = "abcdefghijklmnopqrstuvwxyz"
    if (cap){
        return alpha.toLocaleUpperCase();
    }else{
        return alpha
    }
};

function genArray(min, max){
    const arr = [];
    while(min <= max){
        arr.push(min++);
    }
    return arr;
};