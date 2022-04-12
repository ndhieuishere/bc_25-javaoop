// khởi tạo lớp đối tượng dsnv
function DanhSachNhanVien() {
  this.arr = [];
  this.themNhanVien = function (nhanVien) {
    this.arr.push(nhanVien);
  };
  // this.xoaNhanVien = function (taiKhoan) {
  //   var index = -1;
  //   for (var i = 0; i < this.arr.length; i++) {
  //     var nhanVien = this.arr[i];
  //     if (nhanVien.taiKhoan === taiKhoan) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   if (index !== -1) {
  //     this.arr.splice(index, 1);
  //   }
  // };
  this.timViTriNhanVien = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };
  this.xoaNhanVien = function (taiKhoan) {
    var index = this.timViTriNhanVien(taiKhoan);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this.layThongTinNV = function (taiKhoan) {
    var index = this.timViTriNhanVien(taiKhoan);
    if (index !== -1) {
      var nhanVien = this.arr[index];
      return nhanVien;
    }
    return null;
  };
  this.capNhatNhanVien = function (nhanVien) {
    var index = this.timViTriNhanVien(nhanVien.taiKhoan);
    if (index !== -1) {
      this.arr[index] = nhanVien;
    }
  };
  this.timNhanVien = function (keyword) {
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        mangTimKiem.push(nhanVien);
      }
    }
    return mangTimKiem;
  };
}
