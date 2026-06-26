import { CORE_CONCEPTS } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import AppHeader from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const tabButtonTitle = ["Components", "JSX", "Props", "State"];
  const [stateOfButton, setStateOfButton] = useState("components");
  const buttonClickHandler = (selectedButton) => {

    setStateOfButton(selectedButton);
  };
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabButtonTitle.map((title) => {
          
              return (
                <TabButton
                  key={title}
                  isSelected={stateOfButton === title.toLowerCase()}
                  onClick={() => buttonClickHandler(title.toLowerCase())}
                >
                  {title}
                </TabButton>
              );
            })}

          </menu>
          {
            <div id="tab-content">
              <h3>{EXAMPLES[stateOfButton.toLowerCase()].title}</h3>
              <p>{EXAMPLES[stateOfButton.toLowerCase()].description}</p>
              <pre>
                <code>{EXAMPLES[stateOfButton.toLowerCase()].code}</code>
              </pre>
            </div>
          }

        </section>




      </main>
    </div>
  );
}

export default App;
