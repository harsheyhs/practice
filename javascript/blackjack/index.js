let fcard=0;
let scard=0;
let sum=0;
let cards=[];
function game(){}

function startgame(){
    fcard=(Math.floor(Math.random()*13))+1;
    scard=(Math.floor(Math.random()*13))+1;
    cards=[fcard,scard];
    game();
}

 function game(){
  document.getElementById('cards').textContent='';
  sum=0;
    for(let i=0;i<cards.length;i++)
    {document.getElementById('cards').textContent+=cards[i]+' ';
    sum+=cards[i];
    }
  document.getElementById('sum').textContent=sum;
  if(sum>21)
    {
      document.getElementById('msg').textContent='Sorry! You are out of the game.';
      cards=[];
      
      
    } else if(sum<21){
      document.getElementById('msg').textContent="Would you like a new card?";
    }
  else{
    document.getElementById('msg').textContent='Woohoo! You won!';
    cards=[];
    
    
  }
    
}

function newcard(){
    let ncard=(Math.floor(Math.random()*13))+1;
    cards.push(ncard);
  game();
}