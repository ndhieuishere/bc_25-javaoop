function Validation(value) {
  this.kiemTraRong = function (value, divId, mess) {
    // ktra tài khoản
    if (value === "") {
      // lỗi
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    } else {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
  };
  this.kiemTraDoDaiKiTu = function (value, divId, mess, min, max) {
    // hợp lệ
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    // lỗi
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
  this.kiemTraChuoiKiTu = function (value, divId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
  this.kiemTraEmail = function (value, divId, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
  this.kiemTraMatKhau = function (value, divId, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(letter)) {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    // k hợp lệ
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
  this.kiemTraNgayThang = function (value, divId, mess) {
    var letter =
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (value.match(letter)) {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    // k hợp lệ
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
  this.kiemTraTrungTaiKhoan = function (value, divId, mess, arr) {
    var status = false;
    for (var i = 0; i < arr.length; i++) {
      var nv = arr[i];
      if (nv.taiKhoan === value) {
        status = true;
        break;
      }
    }
    if (status) {
      // k hợp lệ
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
    //  hợp lệ
    getEle(divId).innerHTML = "";
    getEle(divId).style.display = "none";
    return true;
  };
  this.kiemTraLuongCB = function (value, divId, mess, min, max) {
    var number = /^[0-9]+$/;
    if (
      value.match(number) &&
      parseFloat(value) >= min &&
      parseFloat(value) <= max
    ) {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    // k hợp lệ
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
  this.kiemTraChucVu = function (value, divId, mess) {
    if (value === "Sếp" || value === " Trưởng phòng" || value === "Nhân viên") {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    // k hợp lệ
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
  this.kiemTraSoGio = function (value, divId, mess, min, max) {
    if (value >= parseFloat(min) && value <= parseFloat(max)) {
      // hợp lệ
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    // k hợp lệ
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
}
