import logo from './logo.svg';
import './App.css';
import HomeLand from './Components/HomeLand';
import { Analytics } from "@vercel/analytics/react"
import Chatbot from './Components/Chatbot';

function App() {
  return (
    <div className="App">
      {/* <Analytics/> */}
      <Chatbot/>
      <HomeLand/>
    </div>
  );
}

export default App;
