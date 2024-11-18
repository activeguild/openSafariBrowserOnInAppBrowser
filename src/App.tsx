import "./App.css";

function App() {
  return (
    <>
      <div>{window.navigator.userAgent}</div>
      <button onClick={() => window.open("https://example.com", "_blank")}>
        Open Safari(s)
      </button>
      <button onClick={() => window.open("http://example.com", "_blank")}>
        Open Safari
      </button>
      <button onClick={() => window.open("googlechromes://example.com", "_blank")}>
        Open Chrome(googlechromes)
      </button>
    </>
  );
}

export default App;
