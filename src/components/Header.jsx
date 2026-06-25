import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundemental', 'Crucial', 'Core'];
function AppHeader() {
  const displayReactDescription = () => {
    const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
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

export default AppHeader;