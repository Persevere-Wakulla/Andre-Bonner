function Item({ name, isPacked }) {
  // true do something
  //   With react we can still use if statements
  //   If statement
  // const test = 'abc'
  // const test2 = 5
  // if (typeof test === 'string' && typeof test2 === 'number'){
  //     return <h1>Their Both true</h1>
  // }

  if (isPacked) {
    return (
      <>
        <p>Please Bring this!</p>
        <li style={{ color: 'green' }} className="item">
          {name} ✔
        </li>
      </>
    );
  }
  return <li className="item">{name} ❌</li>;
  //   to render Nothing use null or ''
  // If its not true
}

function TernaryItem({ name, isPacked }) {
  const renderList = isPacked ? (
    <li className="item">{name} ✔</li>
  ) : (
    <li className="item">{name} ❌</li>
  );

  return isPacked ? (
    <del>
      <li className="item">{name} ✔</li>
    </del>
  ) : (
    <li className="item">{name} ❌</li>
  );
  renderList;
}

function AndItem({ name, isPacked }) {
  return (
    <li className="item">
      {/* && will render the thing on the right if the conditon on the left is true */}
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  const render = true;
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {/* Ternarny Operator */}
        {/* condtion you want to be true ? result when condition true : else fallback */}
        {/* if you want to render inside the return we use ternary? */}
        {render ? <Item name="Sunscreen" /> : <h1>Nothing to pack.</h1>}
        <TernaryItem isPacked={true} name="Water" />
        <AndItem isPacked={false} name="Snacks" />
        <AndItem isPacked={true} name="Pizza" />
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
