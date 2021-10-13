import "./index.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
