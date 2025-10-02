
const pointOneBtn = document.getElementById("showPointOne");

const pointTwoBtn = document.getElementById("showPointTwo");

const pointThreeBtn = document.getElementById("showPointThree");

const pointFourBtn = document.getElementById("showPointFour");

const resetBtn = document.getElementById("reset");

function showFirstPoint(){
    let firstPoint = document.querySelector(".pointOne");
    firstPoint.textContent = "a Cybersecurity Red Team / Blue Team Hacker";
};

pointOneBtn.addEventListener("click", showFirstPoint);

function showSecondPoint(){
  let secondPoint = document.querySelector(".pointTwo");
  secondPoint.textContent = "a Software Developer";
}

pointTwoBtn.addEventListener("click", showSecondPoint);


function showThirdPoint(){
  let thirdPoint = document.querySelector(".pointThree");
  let condition = document.querySelector(".condition");
  thirdPoint.textContent = "an LLM Engineer";
  condition.textContent = "But started as a:"
}

pointThreeBtn.addEventListener("click", showThirdPoint);

function showForthPoint(){
    let forthPoint = document.querySelector(".pointFour");
    forthPoint.textContent = "a Prompt Engineer";
}

pointFourBtn.addEventListener("click", showForthPoint);

function removeAllPoints(){
  let firstPoint = document.querySelector(".pointOne");
  let secondPoint = document.querySelector(".pointTwo");
  let thirdPoint = document.querySelector(".pointThree");
  let condition = document.querySelector(".condition");
  let forthPoint = document.querySelector(".pointFour");


  firstPoint.textContent = "";
  secondPoint.textContent = "";
  thirdPoint.textContent = "";
  condition.textContent = "";
  forthPoint.textContent = "";

}

resetBtn.addEventListener("click", removeAllPoints);



// Likes section

let likeBtn = document.getElementById("likeButton");

let likesNumber = document.querySelector(".likesCounter");

function likesCounter(){
  let currentNumber = Number(likesNumber.textContent);

  likesNumber.textContent = currentNumber + 1;
  likesStatement.textContent = `Likes: x${currentNumber}`

}

likeBtn.addEventListener("click", likesCounter);