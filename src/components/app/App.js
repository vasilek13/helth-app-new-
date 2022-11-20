import './App.css';
import Layout from '../UI/menuBurger/menu';
import PaginationTableComponent from '../UI/bigTable/MainTable';

function App() {
  return (
    <PaginationTableComponent/>
    /*<Layout/>*/
    /*<Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Card icon={bag} title='dfdsf' volum='dsdad'/>
          <Search />
          <AsideItem font='appointments' link='/'>jkfsjf</AsideItem>
          <AsideItem font='appointments' link='/kdsd'>jkfsjf</AsideItem>
          <Table />
        </Route>
      </Switch>
    </div>
  </Router>*/
  );
}

export default App;
