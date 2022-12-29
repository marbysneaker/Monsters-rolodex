import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

//https://jsonplaceholder.typicode.com/users
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then((users) => 
        this.setState(
          () => {
          return {monsters: users};
      }))
  };

  onSearchChange = (event) => {
    console.log(event.target.vlue);
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(
      ()=>{
        return {searchField};
      })};
  
      
  render(){

      

      const {monsters, searchField} = this.state;
      const {onSearchChange} = this;

      const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)});
      return (
      <div className="App">
        {/* <input className='search-box' type='search' placeholder = 'search monster' onChange={onSearchChange} /> */}
        <SearchBox onChangeHandler = {onSearchChange} placeholder='Search Monsters'  className='search-box'/>
        
         
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
};


export default App;
