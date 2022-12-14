// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;
  // Catch fish based on character
  if (character === 'steve') {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    catchFish(0.7, 0.9, .95, 1.0)
  } else if (character === 'alex') {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    catchFish(0.1, 0.2, 0.5, 1.0)
  } else if (character === 'villager') {
    // VILLAGER: Cod 25%, Salmon 25%, Tropical 25%, Puffer 25%
    catchFish(0.25, 0.50, 0.75, 1.0)
  }
}

// catches based off numbers assigned to character
function catchFish(codChance, salmonChance, tropicalChance, pufferChance) {
  let randNum = Math.random();
  if (randNum < codChance) {
    catchCod()
  } else if (randNum < salmonChance) {
    catchSalmon()
  } else if (randNum < tropicalChance) {
    catchTropical()
  } else if (randNum < pufferChance) {
    catchPuffer()
  }
}

// functions to catch fish
function catchCod() {
  numCod++;
  numCodSpan.innerHTML = numCod;
  resultImg.src = 'img/Raw-Cod.png';
}

function catchSalmon() {
  numSalmon++;
  numSalmonSpan.innerHTML = numSalmon;
  resultImg.src = 'img/Raw-Salmon.png';
}

function catchTropical() {
  numTropical++;
  numTropicalSpan.innerHTML = numTropical;
  resultImg.src = 'img/Tropical-Fish.png';
}

function catchPuffer() {
  numPuffer++;
  numPufferSpan.innerHTML = numPuffer;
  resultImg.src = 'img/Pufferfish.png';
}