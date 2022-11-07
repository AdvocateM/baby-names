import './App.css';
import NameList from './components/NameList';
import Search from './components/Search';
import ShortList from './components/ShortList';

function App({ data }) {
  //Constructor(props){
    //super(props)
    //this.this.state = {
     // filterText: ''
    //}
 // }
//   const nameList = data.map(name => {
//     return <li key={name.id} className={name.sex}>{name.name}</li>
//   })
  return (
    <div className="App">
      <main>
        <Search />
        <ShortList />
        <NameList data={data} />
      </main>
    </div>
  );
}

export default App;
