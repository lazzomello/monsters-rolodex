import React,{Component} from 'react';
import CardList from './components/card-list/card-list.component'
import SearchField from './components/SearchField/SearchField.component'
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      monsters:[],  
      searchField:''
    }
  }

  async componentDidMount(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    this.setState({monsters:data})
  }
  
   
   
  render(){
  
  const {monsters,searchField} = this.state
  const filtered= monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())
  const monstersFiltered = monsters.filter(filtered)

  return (
    <div className="App">
      <input onChange={e=>this.setState({searchField:e.target.value})} type="search" placeholder="Search monster"/>
      <CardList monsters={monstersFiltered}/>
    </div>
  );
  }
}

export default App;
