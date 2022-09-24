// 랜덤 번호 지정
// 유저가 번호입력 - 실행 버튼 누름
// 유저가 랜덤번호를 맞춘 경우 : 맞췄습니다!
// 유저가 랜덤번호를 틀린 경우 : 입력한 번호가 크면 down! / 작으면 up!
// reset 버튼 클릭 시 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝남
// 유저가 1~100 범위 밖의 숫자를 입력하면 범위 안의 숫자를 입력하라고 알림. 기회를 깎지 않음
// 유저가 이미 입력한 숫자를 또 입력하면 다시 입력하라고 알림. 기회를 깎지 않음.

// 필요한 것 - 랜덤번호를 저장해둘 변수
let computerNum = 0;
let playbtn = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");

playbtn.addEventListener("click",play);
//addEventListener("이벤트 이름", 이벤트발생 시 실행할 함수)
resetButton.addEventListener("click",reset)

// 랜덤 번호를 뽑을 함수
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1; 
    // random함수의 범위=0~1 (1 미포함)이므로 이 코드를 실행하면 0부터 99까지 나옴. 
    // 1부터 100으로 범위를 바꾸려면 +1을 한다.
    console.log("정답", computerNum);
}
//유저가 입력한 값 가져오기
function play(){
    let userValue = userInput.value;

    chances -- ;
    chanceArea.textContent = `남은기회${chances}번` ;
    console.log("chances",chances);

    if (userValue < computerNum){
        resultArea.textContent = "Up!!!"
    } else if (userValue > computerNum){
        resultArea.textContent = "Down!!!"
    } else {
        resultArea.textContent = "정답^~^"
    }

    if (chances < 1) {
        gameOver = true;
    }
    if (gameOver == true) {
        playbtn.disabled = true;
    }
}

function reset(){
    //user input창이 깨끗하게 정리됨 
    userInput.value = ""
    //새로운 번호 생성
    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다"
}

pickRandomNum();