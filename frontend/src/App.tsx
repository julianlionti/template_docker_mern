import Config from "./utils/Config";

const App = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <div>
          <h1>Main 1</h1>
        </div>
      </main>
      <footer>Footer. Enviroment: {Config.MODE}</footer>
    </>
  );
};

export default App;
