import componentsImg from '../assets/components.png';

function CoreConcepts(props) {
  return (

    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </li>


  )
}

export default CoreConcepts;