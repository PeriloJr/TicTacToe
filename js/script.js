let x = document.querySelector(".x");
let o = document.querySelector(".o");

let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");

let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

let secondPlayer;

//count plays
let player1 = 0;
let player2 = 0;

//add event for boxes
for(let i=0; i <boxes.length; i++){
    //when someone click on box
    boxes[i].addEventListener("click", () => {
        
        let el = CheckElement(player1, player2);

        if(boxes[i].childNodes.length == 0){
            let cloneEl = el.cloneNode(true);
            boxes[i].appendChild(cloneEl);
    
            //compute play
            if(player1 == player2){
                player1++;
            }else{
                player2++;
            }
        }

        //check if someone win
        CheckWinCond();
    })

    const CheckElement = (player1, player2) =>{
        if(player1 == player2){
            //x
            el = x;
        }else{
            //o
            el = o;
        }
        return el;
    }

    const CheckWinCond = () =>{
        let b1 = document.querySelector("#block-1")
        let b2 = document.querySelector("#block-2")
        let b3 = document.querySelector("#block-3")
        let b4 = document.querySelector("#block-4")
        let b5 = document.querySelector("#block-5")
        let b6 = document.querySelector("#block-6")
        let b7 = document.querySelector("#block-7")
        let b8 = document.querySelector("#block-8")
        let b9 = document.querySelector("#block-9")

        //horizontal check
        if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
 
            let b1Child = b1.childNodes[0].className;
            let b2Child = b2.childNodes[0].className;
            let b3Child = b3.childNodes[0].className;
         
            if(b1Child == b2Child && b1Child == b3Child) {
                DeclareWinner(b1Child);
            }
          }
         
          if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
         
            let b4Child = b4.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b6Child = b6.childNodes[0].className;
         
            if(b4Child == b5Child && b6Child == b5Child) {
                DeclareWinner(b5Child);
            }
          }
         
          if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
         
            let b7Child = b7.childNodes[0].className;
            let b8Child = b8.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;
         
            if(b7Child == b8Child && b9Child == b8Child) {
                DeclareWinner(b8Child);
            }
          }
         
          // Vertical check
          if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
         
            let b1Child = b1.childNodes[0].className;
            let b4Child = b4.childNodes[0].className;
            let b7Child = b7.childNodes[0].className;
         
            if(b1Child == b4Child && b7Child == b4Child) {
                DeclareWinner(b4Child);
            }
          }
         
          if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
         
            let b2Child = b2.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b8Child = b8.childNodes[0].className;
         
            if(b2Child == b5Child && b8Child == b5Child) {
                DeclareWinner(b5Child);
            }
          }
         
          if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
         
            let b3Child = b3.childNodes[0].className;
            let b6Child = b6.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;
         
            if(b3Child == b6Child && b9Child == b6Child) {
                DeclareWinner(b6Child);
            }
          }
         
          // Diagonal
         
          if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
         
            let b1Child = b1.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;
         
            if(b1Child == b5Child && b9Child == b5Child) {
                DeclareWinner(b5Child);
            }
          }
         
          if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
         
            let b3Child = b3.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b7Child = b7.childNodes[0].className;
         
            if(b3Child == b5Child && b7Child == b5Child) {
                DeclareWinner(b5Child);
            }
          }
          
          // deu velha
          let counter = 0;
         
          for(let i = 0; i < boxes.length; i++) {
         
            if(boxes[i].childNodes[0] != undefined) {
              counter ++;
            }
         
          }
         
          if(counter == 9) {
            DeclareWinner('Draw');
          }
    }

    const DeclareWinner = (winner) =>{
        
            scoreBoardX = document.querySelector("#scoreboard-1");
            scoreBoardY = document.querySelector("#scoreboard-2");

            if(winner == 'x'){
                scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
                msg = "Player 1 Win";
            } else if(winner = 'o'){
                scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
                msg = "Player 2 Win";
            }else{
                msg = "DRAW !"
            }

            messageText.innerHTML = msg;
            messageContainer.classList.remove("hide");

            //hide msg
            setTimeout(function() {
                messageContainer.classList.add("hide")
            }, 3000);

            player1 = 0;
            player2 = 0;

            let boxesToRemove = document.querySelectorAll(".box div");

            for(let i = 0; i < boxesToRemove.length; i++){
                boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
            }
        }
}