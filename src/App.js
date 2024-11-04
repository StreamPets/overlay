import { ListenerProvider } from 'contexts/listenerContext';
import './App.css';
import StreamPets from './components/StreamPets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListenerProvider>
          <StreamPets />
        </ListenerProvider>
      </header>
    </div>
  );
}

export default App;
