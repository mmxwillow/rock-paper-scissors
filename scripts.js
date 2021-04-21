let userScore=0;
let computerScore=0;

    function computerPlay()
    {
       let rand = Math.floor(Math.random()*3)+1;
        if(rand==1)
        return 'rock';
        else if(rand==2)
        return 'paper';
        else
        return 'scissors';
    }

    function playRound(playerSelection, computerSelection)
    {
        if(playerSelection===computerSelection)
        {
            document.getElementById("result_text").innerHTML = "It's a draw. Try again!";
        }
        else if((playerSelection=='rock' && computerSelection=='paper') || (playerSelection=='paper' && computerSelection=='scissors') || (playerSelection=='scissors' && computerSelection=='rock'))
        {
            document.getElementById("result_text").innerHTML = "You lost this round.";
            computerScore++;
            document.getElementById("computerScore").innerHTML = "Computer: " +computerScore; 
        }
        else
        {
            document.getElementById("result_text").innerHTML = "You won this round.";
            userScore++;
            document.getElementById("userScore").innerHTML = "You: " +userScore; 
        }
    }

    function disableElements(isDisabled)
    {
        let elements = document.getElementsByClassName("weapon_choice");

        for(let i=0; i < elements.length;i++)
        elements[i].disabled=isDisabled;
    }

    function createBtn()
    {   
        const btn = document.querySelector('#btnRetry');
        btn.style.visibility="visible";
        btn.addEventListener('click', () => {
        computerScore=0;
        userScore=0;
        disableElements(false);
        document.getElementById("result_text").innerHTML = "Good luck!";
        document.getElementById("computerScore").innerHTML = "Computer: " +computerScore; 
        document.getElementById("userScore").innerHTML = "You: " +userScore; 
        btn.style.visibility="hidden";
    })
    }

    function playerChoice(clicked_value){
        playRound(clicked_value, computerPlay());
        if(userScore==3)
        {
            document.getElementById("result_text").innerHTML = "You won!! Do you wanna play more?";
            createBtn();
            disableElements(true);
        }
        else if(computerScore==3)
        {
            document.getElementById("result_text").innerHTML = "You lost :( Do you wanna get revenge?";
            createBtn();
            disableElements(true);
        }
    }

    