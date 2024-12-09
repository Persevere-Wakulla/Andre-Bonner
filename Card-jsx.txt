// Props para/arguments in a function

// props are obj that contain property:value pairs of what was passed through them

// created one card component, I can pass data through it

// add your props to you html elements
// props is an obj {title,info,buttonInfo}
export default function Card({ title, info, buttonInfo }) {
  // props.property
  // console.log(props)
  // inline Styling, expecting a obj
  const styles = { backgroundColor: 'lightblue', marginTop: '2em' };
  return (
    <div
      className="card"
      style={{ backgroundColor: 'lightblue', marginTop: '2em' }}
    >
      <h1>{title}</h1>
      <p>{info}</p>
      <button>{buttonInfo}</button>
    </div>
  );
}
