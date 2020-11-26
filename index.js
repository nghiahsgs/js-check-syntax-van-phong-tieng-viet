// //loi systax => false
const check_systax = (str)=>{
    // keyword 18+
    var L = ['câu lạc bộ thoát y','phim khiêu dâm','đồ chơi tình dục','tạp chí người lớn','sản phẩm tăng cường sinh lý','mai mối','người mẫu có tư thế kích dục','Sex','thuốc lá','mụn','sẹo','yếu sinh lý','Bộ phận nhạy cảm của con người','giảm cân','tăng cân','rượu','Xương','khớp','Viêm Xoang','Thực phẩm chức năng','Ăn kiêng','Hộ chiếu','Bằng lái xe','Sổ đỏ','Sổ hộ Khẩu Hẹn hò','Sắc thái','Gan','Quả tim','Xương khớp','Viêm Xoang','Bác sĩ điều trị','khỏi bệnh','Chết chóc','Đau đớn','Tuyệt vọng','Tự tử','tử nạn','Vay','Vay vốn','Tiền tệ','tài chính','Vay tín chấp','Vay tín dụng','Lãi xuất Thuế Cho vay vốn','Giải ngân','Vitamin','omega','axit','chất sơ','thành phần dược liệu','Ông kia','bà nọ','Chú','cô','anh','em','nữ giới','Nam giới','Nước Anh','Nước Pháp','Nước Đứ','Nước Mỹ','Người da đen','người da trắng','dân tộc','Đào Tạo nghề','Việc làm','cho thuê văn phòng nhà ở','Camera theo dõi','Camera an ninh','Nội dung mang tính cam kết','Hiệu quả cam kết','Lỗi hình ảnh cận cảnh bộ phận cơ thể','bia','rượu','rượu sake','rượu cồn hoặc rượu mạnh','sâm banh','rượu nặng','bia không chứa cồn','rượu không chứa cồn và rượu cồn chưng cất không chứa cồn'];
    if(L.includes("str")) return false

        
      //pattern vi pham
      // https://blog.telex.vn/2019/10/quy-tac-dau-cau-va-ky-hieu.html?m=1

      let patt = /\s\./g  //truoc . co khoang trang
      if(str.match(patt)) return false
      
      patt = /\.[^\s]/g; //sau . ko co khoang trang
      if(str.match(patt)) return false

      patt = /\s\,/g // truoc , co khoang trang
      if(str.match(patt)) return false

      patt = /\,[^\s]/g; // sau , ko co khoang trang
      if(str.match(patt)) return false

      patt = /\s\;/g // truoc dau ; co khoang trang
      if(str.match(patt)) return false

    patt = /\;[^\s]/g; // sau dau ; khong co khoang trang
    if(str.match(patt)) return false

    patt = /\s\:/g //truoc dau : co khoang trang
    if(str.match(patt)) return false

    patt = /\:[^\s]/g; //sau dau : khong co khoang trang
    if(str.match(patt)) return false

    patt = /\s\!/g //truoc dau ! co khoang trang
    if(str.match(patt)) return false

    patt = /\![^\s]/g; //sau dau ! khong co khoang trang
    if(str.match(patt)) return false

    patt = /\s\?/g //truoc dau ? co khoang trang
    if(str.match(patt)) return false

    patt = /\?[^\s]/g; //sau dau ? khong co khoang trang
    if(str.match(patt)) return false

    patt = /\s\-/g //truoc dau - co khoang trang
    if(str.match(patt)) return false

    patt = /\-\s/g//sau dau - co khoang trang
    if(str.match(patt)) return false

    patt = /\s\//g //truoc dau / co khoang trang
    if(str.match(patt)) return false

    patt = /\/\s/g//sau dau / co khoang trang
    if(str.match(patt)) return false

    patt = /\s\.\.\./g //truoc dau ... co khoang trang
    if(str.match(patt)) return false

    patt = /\.\.\.[^\s]/g; //sau dau ... khong co khoang trang
    if(str.match(patt)) return false

    patt = /[^\s]\(/g;//truoc dau ( ko co khoang trang
    if(str.match(patt)) return false

    patt = /\(\s/g //sau dau ( co khoang trang
    if(str.match(patt)) return false

    patt = /\s\.../g //truoc dau ) co khoang trang
    if(str.match(patt)) return false

    patt = /\)[^\s]/g; //sau dau ) ko co khoang trang
    if(str.match(patt)) return false

    patt = /[^\s]\[/g; //truoc dau [ ko co khoang trang
    if(str.match(patt)) return false

    patt = /\[\s/g //sau dau [ co khoang trang
    if(str.match(patt)) return false

    patt = /\s\]/g //truoc dau ] co khoang trang
    if(str.match(patt)) return false

    patt = /\][^\s]/g; //sau dau ] ko co khoang trang
    if(str.match(patt)) return false

    patt = /[^\s]\{/g; //truoc dau { ko co khoang trang
    if(str.match(patt)) return false

    patt = /\{\s/g //sau dau { co khoang trang
    if(str.match(patt)) return false

    patt = /\s\}/g //truoc dau } co khoang trang
    if(str.match(patt)) return false

    patt = /\}[^\s]/g; //sau dau } ko co khoang trang
    if(str.match(patt)) return false
    
    return true

}
let x = check_systax('nguyen ba , nghia')
console.log(x)
x = check_systax('Ông kia')
console.log(x)
