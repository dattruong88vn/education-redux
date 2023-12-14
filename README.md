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
- Action cho biết điều gì sẽ xảy ra trong store.
- Là một Javascript Object, có chứa thuộc tính type: thể hiện loại action
- Action Creator là một function return về một action.
- Hoàn toàn có thể pass 1 action vào function dispatch, tuy nhiên khuyến khích sử dụng action creator để tránh viết code lặp đi lặp lại, khi maintain hoặc mở rộng chỉ cần sửa 1 chỗ.

```
const BUY_CAKE = "BUY_CAKE";

const buyCake = function() {
    return {
        type: BUY_CAKE
    }
}
```

### 3.2. Reducer

- Xác định app state sẽ thay đổi như thế nào khi có action gửi lên store.
- Action chỉ xác định điều gì sẽ xảy ra chứ không thể hiện state sẽ thay đổi như thế nào. Reducer đảm nhiệm vai trò này.
- Reducer là một function nhận vào 2 đối số là state trước đó và action, đồng thời return về state mới của app.

```
// initial state
const initialState = {
  numberOfCakes: 10,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    }

    default: {
      return state;
    }
  }
};
```

### 3.3. Redux Store

Là nơi quản lý store cho toàn bộ app.

Có các chức năng:

- Lưu trữ state cho app.
- Cho phép truy cập state thông qua hàm getState().
- Cho phép update state thông qua hàm dispatch(action)
- Cho phép register các listener thông qua hàm subscribe(listener): hàm subscribe nhận vào 1 tham số là function listener, và nó sẽ được thực thi mỗi khi state được update.
- Cho phép unregister các listener thông qua function được return về từ function subscribe
- Để tạo store, sử dụng function createStore từ thư viện redux

Ví dụ:

```
const redux = require('redux');

const { createStore } = redux;
const store = createStore(reducer);

// get state of store
console.log("state", store.getState());

// dispatch action
store.dispatch(buyCake());

// register listener
const unsubscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});

// unregister listenter
unsubscribe();
```

Multiple Reducer: function createStore chỉ nhận vào 1 tham số là 1 reducer. Để có thể kết hợp nhiều reducer khác nhau sử dụng function combineReducers.

- Tham số là một object với mỗi cặp key là name của reducer và value là reducer tương ứng
- Giá trị trả về là root reducer, sử dụng để truyền vào làm đối số cho function createStore.
- Ví dụ:

```
const { combineReducers } = require('redux');
...
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
```

## 4. Middleware

Là một cách được đề xuất nhằm mở rộng các chức năng của Redux.
Nó cung cấp phần mở rộng của bên thứ ba nhằm can thiệp vào giữa 2 thời điểm dispatch action và nó thực thi code trong reducer.
Sử dụng middleware để logging, reporting hay thực hiện asynchronous task (fetch api)...

Redux-logger là một middleware giúp log ra toàn bộ các thông tin liên quan đến redux.

Redux có thể kết hợp một hoặc nhiều middleware cùng lúc, tuỳ vào yêu cầu.
Để kết hợp các middleware cùng với redux, thực hiện như sau:

> Khai báo các middleware theo hướng dẫn của mỗi thư viện.
> Pass các middleware cần dùng như là tham số vào function applyMiddleware (export từ redux): applyMiddleware(middleware1, middleware2).
> Truyền giá trị trả về của function applyMiddleware làm tham số thứ 2 của function createStore: createStore(reducer, applyMiddleware(middleware1, middleware2))

```
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
...
const store = createStore(rootReducer, applyMiddleware(logger));
```
