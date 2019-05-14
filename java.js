
let friendName='Joey';
const instructorName='Tiffany';
const programName='NYOT';
const isCoding = 'true';
const numPizzaIAte=3;
const numPizzaFriendAte=1;



console.assert(friendName='Joe','Your friends isnt valid');


function Callkitten(kittenName)
{
    console.log('Come here, '+ kittenName + '!');
    
}
Callkitten('fluffy');

function addNumbers(a,b){
    console.log(a+b);
}
addNumbers(5,7);
addNumbers(12,9);



function age(currentYear,DOB)
{
    return currentYear-DOB;
}

console.log('They are either '+(age(2019,1999)-1)+" or "+(age(2019,1999)));


function compare(a,b)
{
    if (a>b)
    {
        return a;
    }
    else if (a<b){
        return b;
        
    }else
    {
        return 'error';
    }
}

console.log(compare(2,3));




function pluralize(name,num)
{
    if ((name=="sheep")||(name=="geese"))
    {
        return num+" "+name;
    }else 
    {
        name+="s";
        return num+" "+name;
    }
}

console.log(pluralize('bat',3));


function temperature(celsius)
{
   let c ='\u00B0'; 
    return celsius*9/5+32+c;
    
}

console.log(temperature(0));