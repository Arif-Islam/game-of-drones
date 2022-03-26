import './App.css';
import Footer from './components/Footer/Footer';
import QA from './components/QA/QA';
import Shop from './components/Shop/Shop';
import Subtitle from './components/Subtitle/Subtitle';
import Title from './components/Ttitle/Title';

function App() {
  return (
    <div>
      <Title></Title>
      <Subtitle></Subtitle>
      <Shop></Shop>
      <QA></QA>
      <Footer></Footer>
    </div>
  );
}

export default App;
