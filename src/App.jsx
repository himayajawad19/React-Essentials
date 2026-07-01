import CoreConcepts from './components/CoreConcepts.jsx';
import AppHeader from './components/Header.jsx';
import TabButtons from './components/TabButtons.jsx';

function App() {
 
  return (
    <>
      <AppHeader />
      <main>
       <CoreConcepts />
      <TabButtons/>
      </main>
    </>
  );
}

export default App;
