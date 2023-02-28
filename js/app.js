var userName=prompt("Enter Your Name");
var Gender=prompt("Enter Your Gender:please typing Female/female or Male/male");
var Age=prompt("Enter Your Age");
if (Age<=0){
alert("your Age is less than or equal Zero!");
}
var skip=confirm("Are you want to skip the welcoming message?");
if (skip ==0)
{
  if(Gender=="Femal" || Gender =="female")
{
var Message1="MS";
alert("Welcome "+Message1+" " +userName); 
}
else if(Gender=="Male" || Gender =="male")
{
var Message1="Mr";
alert("Welcome "+Message1+" " +userName); 
}
else { 
    alert("Welcome "+" " +userName); 
}}

 
  
 



