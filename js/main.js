function tienThue() {
    var tencd = document.getElementById("ten").value;
    var tongTien = parseFloat(document.getElementById("tongThu").value);
    var soNguoi = parseFloat(document.getElementById("nguoiPhuThuoc").value);
    var tThue = parseFloat(tongTien - 4 - soNguoi * 1.6);
    var thue = 0;
    if (tThue <= 60) {
        thue = tThue * 5 / 100;
    } else if (tThue > 60 && tThue <= 120) {
        thue = tThue * 10 / 100;
    } else if (tThue > 120 && tThue <= 210) {
        thue = tThue * 15 / 100;
    } else if (tThue > 210 && tThue <= 384) {
        thue = tThue * 20 / 100;
    } else if (tThue > 384 && tThue <= 624) {
        thue = tThue * 25 / 100;
    } else if (tThue > 624 && tThue <= 960) {
        thue = tThue * 30 / 100;
    } else {
        thue = tThue * 35 / 100;
    }
    document.getElementById("txtTen").innerHTML = "Tên Công Dân: " + tencd;
    document.getElementById("txtTienThue").innerHTML = "Tiền thuế phải nộp: " + thue.toFixed(2);
}

document.getElementById("tinhThue").onclick = tienThue;

