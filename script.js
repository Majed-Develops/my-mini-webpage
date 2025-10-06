
const pointOneBtn = document.getElementById("showPointOne");

const pointTwoBtn = document.getElementById("showPointTwo");

const pointThreeBtn = document.getElementById("showPointThree");

const pointFourBtn = document.getElementById("showPointFour");

const resetBtn = document.getElementById("reset");

function showFirstPoint(){
    let firstPoint = document.querySelector(".pointOne");
    firstPoint.textContent = "a future Cybersecurity Red Team / Blue Team Hacker";
};

pointOneBtn.addEventListener("click", showFirstPoint);

function showSecondPoint(){
  let secondPoint = document.querySelector(".pointTwo");
  secondPoint.textContent = "a future Software Developer";
}

pointTwoBtn.addEventListener("click", showSecondPoint);


function showThirdPoint(){
  let thirdPoint = document.querySelector(".pointThree");
  let condition = document.querySelector(".condition");
  thirdPoint.textContent = "a future LLM Engineer";
  condition.textContent = "But started as a:";
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

let removeLikesBtn = document.getElementById("cancel");

function likesCounter(){
  let currentNumber = Number(likesNumber.textContent);
  let likesStatement = document.querySelector(".likesStatement");

  likesNumber.textContent = currentNumber + 1;

}

likeBtn.addEventListener("click", likesCounter);



function removeLikes(){

  likesNumber.textContent = 0;
}

removeLikesBtn.addEventListener("click", removeLikes);


let webpageDeleteBtn = document.getElementById("deleteAllPageBtn");

function deletePageContent(){
  let webpage = document.querySelector(".webpage");

  webpage.innerHTML = "<h1 style='color: white'>Page deleted!</h1>";

  document.querySelector(".webpage").style.backgroundColor = "red";


}

webpageDeleteBtn.addEventListener("click", deletePageContent);

const cadillacImageSection = document.getElementById("cadillacPhotoSection");
const cadillacPhotoBtn = document.getElementById("cadillacPhotoButton");
const cadillacImgStatement = document.querySelector(".cadillacPhotoStatement");

let isCadillacImageVisible = false;



cadillacPhotoBtn.addEventListener("click", function() {
  if(!isCadillacImageVisible){
    const cadillacImg = document.createElement("img");
    cadillacImg.src = "/images/cadillac-escalade.jpg";
    cadillacImg.alt = "Cadillac Escalde 2002";
    cadillacImg.style.width = "900px";
    cadillacImg.style.border = "3px solid black";
    cadillacImg.style.borderRadius = "10px";
    cadillacImg.style.maxWidth = "100%";
    cadillacImg.style.textAlign = "center";

    cadillacImageSection.appendChild(cadillacImg);
    cadillacPhotoBtn.textContent = "Hide Image";
    cadillacImgStatement.textContent = "Click this button to hide the Cadillac Escalde Image"
    isCadillacImageVisible = true;
    
  }else{
    cadillacImageSection.innerHTML = "";
    cadillacPhotoBtn.textContent = "Show Image";
    cadillacImgStatement.textContent = "Click this button to view the Cadillac Escalade image.";
    isCadillacImageVisible = false;

  }

});


const malibuPhotoBtn = document.getElementById("malibuPhotoButton");

const malibuPhotoSection = document.getElementById("malibuPhotoSection");

const malibuPhotoStatement = document.querySelector(".malibuPhotoStatement");

let isMalibuImgVisible = false;

malibuPhotoBtn.addEventListener("click", function(){
  if(!isMalibuImgVisible){
    const malibuImg = document.createElement("img");
    malibuImg.src = "/images/malibu-2015.jpg";
    malibuImg.alt = "Cevrolet Malibu LT 2015 (White)";
    malibuImg.style.width = "700px";
    malibuImg.style.border = "3px solid black";
    malibuImg.style.borderRadius = "10px";
    malibuImg.style.maxWidth = "100%";
    malibuImg.style.textAlign = "center";

    malibuPhotoSection.appendChild(malibuImg);
    malibuPhotoBtn.textContent = "Hide Image";
    malibuPhotoStatement.textContent = "Click this button to hide the Chevrolet Malibu image."
    isMalibuImgVisible = true;
  }else{
    malibuPhotoSection.innerHTML = "";
    malibuPhotoBtn.textContent = "Show Image";
    malibuPhotoStatement.textContent = "Click this button to view the Chevrolet Malibu image."
    isMalibuImgVisible = false;
  }
  
});


const fzImgBtn = document.getElementById("fzImageBtn");

const fzImgSection = document.getElementById("fzImgSection");

const fzStatement = document.querySelector(".fzStatement");

let isFzVisible = false;

fzImgBtn.addEventListener("click", function(){
  if(!isFzVisible){
    const fzImg = document.createElement("img");
    fzImg.src = "/images/eagle-fz.jpeg";
    fzImg.alt = "My Yamaha FZ150i";
    fzImg.style.width = "900px";
    fzImg.style.maxWidth = "100%";
    fzImg.style.border = "3px solid grey";
    fzImg.style.borderRadius = "10px";

    fzImgSection.appendChild(fzImg);
    fzImgBtn.textContent = "Hide Image";
    fzStatement.textContent = "Click this button to hide Eagle.";
    isFzVisible  = true;
  }else{
    fzImgSection.innerHTML = "";
    fzImgBtn.textContent = "Show Image";
    fzStatement.textContent = "Click this button to view Eagle.";
    isFzVisible = false;

  }
});


// Favorite Cars Section

const carInput = document.getElementById("carInput");

const carAddBtn = document.getElementById("carAddButton");

const carList = document.getElementById("carList");

const carInputStorage = [];

const myFavCarsInput = document.querySelector(".myFavCarsInput");


function displayCars(){
  carList.innerHTML = "";
    if(carInput.value === ""){
      let warning = document.createElement("p");
      warning.textContent = "Please input car first!"
      warning.style.color = "red";
      carList.appendChild(warning);
      setTimeout(() => { warning.textContent = ""; }, 3000);
    }else{
      for(let i = 0; i < carInputStorage.length; i++){
        console.log(carInputStorage[i]);
        
      let li = document.createElement("li");
      li.style.margin = "5px";
      let removeCarBtn = document.createElement("button");
      removeCarBtn.textContent = "X";
      removeCarBtn.style.backgroundColor = "red";
      removeCarBtn.style.color = "white";
      removeCarBtn.style.border = "3px solid black"
      removeCarBtn.style.borderRadius = "10px";
      removeCarBtn.style.marginLeft = "5px";
      removeCarBtn.style.backgroundColorHover
      li.textContent = carInputStorage[i];
      carList.appendChild(li);
      
      li.appendChild(removeCarBtn);
      removeCarBtn.addEventListener("click", function(){
      
      carInputStorage.splice(i, 1);
      displayCars();
    })
    }
  }
}

function addFavCar(){
  let userInput = carInput.value;
  carInputStorage.push(userInput);
  displayCars();
};






carAddBtn.addEventListener("click", addFavCar);


// Buttons Training Section

const helloBtn = document.getElementById("helloButton");
const hiBack = document.getElementById("helloButtonStatement");
const userInputName = document.getElementById("userInputName");
let userInputResponse = document.getElementById("userInputResponse");
const userInputNameBtn = document.getElementById("userInputNameButton");



function helloCommunication(){
  hiBack.textContent = "Hi! Glad you're here!";
  
  setTimeout(() => { hiBack.textContent = ""; }, 3000);
};

helloBtn.addEventListener("click", helloCommunication);


userInputNameBtn.addEventListener("click", function(){
  let userNameInput = userInputName.value;
  if(userNameInput == "Suleiman" || userNameInput == "suleiman" || userNameInput == "Alaa" || userNameInput =="alaa" || userNameInput == "Farah" || userNameInput == "farah"){
    userInputResponse.textContent = `${userNameInput.toUpperCase()}!!!!! What do you want?!`;
    userInputResponse.style.color = "black";
    userInputResponse.style.fontWeight = "bolder";
    userInputResponse.style.margin = "10px";
    setTimeout(() => { userInputResponse.textContent = ""; }, 3000);
  }else if(userNameInput == "Eman" || userNameInput == "eman"){
      userInputResponse.textContent = "السلام عليكم حبوباتي";
      userInputResponse.style.color = "deeppink";
      userInputResponse.style.fontWeight = "bold";
      userInputResponse.style.fontStyle = "italic";
      userInputResponse.style.margin = "10px";
      setTimeout(() => { userInputResponse.textContent = "";}, 3000);
  }else if(userNameInput == "Bashir" || userNameInput == "bashir"){
      userInputResponse.textContent = "السلام عليكم حبيبي";
      userInputResponse.style.color = "dodgerblue";
      userInputResponse.style.fontWeight = "bold";
      userInputResponse.style.fontStyle = "italic";
      userInputResponse.style.margin = "10px";
      setTimeout(() => { userInputResponse.textContent = ""; }, 3000);
  }else if(userNameInput === ""){
      userInputResponse.textContent = "Please enter a name.";
      userInputResponse.style.color = "white";
      userInputResponse.style.margin = "10px";
      userInputResponse.style.fontStyle = "italic";
      setTimeout(() => { userInputResponse.textContent = ""; }, 3000);
  }
  else{ 
    userInputResponse.textContent = `Hello ${userNameInput}! It's a pleasure to get to know you!`;
    setTimeout(() => { userInputResponse.textContent = ""; }, 3000);
  }
});