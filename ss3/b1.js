let turn = prompt(`Hôm nay có bao nhiêu lượt mượn sách`);
let cpTurn = turn;
for (let i = 0; i < turn ; i++) {
    let nameBorrow = prompt(`Tên người mượn: ${i + 1}`);
    let nameBook = prompt(`Tên sách: `);
    let dayBorrow = +prompt(`Số ngày mượn: `);
    if (dayBorrow > 14) {
        alert(`Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)`);
        cpTurn--;
    } else if (dayBorrow <= 14) {
        alert(`Mượn thành công`);
    }
}
alert(`Tổng số lượt mượn: ${cpTurn}`);