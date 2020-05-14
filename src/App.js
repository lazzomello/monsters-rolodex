import React,{Component} from 'react';
import CardList from './components/card-list/card-list.component'
import Searchbox from './components/search-box/search-box.component'
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
  
  handleChange=e=>{
    this.setState({
      searchField:e.target.value
    })
  }
   
   
  render(){
  
  const {monsters,searchField} = this.state
  const filtered= monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())
  const monstersFiltered = monsters.filter(filtered)

  return (
    <div className="App">
      <Searchbox handleChange={this.handleChange} placeholder='Search box'/>
      <CardList monsters={monstersFiltered}/>
    </div>
  );
  }
}

export default App;
