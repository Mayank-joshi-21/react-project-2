import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';


const App = () => {
  return (
    <div>
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App;

