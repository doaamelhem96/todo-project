var userName=prompt("Enter Your Name");
var Gender=prompt("Enter Your Gender" + "\n"+"please type: Female, female "+"\t"+"or\t "+ " Male, male");
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
var fvistiTime =prompt ("Is this the first time for you in todo-site? "+ "\n"+"fill your answer by using " +" yes / No");
var passionAnswer =prompt("Do you have any passion to browse this site?"+ "\n"+"fill your answer by using " +" yes / No");
var knowAnswer =prompt("Did you Know this site by your friend?"+  "\n" +  "fill your answer by using " +" yes / No");
//let collectAnswer=[];
let userAnswers=[];

/*for (let i=0; i<= collectAnswer.length-1;i++)
{
  console.log("Answer"+[i+1]+"\t"+"was:"+"\t" +collectAnswer[i]);
  allAnswers.push(collectAnswer[i]);
  
}*/



 function checkTimeanswer  (fvistiTime)
  {
    
if (fvistiTime== "")
{
  userAnswers.push("Invalid");
  
}
else {
  userAnswers.push(fvistiTime);
}

}
checkTimeanswer(fvistiTime);

function checkPassionanswer  (passionAnswer)
  {
 if(passionAnswer=="")
{
  userAnswers.push("Invalid");


}
else {
  userAnswers.push(passionAnswer);
}
}

checkPassionanswer(passionAnswer);
function checkKnowanswer3 (knowAnswer)
  {

 if(knowAnswer=="")
{
  userAnswers.push("Invalid");


}
else {
  userAnswers.push(knowAnswer);
}
}
checkKnowanswer3(knowAnswer);

function getUseranswers(userAnswers)
{
for (let i =0;i<= userAnswers.length-1 ;i++)
{
 console.log(userAnswers[i]);

}
}
getUseranswers(userAnswers);

 



