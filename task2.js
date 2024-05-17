// function user(name, number, email, location){
//    return{
//     name: name,
//     number:number,
//     email: email,
//     location: location,
//    } 
// }

// let person1 = user("Alka", 7669772220, "alkatiwari23@navgurukul.org", "Pune");
// let person2 = user("Anjali", 9457057292, "anjalitiwari23@navgurukul.org", "Lucknow");
// let person3 = user("Gayatri", 8979951377, "gayatrikhodake@navgurukul.org", "Amrawati");
// let person4 = user("Mahima", 9525374989,  "mahimamahima23@navgurukul.org", "Bareli");
// let person5 = user("Preeti", 8279413524, "preetidiwakar@navgurukul.org", "Kanpur");
// let person6 = user("Priyanka", 7696753241, "priyankadiwakar@navgurukul.org", "Kanpur");
// let person7 = user("Ragni", 9423574232, "ragnivishvakarma@navgurukul.org", "Gurugram");
// let person8 = user("Shivani", 7217411376, "shivani@navgurukul.org", "Bihar");
// let person9 = user("Sneha", 7544137697, "sneha@navgurukul.org", "Tripura" );
// let person10 = user("Swati", 9197492979, "swati@navrurukul.org", "Uttarakhand");
// const array=[];
// array.push({...person1});
// array.push({...person2});
// array.push({...person3});
// array.push({...person4});
// array.push({...person5});
// array.push({...person6});
// array.push({...person7});
// array.push({...person8});
// array.push({...person9});
// array.push({...person10});


// console.log(array);

// function searchperson(name){
//     let person = array.find(element => element.name === name);
//     return person;
// }

// console.log('search',(searchperson('Alka')));

// function update(phone, newPhone){
//     let person = arr.find(element => element.phone === phone);
//     if(person){
//         person.phone = newPhone;
//         return ${newPhone};
//     } else {
//         return ` ${newPhone} `;
//     }
// }

// console.log(delete,(deletePerson('Alka')));
// console.log(arr);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let classofJavascript = [{}, {}];

// function addName(profile, profile1){
//     // console.log(profile);
//     classofJavascript.push(profile);
//     classofJavascript.push(profile1);
// }

// let profile = {
//     name: "Alka",
//     contactNo: "9865789547",
// }

// let profile1




// addName("Alka", "9865789547");
// addName("Anjali", "789735267");



















// let phonebook = [{}];

// function addContact(name, contact, email){
//     let contact = {
//         personName: name,
//         personContact: contact,
//         personEmail: email
//     }
//     phonebook.push(contact);
// }


// addContact("Alka", "7894235878","alka23@navgurukul.org");
// console.log(phoneBook);











//********************************************************************************************************** */

let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let add = document.getElementById("add");

let phoneBook = [];

// console.log(phoneBook, "phoneBook");

add.addEventListener("click", ()=>{
    // console.log("button is clicked");
    // console.log(name.value);
    let contact = {
        personName: name.value,
        personPhone: phone.value,
        personEmail: email.value
    }
    // console.log(contact);
    phoneBook.push(contact);
    console.log(phoneBook, "added phoneBook");

    })



    // function addContact(name, phone, email){
            // let contact = {
            //     personName: name,
            //     personPhone: phone,
            //     personEmail: email
            // }
            // phoneBook.push(contact);
        // }

// })

// console.log(name);







// let phoneBook = [{}, {}, {}];

// function addContact(name, phone, email){
//     let contact = {
//         personName: name,
//         personPhone: phone,
//         personEmail: email
//     }
//     phoneBook.push(contact);
// }


// addContact("Vanashri", "7485356987", "vana@gmail.com");
// addContact("nandani", "7485356987", "nand@gmail.com");
// addContact("punam", "7485356987", "punam@gmail.com");
// console.log(phoneBook);












//________________________________________________________________________________________________________________//

let arr = ["tea", "sugar", "water"]

arr.forEach((item, index)=>[
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
    li.appendChild(li);
])