const newGame = document.getElementById("new_game");

const roll_dice = document.getElementById('roll_dice');

const hold = document.getElementById('hold');

const points_temp1 = document.getElementById('points_temp1');

const points_temp2 = document.getElementById('points_temp2');

const points_glob1 = document.getElementById('points_glob1');

const points_glob2 = document.getElementById('points_glob2');

const gagnant = document.querySelector('.gagnant');

const container_buttons = document.querySelector('.container_buttons')


newGame.addEventListener('click',()=>{
    
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    points_glob1.textContent='0';
    points_glob2.textContent='0';
    points_temp1.textContent='0';
    points_temp2.textContent='0';
    gagnant.textContent=('');
    container_buttons.style.display = ('block');
    document.querySelector('.dice_1').setAttribute('src', "img/images/dice1.jpg");
    document.querySelector('.container_player1').style.border = ('solid 4px rgb(117, 8, 190)')
    document.querySelector('.container_player2').style.border = ('')
    if (points_temp1.classList.contains('player2')==true) {
        points_temp1.classList.remove('player2')
    }
})

game()

function game (){

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    
    function changer (){
   
        hold.addEventListener('click',()=>{
    
            if (points_temp1.classList.contains('player2')==false){
                points_temp1.classList.add('player2')
                document.querySelector('.container_player2').style.border = ('solid 4px rgb(117, 8, 190)')
                document.querySelector('.container_player1').style.border = ('')
               
                c = c+a
                points_glob1.textContent=c

                if (c>=100){
                    gagnant.textContent=('GAGNANT  PLAYER  1')
                    container_buttons.style.display = ('none');
                    document.querySelector('.container_player2').style.border = ('')
                    document.querySelector('.container_player1').style.border = ('solid 4px red')
                   
                }
                save()
            }
    
            else    {
                points_temp1.classList.remove('player2')
                document.querySelector('.container_player1').style.border = ('solid 4px rgb(117, 8, 190)')
                document.querySelector('.container_player2').style.border = ('')
              
                d = d +b
                points_glob2.textContent=d
                    if(d>=100){
                        gagnant.textContent=('GAGNANT  PLAYER  2')
                        container_buttons.style.display = ('none');
                        document.querySelector('.container_player2').style.border = ('solid 4px red')
                        document.querySelector('.container_player1').style.border = ('')
                       
                    }
                save()
            }
        })
    }

    function save (){
       
        a = 0;
        b = 0;
        points_temp1.textContent=a
        points_temp2.textContent=b
    }

    changer()

    roll_dice.addEventListener('click', function(){
 
        //  console.log(points_temp1.classList.contains('player2'))
        if (points_temp1.classList.contains('player2')==false){
               
            var dice1 = Math.floor(Math.random() * 6 + 1);
            document.querySelector('.dice_1').setAttribute('src', `img/images/dice${dice1}.jpg`)
            //  console.log(dice1)
            
            if (dice1!==1){
                a=dice1+a
                points_temp1.textContent =a
            }

            else if (dice1==1) {
                document.querySelector('.container_player2').style.border = ('solid 4px rgb(117, 8, 190)')
                document.querySelector('.container_player1').style.border = ('')
                points_temp1.classList.add('player2')
               
                save() 
            }
        }

        else {
            var dice1 = Math.floor(Math.random() * 6 + 1);
            document.querySelector('.dice_1').setAttribute('src', `img/images/dice${dice1}.jpg`)
            //  console.log(dice1)
           
            if (dice1!==1){
                b=dice1+b
                points_temp2.textContent=b
            }
            else if (dice1==1) {
              
                points_temp1.classList.remove('player2')
                document.querySelector('.container_player1').style.border = ('solid 4px rgb(117, 8, 190)')
                document.querySelector('.container_player2').style.border = ('')
               
                save() 
            }
        }
    })
}
