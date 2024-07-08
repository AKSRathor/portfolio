import logo from './logo.svg';
import './App.css';
import HomeLand from './Components/HomeLand';
import { Analytics } from "@vercel/analytics/react"
import Chatbot from './Components/Chatbot';

const myfunc = async()=> {
  const response = await fetch(`https://llm-verifier.vercel.app/selectmodel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ })
  })
  await response.json()

}
myfunc()

function App() {
  return (
    <div className="App">
      <Analytics/>
      <Chatbot/>
      <HomeLand/>
    </div>
  );
}

export default App;
