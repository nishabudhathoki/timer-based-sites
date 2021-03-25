const quizDB = [
    {
        question: "Q1:What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"ans4"
    },

    {
        question: "Q2:What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question: "Q3:What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hye Transfer Protocol",
        d:"Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question: "Q4:What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1"
    },
]
 //ALL requried Elements
 let start = document.querySelector('.start');
 let time= document.querySelector('#time');
 let main_div =document.querySelector('.main_div');
 const question =document.querySelector('.question');
 const option1  =document.querySelector('#option1');
 const option2  =document.querySelector('#option2');
 const option3 =document.querySelector('#option3');
 const option4  =document.querySelector('#option4');
 const submit =document.querySelector('#submit');
 const answers=document.querySelectorAll('.answer');
 const showScore=document.querySelector('#showScore');
 
 //what happened when we clicked 'start' Button
 start.addEventListener("click",()=>{
     start.style.display="none";
     main_div.style.display="block";
     interval=setInterval(countDown,1000);
     loadQuestion();

 });
// Variable for a Timer
let index=0;
let interval=0;
let timer=0; 
//To set a Timer
let countDown=()=>{
    if(timer==15){
        clearInterval(interval);
        submit.click();
    }
    else{
        timer++;
        time.innerText=timer;
    }

}
 //for loading a question
 let questionCounter = 0;
 let score=0;
 const loadQuestion = ()=>{
     const questionList =quizDB[questionCounter];
     question.innerHTML=questionList.question;
     option1.innerHTML=questionList.a;
     option2.innerHTML=questionList.b;
     option3.innerHTML=questionList.c;
     option4.innerHTML=questionList.d;
// timer start
   timer=0; 
 }
 loadQuestion();
 
 // For Event 
 const getCheckAnswer=()=>{
     let answer;
     answers.forEach((curAnsElem)=>{
         if(curAnsElem.checked){
             answer = curAnsElem.id;
         }
         
     });
       return answer;
 };
 const deselectAll =()=>{
     answers.forEach((curAnsElem)=>curAnsElem.checked=false);
 }
 submit.addEventListener('click',()=>{
     const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer);
     //To check the answers
     if(checkedAnswer===quizDB[questionCounter].ans){
         score++;
     }else{
         score += 0;
         clearInterval(interval);
        }
        //stop counter
        clearInterval(interval);
        //Disable All Options When User Select the Options
       for(i=0;i<5;i++){
        //option for quiz
          clearInterval(interval);
          interval=setInterval(countDown,1000); 
        } 
     questionCounter++;
     deselectAll();
     if(questionCounter < quizDB.length){
         loadQuestion();

         //to restart the counter
         
         Interval=setInterval(countDown,1000);
         clearInterval(interval);

    
     }else{
         clearInterval(interval);
         showScore.innerHTML =`
         <h3> You scored ${score}/${quizDB.length} </h3>
         <button class ="btn" onclick="location.reload()"> Play Again.</button>`;
        
         showScore.classList.remove('scoreArea');

     };
 });
 //what we click the submit at last buttom
 submit.addEventListener("click",()=>{
     if(index!==quizDB.length-1){
         clearInterval("interval");
         
     }
 }
 )


