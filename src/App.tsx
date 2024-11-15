import "./App.css";

function App() {
  return (
    <>
      <button onClick={() => window.open("https://example.com", "_blank")}>
        Open Safari
      </button>
    </>
  );
}

export default App;
