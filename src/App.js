import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Orders from "./components/Orders.jsx";
import Prototypes from "./components/Prototypes.jsx";
import AppStateProvider from "./Providers/AppStateProvider.jsx";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
