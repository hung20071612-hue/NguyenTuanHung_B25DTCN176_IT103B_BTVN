let nameBook = prompt("Mời bạn nhập tên sách:");
let soThuTu = prompt("Mời bạn nhập số thứ tự của sách trong thư viện:");
let sachBanDau = nameBook;
let newBook = nameBook.trim().toUpperCase();
document.write("<pre>");
document.write(`Tên sách gốc : }`+sachBanDau+"\n");
document.write(`Mã sách sau chuẩn hóa : LIB-${newBook}-${soThuTu}`+"\n");
document.write("<pre>");