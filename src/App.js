import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  const profile = {
    name : "Faress",
    lastName : "Mejri",
    bio : "Im Creative Developper",
    profession : "Softwar Engineer",
    picture : "https://www.internships.com/wp-content/uploads/2019/09/software-engineer-600x400.jpg"
  }
  return (
    <div className="App">
      <Profile {...profile}/>
    </div>
  );
}

export default App;
