import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import URLShrinking from './URLShrinking.jsx';
import Footer from './Footer.jsx';
function App() {
  return (
    <div className="container">
      <Header />
      <URLShrinking/>
      <Footer year={2024}/>
    </div>
  );
}



export default App;
