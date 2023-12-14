# REDUX

## 1. Giới thiệu REDUX?

### Đặc điểm của Redux:

Redux là một thư viện sử dụng cho các Javascript App. Redux không chỉ sủ dụng cho React, mà còn có thể sử dụng cho Angular, Vue hoặc Vanilla JS.

Redux lưu trữ và quản lý state cho ứng dụng. State của ứng dụng bao gồm tất cả state của tất cả component.

Redux có thể dự đoán được, có nghĩa là khi sử dụng redux chúng ta hoàn toàn có thể dự đoán được giá trị của state.

### Tại sao cần sử dụng Redux?

Khi bạn muốn quán lý state của application theo một cách có thể dự đoán được, Redux có thể thực hiện điều này.

### Tại sao cần sử dụng Redux cho React Application?

Bản thân React Component đã có state, tại sao phải cần thêm 1 thư viện để quản lý state?

Nếu sử dụng State Component, việc truyền dữ liệu giữa các Component lồng nhau nhiều cấp sẽ rất khó khăn, nhiều Component trung gian mặc dù không sử dụng data nhưng vẫn khai báo Props để có thể truyền data đến các component con.

Vấn đề truyền data giữa nhiều Component lồng nhau, bản thân React cũng đã có một cách để xử lý. Đó là context (hoặc useContext + useReducer). Tuy nhiên, Redux được giới thiệu vào năm 2015 thời điểm trước khi context được React giới thiệu.

### React-Redux package

React là một thư viện build UI và Redux là một thư viện quản lý state. 2 thư viện này hoạt động độc lập với nhau. Việc sử dụng Redux trực tiếp với React khá phức tạp và khó sử dụng, do vâỵ cần có React-Redux để kết hợp 2 thư viện trên với nhau.

React-Redux cung cấp một số tính năng và methods để có thể connect React App với Redux.

## 2. Các nguyên tắc của Redux (3 nguyên tắc)

- State của toàn bộ application được lưu trữ trong một Object. Object này được quản lý bởi Redux Store.
- Cách duy nhất để thay đổi state là phát ra một Action, không thể update trực tiếp lên state Object. Một action là một object, object này có chưa thuộc tính TYPE để mô tả cho action.
- Để xác định state object sẽ thay đổi như thế nào khi có action, chúng ta cần tạo ra một Pure Reducer. Pure Reducer là một pure Function, nhận vào 2 tham số là state trước đó và action, giá trị trả về là state mới.

## 3. Các khái niệm cơ bản của Redux

- STORE: lưu trữ state của application.
- ACTION: mô tả sự thay đổi trong state của application.
- REDUCER: tiến hành thay đổi state dựa vào action.

### 3.1. Actions

- Là cách duy nhất để app có thể tương tác với store.
- Mang một số thông tin từ App và truyền vào Redux store.
- Là một Javascript Object, có chứa thuộc tính type: thể hiện loại action
  `const actionBuyCake = {
      type: "BUY_CAKE"
  }`
- Action Creator là một function return về một action.
  `const actionCreatorByCake = function() {
      return {
          type: "BUY_CAKE"
      }
  }`
