const playerNames = [];

const button = document.getElementById('addPlayer');

const playerDiv = document.getElementById('players');

const nameInput = document.getElementById('pname');

function addPlayer() {

    for (let players of playerNames) {
        console.log(player);
        let string = `<p>${playerName}</p>`
    }
}



button.addEventListener('click', (event) =>{
    let playerName = nameInput.value;
    playerDiv.innerHTML += `<h3>${playerName}</h3>`

})

function clearFields() {
    document.getElementById('addPlayer') = " ";
}

function myFunction() {
    const element = document.getElementById("button");
    element.remove();
    console.log(playerName.value);
  }


// function addPlayer() {
//     console.log('Player Added');

//     const playerInput = document.getElementById('player-input');
//     console.log(playerInput);
//     const playerNamesContainer = document.getElementById('player-names');
//     console.log(playerNamesContainer);

//     playerNamesContainer.innerHTML = `<h3>${playerInput}</h3`

// }
