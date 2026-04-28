import "./assets/styles/App.css";

import { ControlPanel, Footer, Header, GamePanel } from "./components";

function App() {
  return (
    <div id="container">
      <Header />
      <main>
        <ControlPanel />
        <GamePanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
