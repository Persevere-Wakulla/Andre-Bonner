import Card from './components/Card';

// Property
// Pass information from other sources, app our components

// How to pass the data
// propertyName={data}
// property names match

const cardTitle = 'Sedan';

const basicInfo =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quis delectus animi fugiat ratione, ipsam, iure dolorem itaque numquam tempore reiciendis veniam est enim dolores quibusdam beatae, ea quisquam nisi.';

//rendering through mapping
const cards = [
  {
    title: '1',
    info: 'lorem',
    buttonInfo: 'button',
  },
  {
    title: '2',
    info: 'lorem',
    buttonInfo: 'button',
  },
  {
    title: '3',
    info: 'lorem',
    buttonInfo: 'button',
  },
  {
    title: '4',
    info: 'lorem',
    buttonInfo: 'button',
  },
  {
    title: '5',
    info: 'lorem',
    buttonInfo: 'button',
  },
  {
    title: '6',
    info: 'lorem',
    buttonInfo: 'button',
  },
  {
    title: '7',
    info: 'lorem',
    buttonInfo: 'button',
  },
  {
    title: '8',
    info: 'lorem',
    buttonInfo: 'button',
  },
];

// React, functional

const button = <button>Hello</button>;
const test = [
  <Card title="1" />,
  <Card title="2" />,
  <Card title="3" />,
  <Card title="4" />,
];

const allCards = cards.map((card) => {
  return (
    <Card title={card.title} info={card.info} buttonInfo={card.buttonInfo} />
  );
});

export default function Props() {
  return (
    <section>
      {/* When using props, we want to make sure that the property we created in our component matches when we */}
      {/* Want to render it */}
      <Card title="Sedan" info={basicInfo} buttonInfo="Buy a Sedan!" />
      <Card
        title="Suv"
        info={basicInfo}
        buttonInfo="Only cool kids have Suv's"
      />
      <Card title="Luxury" info={basicInfo} buttonInfo="Peasantz" />
      <Card title="Dump truck" info={basicInfo} buttonInfo="Stinky" />
      <Card title="truck" info={basicInfo} buttonInfo="150" />
      {/* I want to render 5 cards but I dont want to type them all out */}
      {/* loop/map */}
      {/* 
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            info={card.info}
            buttonInfo={card.buttonInfo}
          />
        );
      })} */}
      {/* {allCards} */}
    </section>
  );
}
