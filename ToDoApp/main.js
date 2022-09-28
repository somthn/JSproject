// 유저가 값을 입력함
// +버튼 클릭 시, 할 일 추가
// delete버튼을 누르면 할 일이 삭제됨
// check 버튼 클릭 시 할 일 완료 - 밑줄 효과
// not Done 탭을 누르면 언더바가 이동
// Done 탭은 끝난 일, not Done은 진행중인 일, 전체 탭은 전체 일


let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add");
let taskList = []
let tabs = document.querySelectorAll(".tap-menu div");
let mode = "all";
let filterList = [];

addButton.addEventListener("click", addTask); //button에 이벤트를 줌. 클릭하면(이벤트), addTask함수 실행

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        filter(event);
    });
}

// 할 일 추가하는 함수
function addTask(){

    let task = {
        id: randomIdGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    };

    taskList.push(task);
    console.log(taskList);
    render();
}

// UI 업데이트하는 함수
function render(){

    let list = [];
    if(mode == "all"){
        list = taskList;
    } else if(mode == "ongoing" || mode == "done"){
        list = filterList;
    } 

    let resultHTML = "";
    for(let i=0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div class="task-button">
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
        } 
    }
    
    document.getElementById("task-board").innerHTML = resultHTML;
}

// 할 일 완료, 미완료 전환하는 함수
function toggleComplete(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete; //할 일 완료, 미완료 전환
            break;
        }
    }
    render();
}


// 할 일 삭제하는 함수
function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
} 

function filter(event){
    mode = event.target.id
    filterList = [];

    document.getElementById("underline").style.width =
        event.target.offsetWidth + "px";
    document.getElementById("underline").style.top =
        event.target.offsetTop + event.target.offsetHeight + "px";
    document.getElementById("underline").style.left =
        event.target.offsetLeft + "px";

    if(mode == "all"){
        render();
    } else if(mode == "ongoing"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        render();
    } else if(mode == "done"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
        }
        render();
    }
}

// id 생성하는 함수
function randomIdGenerate(){
    // random ID Generate
    return '_' + Math.random().toString(36).substring(2,9);
}
