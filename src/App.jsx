import reactImg from './assets/react-core-concepts.png';

const reactDescriptions=['Fundemental','Crucial','Core'];

function AppHeader(){
  const displayReactDescription=()=>{
  const randomIndex=Math.floor(Math.random()*reactDescriptions.length);
  return reactDescriptions[randomIndex];
}
return (
  <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
         {displayReactDescription()} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  </div>
)
}

function CoreConcepts(){
  return (
   
      <li>
      <img src={reactImg} alt="Stylized atom" />
      <h3>Core Concept</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      </li>
     
    
  )
}


function App() {
  return (
    <div>
    <AppHeader />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts />  
          <CoreConcepts />
           <CoreConcepts />
        </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
