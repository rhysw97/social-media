import logo from './logo.svg';
import './App.css';
import CreatePost from './components/post-system/create-post'
import Login from './components/login';
import Register from './components/register/register';

//allow user to post
function App() {
  return (
    <div className="App">
      <Register/>
    </div>
  );
}

export default App;
