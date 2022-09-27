// 유저가 값을 입력함
// +버튼 클릭 시, 할 일 추가
// delete버튼을 누르면 할 일이 삭제됨
// check 버튼 클릭 시 할 일 완료 - 밑줄 효과
// not Done 탭을 누르면 언더바가 이동
// Done 탭은 끝난 일, not Done은 진행중인 일, 전체 탭은 전체 일


let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add");
let taskList = []

addButton.addEventListener("click", addTask); //button에 이벤트를 줌. 클릭하면(이벤트), addTask함수 실행

function addTask(){
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    console.log(taskList);
    render();
}

function render(){
    let resultHTML = '';
    for(let i=0; i<taskList.length; i++){
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div class="task-button">
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`
    }
    
    document.getElementById("task-board").innerHTML = resultHTML;
}