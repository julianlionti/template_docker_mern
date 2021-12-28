import Config from "./utils/Config";

const App = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <div>
          <h1>Main 6</h1>
        </div>
      </main>
      <footer>
        Footer. Enviroment: {Config.MODE} - URL: {Config.BASE_URL}
      </footer>
    </>
  );
};

export default App;
