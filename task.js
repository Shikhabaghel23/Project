 // const phoneBook = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

// const Alka = {
//     name: "Alka",
//     phoneNumber: 7669772220,
//     email: "alkatiwari23@navgurukul.org"
//     // address: "Lucknow"
// }

// addContact("Alka", 7669772220, "alkatiwari23@navgurukul.org");

// const Anjali = {
//     name: "Anjali",
//     phoneNumber: 9457057292,
//     email: "anjalitiwari23@navgurukul.org",
//     address: "Lucknow"
// }

// addContact("Anjali", 9457057292, "anjalitiwari23@navgurukul.org", "Lucknow");

// const Gayatri = {
//     name: "Gayatri",
//     phoneNumber: 8979951377,
//     email: "gayatrikhodake@navgurukul.org",
//     address: "Amrawati"
// }

// addContact("Gayatri", 8979951377, "gayatrikhodake@navgurukul.org", "Amrawati");

// const Mahima = {
//     name: "Mahima",
//     phoneNumber: 9525374989,
//     email: "mahimamahima23@navgurukul.org",
//     address: "Bareli"
// }

// addContact("Mahima", 9525374989,  "mahimamahima23@navgurukul.org", "Bareli");

// const Preeti = {
//     name: "Preeti",
//     phoneNumber: 8279413524,
//     email: "preetidiwakar@navgurukul.org",
//     address: "Kanpur"
// }

// addContact("Preeti", 8279413524, "preetidiwakar@navgurukul.org", "Kanpur");

// const Priyanka = {
//     name: "Priyanka",
//     phoneNumber: 7696753241,
//     email: "priyankadiwakar@navgurukul.org",
//     address: "Kanpur"
// }

// addContact("Priyanka", 7696753241, "priyankadiwakar@navgurukul.org", "Kanpur");

// const Ragni = {
//     name: "Ragni",
//     phoneNumber: 9423574232,
//     email: "ragnivishvakarma@navgurukul.org",
//     address: "Gurugram"
// }

// addContact("Ragni", 9423574232, "ragnivishvakarma@navgurukul.org", "Gurugram");

// const Shivani = {
//     name: "Shivani",
//     phoneNumber: 7217411376,
//     email: "shivani@navgurukul.org",
//     address: "Bihar"
// }

// addContact("Shivani", 7217411376, "shivani@navgurukul.org", "Bihar");

// const Sneha = {
//     name: "Sneha",
//     phoneNumber: 7544137697,
//     email: "sneha@navgurukul.org",
//     address: "Tripura" 
// }

// addContact("Sneha", 7544137697, "sneha@navgurukul.org", "Tripura" );

// const Swati = {
//     name: "Swati",
//     phoneNumber: 9197492979,
//     email: "swati@navrurukul.org",
//     address: "Uttarakhand"
// }

// addContact("Swati", 9197492979, "swati@navrurukul.org", "Uttarakhand");







// let obj = {
//     name: "Puran",                      
//     location:"noida",                           
//     address: {
//         permanent: "Kanpur",
//         present: "Chennai"
//     },
//     sayHii(){
//         console.log("Hello")
//     }
// }

// const clone = structuredClone(obj);

// console.log(clone)


// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit.length);

// console.log();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function user(name,age,email,phone){
    return {
        name:name,
        age:age,
        email:email,
        phone:phone,
    }
};
let a = user("priyanka",19,"priyanka@123gmail.com",12345678910);
let b = user("preeti",20,"preeti@123gmail.com",12345678910);
let c = user("paras",21,"paras@123gmail.com",12345678910);
let d = user("Amit",22,"Amit@123gmail.com",12345678910);
let arr = [a,b,c,d];
function searchperson(name){
    let person = arr.find(element => element.name === name);
    return person;
};
console.log(search person :-,(searchperson('preeti')));
function update(phone, newPhone){
    let person = arr.find(element => element.phone === phone);
    if(person){
        person.phone = newPhone;
        return ${newPhone};
    } else {
        return ` ${newPhone} `;
    }
}
console.log(update,(update("12345678910", 6548900010)));
function deletePerson(name){
    let index = arr.findIndex(element => element.name === name);
    if(index !== -1){
       return arr.splice(index, 1);
    } else {
        return `not found `;
    }
}
console.log(delete,(deletePerson('Amit')));
console.log(arr);


// create one function and call it with name like 'alka'  or any name then we need to search
//  this name in our array's object's name is equal if it is then return the whole object means
//  person's information. if not found then return not found 