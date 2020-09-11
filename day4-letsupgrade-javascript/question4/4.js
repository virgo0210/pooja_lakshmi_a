let arrObj=[
    {
        name:"rekha",age:20,country:"india",hobbies:["watching tv","playing basketball","coding"]
    }
    ,
    {
        name:"akhil",age:14,country:"USA",hobbies:["playing cricket","watching movies","studying"]
    },
{
    name:"anagha",age:31,country:"india",hobbies:["watching football","playing batmiton ","dancing"]
},
{
    name:"akash",age:42,country:"india",hobbies:["watching tv","listening music ","cooking"]
},
{
    name:"shilja",age:28,country:"UK",hobbies:["writing songs","practicing karate ","gardening"]
},
{
    name:"ravi",age:12,country:"africa",hobbies:["reading books","playing pubg ","coding"]
}
];
console.log("The objects are");
function displayall()
{
    for(let i=0;i<arrObj.length;i++){
        console.log(arrObj[i]);

    }
}
displayall();


console.log("object with age below 30 are");
function displaybelow30()
{
for(let i=0;i<arrObj.length;i++){
    if(arrObj[i].age<30)
    {
        console.log(arrObj[i]);
    }
}
}
displaybelow30();
console.log("object with country india are");
function countryInd(){
    for(let i=0;i<arrObj.length;i++)
    {
        if(arrObj[i].country.search("india")==0)
        {
            console.log(arrObj[i]);
        }
    }
}

countryInd();
