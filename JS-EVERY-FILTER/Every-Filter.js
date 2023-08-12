
//! ---------------------------------F I L T E R---------------------------------  

const numbers = [33,5,7,3,44,22,56,35,93];

const result = numbers.filter(function(number){
    return number > 10; //! Dizimiz içindeki 10 dan büyük olanları listeyecel
})

console.log(result);

//? Alternatif başka bir yol arrow function ile
//----------------------------------------------

const numbers2 = [33,5,7,3,44,22,56,35,93];

const result2 = numbers2.filter(number => number > 10);

console.log(result2); // gibi

//------------------------------------------------

const names = ["hamza","burak","ece","mehmet","sude"];

console.log(names.filter(name => name.length <= 4)); //! İsim uzunluğu 4'e eşit ve büyük olanları filtre ve console yaz.

//------------------------------------------------

const users = [
    {
        name:"Hamza",
        age:27
    },
    {
        name:"Yusuf",
        age:22
    },
    {
        name:"Ali",
        age:30
    }
]

console.log(users.filter(user => user.age === 27)); //! Yaşı 27 ye eşit olanları getir.

//-----------------------------------------------------------
const search = (keyword,array) => array.filter(item => item.includes(keyword)); 

console.log(search("uf",names)); //! Uf değerini gönderdik.

console.log(names.filter(name => name.includes("bu"))); //! "uf" içerenleri filtrele ve console yazdır.



//! ---------------------------------EVERY---------------------------------  

const array1 = [2,3,45,6,78];

const result3 = array1.every(function(number){
    return number > 3;
})

console.log(result3);



//-----------------------------------------------
// Arrow function şeklinde de yapardık

const array2 = [2,3,45,6,78];

const check = (number) =>{
    return number > 3;
}

const result4 = array3.every(check);
console.log(result4);

//---------------------------------------
//En pratik şeklide böyle olurdu


const result5 = array2.every(number => number > 3);
console.log(result5);

//-------------------------------------------------

