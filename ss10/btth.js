let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];

do{
    choice = +prompt(`--- FOOTBALL MANAGER PRO ---
1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (Theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát

Nhập lựa chọn:`);

    switch(choice){

        case 1: showSquad(); break;
        case 2: addPlayer(); break;
        case 3: findPlayer(); break;
        case 4: updateGoals(); break;
        case 5: deletePlayer(); break;
        case 0:
            alert("Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

}while(choice !== 0);

function showSquad(){
    console.log("=== DANH SÁCH ĐỘI BÓNG ===");
    squad.forEach(player => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
}


function addPlayer(){

    let name = prompt("Nhập tên cầu thủ:");
    let goals = +prompt("Nhập số bàn thắng:");
    let position = prompt("Nhập vị trí (FW / MF / DF / GK):");
    let newID = squad.length + 1;

    let newPlayer = {
        id: newID,
        name: name,
        goals: goals,
        position: position
    };

    squad.push(newPlayer);
    alert("Đã thêm cầu thủ thành công!");
}


function findPlayer(){
    let id = +prompt("Nhập ID cầu thủ cần tìm:");
    let player = squad.find(p => p.id === id);

    if(player){
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    }else{
        alert("Không tìm thấy cầu thủ!");
    }
}


function updateGoals(){
    let id = +prompt("Nhập ID cầu thủ vừa ghi bàn:");
    let player = squad.find(p => p.id === id);

    if(player){
        player.goals += 1;
        alert(`Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng`);
    }else{
        alert("Không tìm thấy cầu thủ!");
    }
}


function deletePlayer(){
    let id = +prompt("Nhập ID cầu thủ cần chuyển nhượng:");
    let index = squad.findIndex(p => p.id === id);
    if(index !== -1){
        squad.splice(index,1);
        alert("Đã xóa cầu thủ khỏi đội!");
    }else{
        alert("Không tìm thấy cầu thủ!");
    }
}