// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/CardList/CardListComp';
import SearchBox from './components/SearchBox/SearchBoxComp';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => { return res.json() }).then(data => { return setMonsters(data) }).catch(err => console.log(err))
  }, [])
  const searchAndFilter = (event) => {
    const searchString = event.target.value.toLowerCase();
    return setSearchTerm(searchString)
  }

  useEffect(() => {
    const newFilteredMonster = monsters.filter(monster => { return monster.name.toLowerCase().includes(searchTerm); })
    return setfilteredMonsters(newFilteredMonster)
  }, [monsters, searchTerm])



  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox onChangeHandler={searchAndFilter} thePlaceholder="Search monsters" className="search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  )


}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchTerm: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then(res => { return res.json() }).then(users => {
//       this.setState({ monsters: users }
//       )
//     }).catch(err => console.log('err'))
//   };
//   searchAndFilter = (event) => {
//     this.setState(() => {
//       return { searchTerm: event.target.value.toLowerCase() }
//     })
//   };
//   render() {
//     const { monsters, searchTerm } = this.state;
//     const { searchAndFilter } = this;
//     const filteredList = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchTerm);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title"> Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={searchAndFilter} thePlaceholder="Search monsters" className="search-box" />
//         <CardList monsters={filteredList} />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
