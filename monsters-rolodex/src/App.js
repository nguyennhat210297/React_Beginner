// Class Component
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component{

  constructor(){ // constructor là phương thức được gọi tự động bởi 'new" chúng ta có thể khởi tạo đối tượng ở đó
    super(); // super.method() để gọi một phương thức cha, super(); để gọi một parent constructor, chỉ bên trong contructor

    this.state = { // chứa nhiều loại thuộc tính.
      monsters: [],
      searchField1: ''
    };
  }
  // Life Cycle Methods
  componentDidMount(){
    //fetch dùng khi JS gửi yêu cầu lên máy chủ và lấy thông tin mới bất cứ khi nào cần
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse => reponse.json())
    .then(user => this.setState({monsters: user}))
  }
  render(){

    return (
      <div className="App">
        <input type='search' placeholder='Tim kiem?' onChange={e => {
          this.setState({searchField1: e.target.value}, ()=> console.log(this.state));
          
        }}
          />

        <CardList nhat = {this.state.monsters}>
        
        </CardList>
      </div>
    );

  }
}
export default App;
