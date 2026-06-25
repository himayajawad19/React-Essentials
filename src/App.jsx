import { CORE_CONCEPTS } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import AppHeader from './components/Header.jsx';


function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                img={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
