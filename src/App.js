import './App.css';
// import Articles from './componnets/Articles';
// import ProductList from './componnets/ProductList';
import User from './componnets/User';
import RegisterForm from './componnets/login/Register';
// import LoginForm from './componnets/login/Login';
// import RatingComponent from './componnets/ratings/RatingComponent';
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
{/* <ProductList/> */}
{/* <RatingComponent /> */}
{/* <LoginForm /> */}
<RegisterForm/>
<User/>
    </div>
    </div>
  );
}

export default App;
