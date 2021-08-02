
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const boxes = document.querySelectorAll('.tictactoe-bx');


boxes.forEach(box => box.addEventListener('click',getPlayerValue,{once:true}));


function getPlayerValue(e)
{
    let playerValue = parseInt(e.target.dataset.cell);

    e.target.textContent = "Ekis";

    processPlayerValue(playerValue); 
    
    setTimeout(()=> getComputerValue(),1000);
}

let playerSum = [];
let duplicatePlayerSum = [];

function processPlayerValue(playerValue)
{
    playerSum.push(parseInt(playerValue));
    duplicatePlayerSum.push(parseInt(playerValue));

    computerValues = computerValues.filter(x => x!== playerValue);
    
    tallyValues(playerSum);
}

let computerValues = [2,7,6,9,5,1,4,3,8];

function computerPickValue()
{
    return computerValues[Math.floor(Math.random() * computerValues.length)];
}

let computerSum = [];

function getComputerValue()
{    
    let computerValue = 0;


    boxes.forEach(box =>
    {
        if(playerSum.length === 2)
        { 
            computerValue = playerSum.reduce((a,b) => 15 - (a+b));
            playerSum = [];
            
            console.log("First Choice");
        }

        else if(computerSum.length === 2)
        {
            computerValue = computerSum.reduce((a,b) => 15 - (a+b));
                     
            computerSum = [];

            console.log("Second Choice");
        }

        else if(playerSum.length === 1 && computerSum.length < 2)
        {
            computerValue = computerPickValue();
            console.log("Third Choice");
        }
    })

    computerSum.push(computerValue);

    boxes.forEach(box =>
    {
        if(computerValue === parseInt(box.dataset.cell))
        box.textContent = "Circol";        
    })
    
    computerValues = computerValues.filter(x => x !== computerValue);
    
    console.log("Player" + playerSum);

    console.log("ComputerValue " + computerValue);

    console.log("Computer " + computerSum);

    console.log("ComputerValues " + computerValues);







}


function tallyValues(sum)
{
    for(let i=0; i<sum.length; i++)
    {
        for(let j=i+1; j<sum.length; j++)
        {
            for(let k=j+1; k<sum.length; k++)
            {
                if(sum[i]+sum[j]+sum[k] === 15) alert("Player Wins");
            }
        }
    }    
}








// let boolean = true;

// let boxValues = [2,7,6,9,5,1,4,3,8];

// let computerBoxValues = [2,7,6,9,5,1,4,3,8];


// boxes.forEach((box,index) =>
// {
//     box.addEventListener('click', e=>
//     {
//         let playerValue = getPlayerValue(index);

//         let playerName = "Darwin";

//         playerTurn(box,playerValue,playerName)
//         boolean = false;

//         if(boolean === false)
//             setTimeout(() => {
//                 computerTurn();
//             }, 3000);


//     },{once:true})

// })

// function getPlayerValue(index)
// {
//     let playerValue = 0;

//     for(let i=0; i<boxValues.length; i++)
//     {
//         if(index === i)
//         {
//             playerValue = boxValues[i];
//             computerBoxValues[i] = 0;
//         }        
//     }

//     return playerValue;
// }

// let playerValueArr = [];

// function playerTurn(box,playerValue,playerName)
// {
//     box.textContent = "Ekis";

//     playerValueArr.push(playerValue);

//     addValues(playerValueArr,playerName);
// }

// function computerTurn()
// {

//     let computerIndex = Math.floor(Math.random() * computerBoxValues.length);


//     let computerValue = 0;
//     boxes.forEach((box,index) =>
//     {
//         if(box.textContent === "Ekis") computerIndex = Math.floor(Math.random() * computerBoxValues.length);

//         if(index === computerIndex) box.textContent = "Circol";
        

//     })

//     console.log(computerBoxValues);

// }


// function addValues(arr,playerName = null)
// {   
//     for(let i=0; i<arr.length;i++)
//     {
//         for(let j=i+1; j<arr.length; j++)
//         {
//             for(let k=i+2; k<arr.length; k++)
//             {
//                 if(arr[i]+arr[j]+arr[k] === 15 && playerName !== null) alert("Player Wins!");
//                 else if(arr[i]+arr[j]+arr[k] === 15 && playerName === null) alert("Computer Wins!");
//                 else alert("Ties!");
//             }
//         }
//     }   
// }









