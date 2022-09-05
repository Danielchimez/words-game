const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputFeild = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");


let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time elapsed ${correctWord.toUpperCase()} is the correct word`);
        initGame();
    }, 1000);
}


const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputFeild.value = "";
    inputFeild.setAttribute("maxlength", correctWord.length);
}

initGame();


const checkWord = () => {
    let userWord = inputFeild.value.toLocaleLowerCase();
    if(!userWord) return alert("Please Enter a Word");
    if(userWord !== correctWord) return alert(`It seems ${userWord} is not correct`);
    alert(`Congratulations ${userWord.toUpperCase()} is the correct word`);
    initGame();
}


refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord)