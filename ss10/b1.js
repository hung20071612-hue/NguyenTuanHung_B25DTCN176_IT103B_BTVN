const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15
}

function showPlayerInfo(player){
    console.log(`Tên: ${player.name}
        Vị trí: ${player.position}
        Tuổi: ${player.age}
        Bàn thắng: ${player.goals}
        Kiến tạo: ${player.assists}`);
}

showPlayerInfo(player);