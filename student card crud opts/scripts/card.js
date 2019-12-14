
    localStorage.setItem('num',3); // for login page
    var localval=localStorage.getItem('key');
    function cardfun(){
      if(localval == null){
      window.location.href='loginpage.html';
   } }
    cardfun();

  var btn = document.getElementById("btn");
  btn.onclick = function() {
  if( content.style.display =='block'){
  content.style.display='none';
    }
    else{
  content.style.display='block';
    }
  }

  function myfunction1(myvalue)
  {
    texttosave = document.getElementById(myvalue).value ; 
    var search=students.filter(item => item.id === myvalue).map(item => item.name=texttosave); 
    localStorage.setItem('students' ,JSON.stringify(students));               
    var localval=JSON.parse(localStorage.getItem('students'))   
    var datad = localval.filter(item => item.id === myvalue).map(item => item.name);          
    var y= document.getElementById("recalledtext"+myvalue).innerHTML= DOMMatrixReadOnly;                             
  }
  
  function myFunction(xyz) {
    var show = document.getElementById('mydiv'+xyz);
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
  } 

  var myhtml ="";

  var students = [
    {id: 1, name:'Rahul' , address:'ashgdbkjnkl'},
    {id: 2, name:'Manoj' , address:'ashgdbkjnkl'},
    {id: 3, name:'Aarti' , address:'ashgdbkjnkl'},
    {id: 4, name:'Rajan' , address:'ashgdbkjnkl'},
    {id: 5, name:'Aditya' , address:'ashgdbkjnkl'},
    {id: 6, name:'Ravi' , address:'ashgdbkjnkl'},
    {id: 7, name:'Ninja' , address:'ashgdbkjnkl'},
    {id: 8, name:'Guts' , address:'ashgdbkjnkl'},
    {id: 9, name:'Griffith' , address:'ashgdbkjnkl'},
    {id: 10, name:'Zodd' , address:'ashgdbkjnkl'},
    {id: 12, name:'Rohda' , address:'ashgdbkjnkl'},
    {id: 13, name:'lycan' , address:'ashgdbkjnkl'},
    ];

    var newdata='';
    var countt=0;
    var savebutton=document.getElementById('savebtn');
    savebutton.onclick= function(){
      countt++;

    var id1= +document.getElementById('idd').value;
    var name1=document.getElementById('namee').value;
    var address1=document.getElementById('addresss').value;
    var newdata={id:id1, name:name1 ,address:address1 };
    students.push(JSON.parse(JSON.stringify(newdata)));
                                  
  var j=12 + countt;
  for (var  i = 13; i < students.length; i++) {       
  if(i == j) 
   {                  
      myhtml+= 
    `<div class="column" id="col`+students[i].id+`" >
    <div class="card" >
    <h3>Card `+students[i].id+`</h3>
    <img src="images/1.png" width='100%'/>
    <p id="recalledtext`+students[i].id+`">`+students[i].name+`</p>
    <button onclick="myFunction(`+students[i].id+`)">Edit Name</button>
    <button onclick="myFunctionrem(`+students[i].id+`)">delete</button>
    <div  id="mydiv`+students[i].id+`" >  
    <input type="text" id="`+students[i].id+`" placeholder="change name"/> 
    <button onclick='myfunction1(`+students[i].id+`)'>Save</button> 
    </div>
    <div>
    <p>Id : `+students[i].id+`</p>
    <a class="btn" href="#" type="button">see profile</a>
    </div>
    </div> 
    </div>`  
      }
  }
          

  document.getElementById("container").innerHTML=myhtml;   
  for (var i = 0; i < students.length; i++) 
    {
      document.getElementById("mydiv"+students[i].id).style.display = "none";
      }
        localStorage.setItem('students' ,JSON.stringify(students));
    }
                         
    function myFunctionrem(item){
      var sp='';
      sp= students.findIndex(item=>item.id == item);
      students.splice( sp,1);
      var elem = document.getElementById("col"+item);
      elem.remove();    
      localStorage.setItem('students' ,JSON.stringify(students)) ;
    }     
  var promise1 = new Promise(function(resolve, reject) {
    for (var i = 0; i < students.length; i++) {
      myhtml+= 
      `<div class="column" id="col`+students[i].id+`" >
      <div class="card" >
      <h3>Card `+students[i].id+`</h3>
      <img src="images/1.png" width='100%'/>
      <p id="recalledtext`+students[i].id+`">`+students[i].name+`</p>
      <button onclick="myFunction(`+students[i].id+`)">Edit Name</button>
      <button onclick="myFunctionrem(`+students[i].id+`)">delete</button>
      <div  id="mydiv`+students[i].id+`" >  
      <input type="text" id="`+students[i].id+`" placeholder="change name"/> 
      <button onclick='myfunction1(`+students[i].id+`)'>Save</button> 
      </div>
      <div>
      <p>Id : `+students[i].id+`</p>
      <a class="btn" href="#" type="button">see profile</a>
      </div>
      </div> 
      </div>`
    ;
  if(i==students.length-1){
    resolve(myhtml)
  }
  }

});

promise1.then(function(value) {
  document.getElementById("container").innerHTML=value;
  for (var i = 0; i < students.length; i++) 
  {document.getElementById("mydiv"+students[i].id).style.display = "none";
  }

});