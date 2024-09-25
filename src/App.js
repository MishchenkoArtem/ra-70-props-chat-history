import logo from './logo.svg';
import './App.css';

import { messages } from './components/constans.js';
import MessageHistory from './components/MessageHistory/MessageHistory.jsx';

function App() {
    return (
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={messages} />
          </div>
        </div>
      </div>
    );
}

export default App;
