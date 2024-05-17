function capitalize(str) {
    let s='';
    for(let i = 0; i < str.length; i++){
        if(i == 0 || str[i - 1] == ' '){
            s=s+str[i].toUpperCase();
        }
        else{
            s=s+str[i];
        }
    }
    return s;
}
let st = 'hellow i am a devaloper';
let res = capitalize(st);
console.log(res);