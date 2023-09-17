document.getElementById("roll_btn1").addEventListener('click',startgame);
document.getElementById("btn2").addEventListener('click',addName);
let sum1=0;
let sum2=0;
let player=1;
let chance1;
let chance2;
let player1_name="player1",player2_name="player2";

function addName(){
    player1_name=document.getElementById("tf1").value;   
    player2_name=document.getElementById("tf2").value;
    document.getElementById("player1").innerHTML=player1_name;
    document.getElementById("player2").innerHTML=player2_name;
    document.getElementById("sc").innerHTML=player1_name+" your chance";
    document.getElementById("sc2").innerHTML=" ";

}


function startgame(){
    chance1=getRandomNumber();
    chance2=getRandomNumber();
  
   let imgtag1=document.getElementById("dice_img1");
   let imgtag2=document.getElementById("dice_img2");
   imgtag1.src='img/dice'+chance1+'.png';
   imgtag2.src='img/dice'+chance2+'.png';
    
   myFunction();
   
}

function myFunction(){
    if(chance1==chance2){
        if(chance1==1 && chance2==1){
            if(player==1)
                 sum1=0;
            else
                 sum2=0;  
                 
            if(sum1>=100 || sum2>=100){
                gameOver();
            }else{
                document.getElementById((player==1)?"p1":"p2").innerHTML=(player==1)? sum1:sum2;
                document.getElementById("sc").innerHTML= (player==1)? player2_name+" your chance" : player1_name+" your chance";
                document.getElementById("sc2").innerHTML="";
                document.getElementById("roll_btn1").innerHTML="ROLL";
                player=2;
            }

           
        }else{
            if(player==1)
              sum1=sum1+ chance1+chance2;
            else
              sum2=sum2+ chance1+chance2; 

            if(sum1>=100 || sum2>=100){
                gameOver();
            }else{
                document.getElementById((player==1)?"p1":"p2").innerHTML= (player==1)? sum1:sum2;
                document.getElementById("sc").innerHTML=player1_name+" your chance";
                document.getElementById("sc2").innerHTML="";
                document.getElementById("roll_btn1").innerHTML="ROLL";
                player=1; 
            }
            
            
        }
    }else{
            if(player==1)
                sum1=sum1+ chance1+chance2;
            else
                sum2=sum2+ chance1+chance2; 

            if(sum1>=100 || sum2>=100){
                    gameOver();
            }else{
                document.getElementById((player==1)?"p1":"p2").innerHTML= (player==1)? sum1:sum2;
                document.getElementById("sc").innerHTML=(player==1)?player2_name+" your chance":player1_name+" your chance";
                document.getElementById("sc2").innerHTML="";
                document.getElementById("roll_btn1").innerHTML="ROLL";
                
                if(player==1)
                    player=2;
                else
                    player=1;
            }   

             
    }
}

function gameOver(){
    sum1=0;
    sum2=0;
    document.getElementById("p1").innerHTML= sum1;
    document.getElementById("p2").innerHTML= sum2;
    document.getElementById("sc").innerHTML="Congratulations!!!";
    document.getElementById("sc2").innerHTML=(player==1)? player1_name+" WON" : player2_name+" WON";
    document.getElementById("roll_btn1").innerHTML="START GAME";
    document.getElementById("player2").innerHTML="player2";
    document.getElementById("player1").innerHTML="player1";
    player=1;
    player1_name="player1";
    player2_name="player2";
}

function getRandomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}