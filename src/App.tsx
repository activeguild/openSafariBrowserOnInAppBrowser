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
      <button onClick={() => window.open("http://example.com?openExternalBrowser=1", "_blank")}>
        For LINE
      </button>
      <button onClick={() => window.open("googlechromes://example.com", "_blank")}>
        Open Chrome(googlechromes)
      </button>
      <button onClick={() => window.open("https://apps.apple.com/jp/app/safari/id1146562112", "_blank")}>
        Safari Install
      </button>
    </>
  );
}

export default App;
