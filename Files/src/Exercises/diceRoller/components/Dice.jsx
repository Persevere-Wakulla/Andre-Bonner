import Die from './Die';

// prop passed down telling this component x amount of die to render
export default function Dice(props) {
  return (
    //
    props.dices.map((item, index) => {
      return <Die key={index} roll={item} />;
    })
  );
}
