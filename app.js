var show = document.getElementById('home');
show.style.display='block';
var user =JSON.parse(localStorage.getItem('user'));


if(user[user.length -1].Firstname =="mona"){
document.getElementById("img-trener").src="mona.jpg"
document.getElementById("imgpro2").src="mona.jpg"
}
if(user[user.length -1].Firstname =="alaa"){
    document.getElementById("img-trener").src="trener.jpg"
    document.getElementById("imgpro2").src="trener.jpg"
    }
    document.getElementById("pro11").innerHTML=user[user.length -1].Firstname
    document.getElementById("pro22").innerHTML=user[user.length -1].LastName
    document.getElementById("pro33").innerHTML=user[user.length -1].Email
    document.getElementById("pro44").innerHTML=user[user.length -1].Password
 var arraystudant = JSON.parse(localStorage.getItem('arraystudant'));

    // var news=['ahmad',
    // 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
    // 'amro '];
    // var notes=[{name:'Ahmad',note:['note0','note1','note2']},
    //             {name:'Salwa',note:['SAlwa1','SAlwa2','SAlwa3']}
    //             ]

for (let i = 0; i < notes.length; i++) {
     if (notes[i].name === user[user.length -1].Firstname){
        for (let j = 0; j < notes[i].note.length; j++) {
           document.getElementById('notes').innerHTML +='<li>'+notes[i].note[j]+'</li>' 
            
        }
     }
    
}

// _____________________________________________________

// for (let a = 0; a <100; a++) {
//     document.getElementById('news').innerHTML ='<p>'+news[a]+'</p>' 
// }
// 
// let myVar = setInterval(bgChange ,1000);

// array to store strings

// img()
function newss(){
var poem = ["Hours will be shifted online next week",
    "Orange Academy congratulates Eng. Salama Yassin on his safe release from treatment last night in a hospital, due to exposure to air pivot due to the change in weather",
  ];
  var i = 1; // Start at 1 because 0 is already displayed
  
  var animInterval = window.setInterval(function() {
      document.querySelector("#text").textContent = poem[i];
      i = ++i % poem.length; // Add 1 until it reaches 5, then back to 0, 1, 2...
  }, 3000);
}
//   _______________________
// function img(){
//   var imggg = [
//     "salameh.jpeg",
//     // "1.jpg",
//     // "2.jpg",
//     // "3.jpg",
//   ];
//   var e = 0; // Start at 1 because 0 is already displayed
  
//   var animIntervalimg = window.setInterval(function() {
//       document.getElementById("imgnews").src =imggg[i];
//       e = ++e % imggg.length; // Add 1 until it reaches 5, then back to 0, 1, 2...
//   }, 1000);
//   }
pix = new Array();
pix[0] = "salameh.jpeg";
pix[1] = "aca.jpg";

 
var i = 0;
slideshow()
function slideshow(){
setInterval("change()", 3000);

}
 
 
function change(){
document.images.pic.src = pix[i];
i = i + 1;
if (i > (pix.length-1)) {i = 0} 
newss()
}
 
// ____________________________________
    var feedback=JSON.parse(localStorage.getItem('feedback'));;
// _____________________________________________________

function Show(id) {

    document.getElementById('home').style.display='none';
    document.getElementById('trainees').style.display='none';
    document.getElementById('feedback').style.display='none';
    document.getElementById('Profile').style.display='none';
    document.getElementById(id).style.display='block';
}


function TotalTask(){
x=document.getElementById('TOTAL').value;
// localStorage.setItem("TotalTask",JSON.stringify(x));
for(var i=0;i<arraystudant.length; i++){
    arraystudant[i].totalTask+=parseInt(x)
}
console.log(x);

table(arraystudant); 


}

// var TA=JSON.parse(localStorage.getItem("TotalTask"));
// var TA=1;

table(arraystudant);
function table(arraystudant) {


var html = "<table  border='2'>";
html += "<tr>";
html += "<th>"+"Id"+"</th>";
html += "<th>"+"Name"+"</th>";
html += "<th>"+"Solved Tasks"+"</th>";
html += "<th>"+"Total Task"+"</th>";
html += "<th>"+"The number of absences"+"</th>";
html += "<th>"+"Remove"+"</th>";
//  Absence recording
html += "</tr>";
for (var i = 0; i < arraystudant.length; i++) {
  html += "<tr>";
  html += "<td>" + arraystudant[i].id  + "</td>";
  html += "<td>" + arraystudant[i].Name + "</td>";
  html += "<td>" + arraystudant[i].Task +'<button id="btnnn" onclick="Taskrecording('+i+')">+</button>' +"</td>";
  html += "<td>" + arraystudant[i].totalTask +"</td>";
  html += "<td>" + arraystudant[i].absent +'<button id="btnnn" onclick="AbsenceRecording('+i+')">+</button>'+ "</td>";
  html += "<td>" + `<button id="btnnRemov" onclick="removeObjectWithId(arraystudant,${arraystudant[i].id})"><i id="removeicon" class="fa-sharp fa-solid fa-user-xmark"></i></button>` + "</td>";
  html += "</tr>";
}
html += "</table>";
document.getElementById("tableContainer").innerHTML = html;

}
// _________________________
function Taskrecording(x){
    arraystudant[x].Task+=1;
console.log(x);
table(arraystudant); 
}

function AbsenceRecording(y){


    arraystudant[y].absent+=1
    table(arraystudant);
}


// ________________________
function showAddStudent(){
    document.getElementById('AddTaskDiv').style.display='none';
    document.getElementById('addStudentDiv').style.display='block';
    document.getElementById('FeedbackDiv').style.display='none';
}
function showAddTask(){
    document.getElementById('AddTaskDiv').style.display='block';
    document.getElementById('addStudentDiv').style.display='none';
    document.getElementById('FeedbackDiv').style.display='none';
}
function showAddFeedback(){
    document.getElementById('AddTaskDiv').style.display='none';
    document.getElementById('addStudentDiv').style.display='none';
    document.getElementById('FeedbackDiv').style.display='block';
}


function addStudent(){
var ID=document.getElementById('studentID').value;
var TS=document.getElementById('studentTS').value;
var AB=document.getElementById('studentAB').value;


var name=document.getElementById('studentName').value;
var ob={'id':parseInt(ID),
        'Name':name,
        'Task':parseInt(TS),
        'absent':parseInt(AB),
        'totalTask':arraystudant[0].totalTask,
       };
console.log(ob);

arraystudant.push(ob);

document.getElementById('studentID').value='';
document.getElementById('studentName').value='';
document.getElementById('studentTS').value='';
document.getElementById('studentAB').value='';
document.getElementById('addStudentDiv').style.display='none';
table(arraystudant);



}












function removeObjectWithId(arraystudant, id) {
const objWithIdIndex = arraystudant.findIndex((obj) => obj.id === id);
arraystudant.splice(objWithIdIndex, 1);

table(arraystudant);
}


//  var objTrener=[
//     {name:'trener1',password:1212},{name:'trener2',password:1313}
//     ];

  
    





// _______________Feedback________________________

var html = `<select class="form-select" id="selFeedback">`;

for (var i = 0; i < arraystudant.length; i++) {
    html +=`<option value="${arraystudant[i].Name}">${arraystudant[i].Name}</option>`
}
html += "</select>";
document.getElementById("sel").innerHTML = html;



// ___
// var html = `<select id="trainerFeedback" >`;
// for (var i = 0; i < user.length; i++) {
//     html +=`<option value="${user[0].FirstName}">${user[i].FirstName}</option>`
// }
// html += "</select>";
// document.getElementById("selTrener").innerHTML += html;




function Feed(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
 var selFeedback =document.getElementById('selFeedback').value
    var trainerFeedback=user[user.length -1].Firstname
    var feedbackText=document.getElementById('feedbackText').value
        if(feedbackText==''){
            alert('Please fill empty Feilds!!');
        }
        else{

var ob={'trainer': trainerFeedback ,'Student':selFeedback, 'feedback':feedbackText,'Date':dateTime
       };

       feedback.push(ob);
console.log(feedback);
alert('Feedback Added succesfully ');
document.getElementById('selFeedback').value='';
// document.getElementById('trainerFeedback').value='';
document.getElementById('feedbackText').value='';
showFeedbackTable();
    }

}
// ______

function showFeedbackTable() {

    var html = "<table  border='2'>";
html += "<tr>";
html += "<th>"+"Student"+"</th>";
html += "<th>"+"trener"+"</th>";
html += "<th>"+"Feedack"+"</th>";
html += "<th>"+"Date"+"</th>";


html += "</tr>";
for (var i = 0; i < feedback.length; i++) {
  html += "<tr>";
  html += "<td>" + feedback[i].Student + "</td>";
  html += "<td>" + feedback[i].trainer + "</td>";
  html += "<td>" + feedback[i].feedback + "</td>";
  html += "<td>" + feedback[i].Date + "</td>";
  
 html += "</tr>";
}
html += "</table>";
document.getElementById("tableFeedback").innerHTML = html;
}
// ____
showFeedbackTable();
function Save() {

    localStorage.setItem("arraystudant",JSON.stringify(arraystudant));
    localStorage.setItem("feedback",JSON.stringify(feedback));
}
// arraystudant=JSON.parse(localStorage.getItem('arraystudant'));
// feedback=JSON.parse(localStorage.getItem('feedback'));
// ______________________________________________________________________________________________
function addNote() {
    var TExtNote= document.getElementById('writeNote');
user[user.length -1].note.push(TExtNote.value);
// alert('Note Added succesfully');
console.log(user);
var Notecontainer= document.getElementById('notes');
Notecontainer.innerHTML +='<p>'+ TExtNote.value + '</p>';
TExtNote.value='';
localStorage.setItem('user', JSON.stringify(user));
}  
reloadNotes();

function reloadNotes() {
    
    var Notecontainer= document.getElementById('notes');
    var x= user.length -1;
    var z=user[x].note;
    z.forEach(element => {
    Notecontainer.innerHTML +='<p>'+ element + '</p>';

  });

// for(i=0 ;i<user[x].note.length-1;i++){

//     Notecontainer.innerHTML +='<p>'+ user[0].note[i] + '</p>';
// }
}
function deleteNote() {
    if(document.getElementById('notes').value!==" "){
         user[user.length -1].note=[];
   

    
    console.log(user);
    // localStorage.removeItem("user");
    localStorage.setItem('user', JSON.stringify(user));
    // JSON.parse(localStorage.getItem('user'));;

   document.getElementById('notes').innerHTML="";}
 }
// ____________________________________________________________________________
function logout() {
    localStorage.clear();
    window.location.replace("index.html");

}
document.getElementById("NameTrener").innerHTML=user[user.length -1].Firstname 


function showpasss(){
    document.getElementById("pro44").style.display="block"
}