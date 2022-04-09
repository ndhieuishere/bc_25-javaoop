// khởi tạo lớp đối tượng nhân viên
function NhanVien(
  _taiKhoan,
  _hoVaTen,
  _email,
  _password,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoVaTen = _hoVaTen;
  this.email = _email;
  this.password = _password;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";

  this.tinhTongLuong = function (chucVu, luongCB) {
    if (this.chucVu == "Sếp") {
      this.tongLuong = this.luongCB * 3;
    } else if (chucVu == "Trưởng phòng") {
      this.tongLuong = this.luongCB * 2;
    } else {
      this.tongLuong = this.luongCB;
    }
  };

  this.tinhXepLoai = function (_gioLam) {
    if (this.gioLam >= 192) {
      this.xepLoai = "nhân viên xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      this.xepLoai = "nhân viên giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      this.xepLoai = "nhân viên khá";
    } else {
      this.xepLoai = "nhân viên trung bình";
    }
  };
}
