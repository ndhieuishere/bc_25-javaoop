// hàm dom
function getEle(id) {
  return document.getElementById(id);
}
var validation = new Validation();

function layThongTinNhanVien() {
  // lấy dữ liệu từ local storage

  // dom tới các thẻ value để lấy input
  var _taiKhoan = getEle("tknv").value;
  var _hoVaTen = getEle("name").value;
  var _email = getEle("email").value;
  var _password = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCB = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value;

  // cờ check valid
  var isValid = true;
  isValid &=
    validation.kiemTraRong(
      _taiKhoan,
      "errorTaiKhoan",
      "(*)Vui lòng nhập tài khoản"
    ) &&
    validation.kiemTraDoDaiKiTu(
      _taiKhoan,
      "errorTaiKhoan",
      "(*)Vui lòng nhập tài khoản có độ dài 4-6 kí tự",
      4,
      6
    ) &&
    validation.kiemTraTrungTaiKhoan(
      _taiKhoan,
      "errorTaiKhoan",
      "tài khoản đã tồn tại vui lòng nhập tài khoản khác",
      dsnv.arr
    ) &&
    validation.kiemTraKiTuLaSo(
      _taiKhoan,
      "errorTaiKhoan",
      "Vui lòng nhập tài khoản ở định dạng chữ số"
    );
  isValid &=
    validation.kiemTraRong(
      _hoVaTen,
      "errorHoVaTen",
      "(*)Vui lòng nhập họ và tên"
    ) &&
    validation.kiemTraChuoiKiTu(
      _hoVaTen,
      "errorHoVaTen",
      "(*)Vui lòng nhập họ và tên"
    );
  isValid &=
    validation.kiemTraRong(_email, "errorEmail", "(*)Vui lòng nhập email") &&
    validation.kiemTraEmail(
      _email,
      "errorEmail",
      "(*)Vui lòng nhập email đúng định dạng"
    );
  isValid &=
    validation.kiemTraRong(
      _password,
      "errorMatKhau",
      "(*)Vui lòng nhập mật khẩu"
    ) &&
    validation.kiemTraMatKhau(
      _password,
      "errorMatKhau",
      "(*)Vui lòng nhập mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );
  isValid &=
    validation.kiemTraRong(
      _ngayLam,
      "errorNgayGio",
      "(*)Vui lòng nhập ngày làm"
    ) &&
    validation.kiemTraNgayThang(
      _ngayLam,
      "errorNgayGio",
      "(*)Vui lòng nhập ngày làm theo định dạng mm/dd/yyyy"
    );
  isValid &=
    validation.kiemTraRong(
      _luongCB,
      "errorLuongCoBan",
      "(*)Vui lòng nhập lương cơ bản"
    ) &&
    validation.kiemTraLuongCB(
      _luongCB,
      "errorLuongCoBan",
      "(*)Vui lòng nhập lương cơ bản trong khoảng 1.000.000 - 20.000.000,",
      1000000,
      20000000
    );
  isValid &= validation.kiemTraChucVu(
    _chucVu,
    "errorChucVu",
    "(*)Vui lòng chọn chức vụ phù hợp"
  );
  isValid &=
    validation.kiemTraRong(
      _gioLam,
      "errorGioLam",
      "(*)Vui lòng nhập giờ làm"
    ) &&
    validation.kiemTraSoGio(
      _gioLam,
      "errorGioLam",
      "(*)Vui lòng nhập giờ làm trong khoảng 80-200 giờ",
      80,
      200
    );
  if (isValid) {
    //   tạo đối tượng nv từ lớp đối tượng nvien
    var nhanVien = new NhanVien(
      _taiKhoan,
      _hoVaTen,
      _email,
      _password,
      _ngayLam,
      _luongCB,
      _chucVu,
      _gioLam
    );
    //   gọi phương thức tính tổng lương đã thiết kế bên lớp đối tượng nhân viên
    nhanVien.tinhTongLuong(_chucVu, _luongCB);
    //   gọi phương thức tính xếp loại đã thiết kế bên lớp đối tượng nhân viên
    nhanVien.tinhXepLoai(_gioLam);
    return nhanVien;
  }
  return null;
}

// tạo đối tượng dsnv từ lớp đối tượng dsnv
var dsnv = new DanhSachNhanVien();
// hàm tạo bảng
function taoBang(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nv = arr[i];
    content += `
    <tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoVaTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.xepLoai}</td>
    <td>
    <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoan}')">Xóa</button></td>
    <td>
    <button class="btn btn-warning" onclick="suaNV('${nv.taiKhoan}')">Sửa</button></td>
    </tr>`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

// tạo bộ nhớ local
function setLocalStorage() {
  // chuyển dsnv.arr từ json qua kiểu string
  var dataString = JSON.stringify(dsnv.arr);
  // lưu dsnv xuống local storage
  localStorage.setItem("DSNV", dataString);
}

// lấy dữ liệu từ bộ nhớ local
function getLocalStorage() {
  var dataString = localStorage.getItem("DSNV");
  if (dataString) {
    //    chuyển lại qua kiểu json
    var dataJson = JSON.parse(dataString);
    //    nạp data vào dsnv.arr
    dsnv.arr = dataJson;
    //   render lại tbody
    taoBang(dsnv.arr);
  }
}
getLocalStorage();
// gọi lại hàm set local storage
// nút thêm nv
getEle("btnThemNV").addEventListener("click", function () {
  // gán cho phương thức lấy thông tin nv ở trên 1 giá trị nv
  var nhanVien = layThongTinNhanVien();
  if (nhanVien) {
    //   gọi phương thức thêm nv bên lớp đối tượng dsnv
    dsnv.themNhanVien(nhanVien);
    //   gọi phương thức tạo bảng đã tạo ở trên
    taoBang(dsnv.arr);
    setLocalStorage();
  }
});
// xóa nv
function xoaNV(taiKhoan) {
  dsnv.xoaNhanVien(taiKhoan);
  taoBang(dsnv.arr);
  setLocalStorage();
}
// sửa nv
function suaNV(taiKhoan) {
  getEle("btnCapNhat").style.display = "inline-block";
  var nhanVien = dsnv.layThongTinNV(taiKhoan);
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nhanVien.hoVaTen;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.password;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCB;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;
}
// cập nhật nhân viên
getEle("btnCapNhat").onclick = function capNhatNhanVien() {
  var nhanVien = layThongTinNhanVien();
  dsnv.capNhatNhanVien(nhanVien);
  taoBang(dsnv.arr);
  setLocalStorage();
};

// tìm kiếm nv
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var mangTimKiem = dsnv.timNhanVien(keyword);
  taoBang(mangTimKiem);
});
