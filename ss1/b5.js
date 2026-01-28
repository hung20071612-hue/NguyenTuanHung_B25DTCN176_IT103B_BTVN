let name_book = prompt("Tên quyển sách: ");
let year_release = prompt("Năm suất bản: ")
const currentYear = new Date().getFullYear();
let age_book = currentYear - year_release ;
document.write("<pre>");
    document.write("Sách: " + name_book + "\n");
    document.write("Năm xuất bản: " + year_release + "\n");
    document.write("Tuổi của sách: " + age_book + "\n");
document.write("<pre>");