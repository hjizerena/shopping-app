import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import {Container} from "react-bootstrap";
import HomePage from "./pages/home/home-page.component";
import ProductPage from "./pages/product/product-page.component";

const App = () => {
  return (
      <Router>
        <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomePage} exact/>
            <Route path='/product/:id' component={ProductPage}/>
          </Container>
        </main>
        <Footer/>
      </Router>
  );
}

export default App;
