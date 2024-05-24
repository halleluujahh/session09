# Array JS: Mảng dùng để chứa các phần tử và các phần tử có thể là các kiểu dữ liệu khác nhau
- Cú pháp khai báo mảng: 
let numbers = [];
- Giữa các phần tử phân cách bởi dấu phẩy.
- Có 2 loại:
+ 1 chiều.
+ 2 chiều (nhiều chiều).
- Để đếm số phần tử trong mảng: tên mảng + ".length" độ dài của mảng hay còn gọi số các phần tử trong mảng.
# Stack và heap
- Stack:
+ Là bộ nhớ cố định về không gian và vị trí trên ổ đĩa.
+ Quản lý bởi hệ điều hành.
+ Kích thước bộ nhớ biết trước.
+ Biến lưu trữ trong ô nhớ stack sẽ kết thúc khi kết thúc 1 phương thức hoặc block-scope.
+ Stack không đủ sẽ dẫn đến stack overflow trong trường hợp nhiều hàm lồng nhau hay đệ quy nhiều lần dẫn tới không đủ vùng nhớ.
- Heap:
+ Là bộ nhớ phân bổ cấu trúc dữ liệu có kích thước động.
+ Quản lý bởi lập trình viên.
+ Kích thước bộ nhớ sẽ được tăng kích thước bởi cơ chế của hệ điều hành nếu không đủ do được cấp phát động.
+ Biến lưu trữ sẽ được gán địa chỉ ô nhớ.
+ Biến lưu trữ trong heap sẽ kết thúc, giải phóng trong runtime.
+ Quản lý bộ nhớ phức tạp hơn.
# CRUD với mảng:
- C: Create: thêm mới: 
+ dùng phương thức push(): sẽ thêm phần tử vào cuối mảng.
+ dùng phương thức unshift(): sẽ thêm phần tử vào đầu mảng.
+ thêm vào vị trí bất kì dùng phương thức splice(vị trí, số phần tử muốn xóa sau vị trí, giá trị phần tử thêm vào vị trí).
- R: Read: đọc, in ra:
+ dùng for.
- U: Update: cập nhật.
+ tên mảng[vị trí] = "giá trị mới".
+ dùng splice().
- D: Delete: xóa.
+ dùng phương thức shift(): sẽ xóa phần tử vào đầu mảng.
+ xóa cuối dùng phương thức pop();

- Các phương thức có sẵn của JS:
+ reverse: đảo ngược mảng.
+ split(kí tự): Phân tách các phần tử của chuỗi theo kí tự đã đặt.
+ join(kí tự): Nối các phần tử của chuỗi theo kí tự đã đặt.
