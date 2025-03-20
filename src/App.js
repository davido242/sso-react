import './App.css';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
      <header className="App-header container px-8">
        <h1 className='text-center'>OnlineMD Web Development Ent.</h1>
        <GoogleLogin onSuccess={() => alert("Success!")} onError={() => alert("Error!")} />
      </header>
    </div>
  );
}

export default App;