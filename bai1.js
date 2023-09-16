// viet chuong trinh nhap diem của mot sinh vien cho cac mon:vật lý, hóa học và sinh học . sau đó hiển thị thêm điểm trng bình và tổng của những
// điểm này

let vatLy = Number(prompt("nhap vao diem vật lý?"));
let hoaHoc = Number(prompt( " nhap vao diem hóa hoc?"));
let sinhHoc = Number(prompt(" nhap vaop diem sinh học?"));
let tong = (vatLy+hoaHoc+sinhHoc);
let trungbinh = (( vatLy+hoaHoc+sinhHoc)/3)
console.log('tong', tong);
console.log('trungbinh',trungbinh);

