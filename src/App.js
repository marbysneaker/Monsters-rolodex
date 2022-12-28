import { Component } from 'react';



import './App.css';

//https://jsonplaceholder.typicode.com/users
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then((users) => 
        this.setState(
          () => {
          return {monsters: users};
      },
          () => {
            console.log(this.state);
          }));
  }

  onSearchChange = (event) => {
    console.log(event.target.vlue);
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(
      ()=>{
        return {searchField};
      })};
  
      
  render(){

      console.log('render');

      const {monsters, searchField} = this.state;
      const {onSearchChange} = this;

      const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)});
      return (
      <div className="App">
        <input className='search-box' type='search' placeholder = 'search monster' onChange={onSearchChange} />
        {
          filteredMonsters.map((monster) => {
            return <div key={monster.name}>
              <h1>{monster.name}</h1></div>;
          })
        }
        
      </div>
    );
  }
};


export default App;
