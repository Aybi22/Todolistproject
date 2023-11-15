const input=document.getElementById('txt');
const btn=document.querySelector('.btn');


btn.addEventListener('click', showTask);
function showTask(){
  const task=document.querySelector('.task-container');
  
  const newLi=document.createElement('li');
  if(input.value){
   const ul=document.getElementById('task-container');
    
    const li=document.createElement('li');
    ul.appendChild(li);
    li.className="list"
    li.innerHTML=input.value+`
    <div class="text-block">
    <p class="text">Task added  </p>
    <span class="fa-solid fa-check check"></span>
    <div class="icon">
    <span class="close">&times;</span>
    <span class="fa-solid fa-trash-can trash">
    </div>
    </div>`;
  
  }


const li=document.getElementsByClassName('list');
for(let i=0; i<li.length; i++){
li[i].addEventListener('click',deleteTask);

function deleteTask(){
    
     const current=document.getElementsByTagName('li');
  for(let i=0;  i<current.length;  i++){
    current[i].className="block";
    
   if(current[i].className==="block"){
     this.style.display="none";
   }else{
     this.style.display="block";
   }
  }
 
  
  
  
  
     }

     }
}




