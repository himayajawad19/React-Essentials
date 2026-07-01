import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data.js';
export default function CoreConcepts(props) {
  return (<section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept
          key={concept.title}
          img={concept.image}
          title={concept.title}
          description={concept.description}
        />
      ))}
    </ul>
  </section>);
}