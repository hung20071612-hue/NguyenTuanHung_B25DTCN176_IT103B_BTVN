const player = {
    name: "De bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchedPlayed: 35
}

function addPerformanceScore(player){
    let score = (player.goals + player.assists) / player.matchedPlayed;
    console.log(`Tên: ${player.name}
        Vị trí: ${player.position}
        Bàn thắng: ${player.goals}
        Kiến tạo: ${player.assists}
        Số trận đã chơi: ${player.matchedPlayed}`);
     console.log(`Điểm hiệu suất của ${player.name} là: ${score.toFixed(2)}`)

}

addPerformanceScore(player);

if(player.goals > 1){
    player.isKey = true;
    console.log("Là cầu thủ key.");
}else{
    player.isKey = false;
    console.log("Không phải là cầu thủ key.");
}