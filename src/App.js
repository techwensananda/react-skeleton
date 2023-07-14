import './App.css';
// import Articles from './componnets/Articles';
import ProductList from './componnets/ProductList';
import User from './componnets/User';
// import UserList from './componnets/UserList';

function App() {
  return (
    <div className="App">
     <header>
      <h1>React Skeleton
        </h1>
      </header>
      <div className='content'>
{/* <Articles />
<UserList /> */}
<ProductList/>

<User/>
    </div>
    </div>
  );
}

export default App;
