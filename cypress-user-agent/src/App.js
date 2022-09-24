import logo from "./logo.svg";
import "./App.css";

const isiOSDevice = () =>
  navigator.vendor === "Apple Computer, Inc." ||
  (/iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream);

function App() {
  const isIOS = isiOSDevice();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className={`ios-${isIOS}`}>
          <p>
            are we on iOS device? <code>{isIOS.toString()}</code>
            <br /> navigator.userAgent is: {navigator.userAgent}
          </p>
          {isIOS ? (
            <p>
              hence we would see <span>blue</span> color
            </p>
          ) : (
            <p>
              hence we would see <span>red</span> color
            </p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
