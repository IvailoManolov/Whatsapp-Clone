import './App.css'
import ChatComponent from './ChatComponent'
import MainSideBar from './MainSideBar'

function App() {
  return (
    <div className="App">
      <div className="Application_body">
        <MainSideBar />
        <ChatComponent />
      </div>
    </div>
  );
}

export default App
