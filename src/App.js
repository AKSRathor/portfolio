import logo from './logo.svg';
import './App.css';
import HomeLand from './Components/HomeLand';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Analytics/>
      <HomeLand/>
    </div>
  );
}

export default App;
