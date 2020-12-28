import './App.css';
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import {Container} from "react-bootstrap";
import HomePage from "./pages/home/home.component";

const App = () => {
  return (
      <>
        <Header/>
        <main className='py-3'>
          <Container>
            <HomePage/>
          </Container>
        </main>
        <Footer/>
      </>
  );
}

export default App;
