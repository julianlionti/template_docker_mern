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
      <footer
        style={{
          color:
            Config.MODE === "development"
              ? "red"
              : Config.MODE === "test"
              ? "blue"
              : "orange",
        }}
      >
        Footer. Enviroment: {Config.MODE} - URL: {Config.BASE_URL}
      </footer>
    </>
  );
};

export default App;
