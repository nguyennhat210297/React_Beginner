// Class Component
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(props){ // constructor là phương thức được gọi tự động bởi 'new" chúng ta có thể khởi tạo đối tượng ở đó
    super(props); // super.method() để gọi một phương thức cha, super(); để gọi một parent constructor, chỉ bên trong contructor

    this.state = { // chứa nhiều loại thuộc tính.
      monsters: [],
      // set gia tri cua tim kiem = trong de tra ve toan bo du lieu
      searchField1: '',
      somacdinh: 12,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // Life Cycle Methods
  componentDidMount(){
    //fetch dùng khi JS gửi yêu cầu lên máy chủ và lấy thông tin mới bất cứ khi nào cần
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse => reponse.json())
    .then(user => this.setState({monsters: user}))
  }
  handleChange = (e) => {
    this.setState({searchField1: e.target.value});
    //TypeError: Unable to get property 'setState' of undefined or null reference
  }
  handleSo = () =>{
    this.setState((preState, preProps) =>{
      return {somacdinh: preState.somacdinh + preProps.increment}
    }, (e) => {});
    console.log(this.state.somacdinh)
  }
  render(){
    const { monsters, searchField1, title } = this.state;
    //fillter Phuong pháp tìm kiếm phần tử đơn lẻ và trả về true
    const filteredMonsters = monsters.filter(monte =>
      monte.name.toLowerCase().includes(searchField1.toLowerCase()));
    return (
      <div className="App">
        <p>{this.state.somacdinh}</p>
        <button
          onClick={this.handleSo}
        >
          Thay đổi
        </button>
        <h1>Trang Chủ</h1>
        <SearchBox
          placeholder='Tìm kiếm!'
          handleChange={this.handleChange}
        />
        <CardList nhat = {filteredMonsters}>
        
        </CardList>
      </div>
    );

  }
}
export default App;
