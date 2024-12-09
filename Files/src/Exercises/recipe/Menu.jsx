import Dish from "./components/Dish";

// Data set of the items at this
const items = {
  dishes: [
    {
      category: 'fish',
      name: 'Lobster tails and sesame Bok Choy',
      price: 24.99,
      ingredients:
        'shiitake mushroom, sesame oil, 2 lobster tails, hot cooked brown basmati or jasmine rice, 2 heads baby bok choy, white miso',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'meat',
      name: 'Coffee-Rubbed Steak with brussels salad',
      price: 29.99,
      ingredients:
        'ground coffee beans, shredded Brussels sprouts, blue cheese, black pepper, 500g hanger steak, olive oil, honey, chopped toasted pecans, ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'meat',
      name: 'Lightened-Up scotch eggs',
      price: 14.99,
      ingredients:
        'ground turkey, fresh sage, garlic clove, 4 hard-cooked large eggs, canola oil',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'garnish',
      name: 'Romesco sauce',
      price: 9.99,
      ingredients:
        '4 garlic cloves, red bell peppers, jalapeño or fresno chile, olive oil, tomato, red wine',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'desert',
      name: 'Cranberry and dark cherry clafoutis',
      price: 6.99,
      ingredients:
        'almond extract, cranberries, cinnamon, cherries, reduced-fat milk, sugar',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'desert',
      name: 'Pomegranate-poached pears',
      price: 12.99,
      ingredients:
        'pears, vanilla extract, Pinot Noir, maple syrup, pomegranate juice,reduced-fat Greek yogurt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'fish',
      name: 'Barbecued oysters with garlic',
      price: 18.99,
      ingredients:
        'onion, lemon juice, parsley leaves, garlic, 12 rock oysters',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'meat',
      name: 'Minted melon, tomato & prosciutto salad',
      price: 8.99,
      ingredients:
        'heirloom tomatoes, Charentais melon, prosciutto, red wine,  mint, crusty bread',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'meat',
      name: "John's jambalaya",
      price: 6.99,
      ingredients:
        'chicken thighs fillets, sesame oil, garlic, cherry tomatoes, fresh thyme leaves, oregano',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'meat',
      name: 'Peppered fillet steak with parsley potatoes',
      price: 34.99,
      ingredients:
        '3 large red-skinned potatoes, sesame oil, garlic, parsley, watercress salad, 2 beef fillet steaks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'fish',
      name: 'Baked sea bass with fennel',
      price: 22.99,
      ingredients:
        '2 sea bass, olive oil, basil leaves, black olives, lemon slices, fennel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      category: 'fish',
      name: 'Smoked salmon with prawns',
      price: 21.99,
      ingredients:
        '4 slices smoked salmon, olive oil, 10 large prawns, lime juice, salad leaf, root ginger',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  ],
  wines: [
    {
      category: 'white',
      name: 'Wine I',
      price: 18.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'white',
      name: 'Wine II',
      price: 22.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'white',
      name: 'Wine III',
      price: 42.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'white',
      name: 'Wine IV',
      price: 34.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'red',
      name: 'Wine V',
      price: 19.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'red',
      name: 'Wine VI',
      price: 9.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'red',
      name: 'Wine VII',
      price: 20.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'rose',
      name: 'Wine VIII',
      price: 54.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'rose',
      name: 'Wine IX',
      price: 17.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
    {
      category: 'rose',
      name: 'Wine X',
      price: 28.99,
      ingredients: 'grapes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit 13%alc.',
    },
  ],
};
// Which component needs to hold our data?
// top level component
// pass data into component

// How can I create multiple Dish components?
const allDishes = items.dishes.map((item, index)=> {
  return <Dish key={index} data={item} />
})

//! The user can provide price our allergies
// conditonally render based on their prefrences 


// TODO
// Criteria
// Concepts Expected to see
// Component Creation
// Props
// Loop through data and create a component for each item
// Conditional Rendering
// filter through the items the user can only afford/ or his prefrences 

// Create a react app that renders the items from the menu
// Conditional rendering based on the catergories of items
// Conditional rendering of what the person can afford

// Where menu being rendered?

export default function Menu() {
  return <section>
    {/* render */}
    {/* one prop, multiple props */}
    {/* <Dish data={items.dishes[0]} /> */}
    {allDishes}
  </section>;
}
