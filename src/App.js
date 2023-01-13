import './App.css';
import EmailBody from './Components/email-body';
import EmailFilter from './Components/email-filter';
import EmailList from './Components/email-list';

function App() {



  return (
  <div className="container">
     <EmailFilter />
   <main className="email-container">     
     <EmailList />
     <EmailBody />
  </main>
  </div>
  );
}

export default App;
