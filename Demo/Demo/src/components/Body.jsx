// method 2. Creating a component outside of our App.jsx

// How to use JS in component
// 1. Outside of the component
// 2. inside the component
// 1. normal js syntax
const dogPicture =
  'https://media-be.chewy.com/wp-content/uploads/2022/09/27095740/golden-retriever-cute-dogs.jpg';

// If we want to use this component we need to export it
// export/import send js from other files into another file
// export hey I want to use the somewhere else, default this is the only export I am using
export default function Body (){

    const anotherPicture =
      'https://media.cnn.com/api/v1/images/stellar/prod/150627125003-04-ugliest-dog-0627.jpg?q=w_2000,h_1125,x_0,y_0,c_fill';

    return (
        <div>
            {/* To activate JS in Component/jsx we use {} */}
            <img src={dogPicture} alt="" />
            <img src={anotherPicture} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore expedita vel! Vero, ea nulla saepe nemo recusandae voluptate assumenda natus. Nostrum, veritatis iure! Atque iure soluta laborum reprehenderit totam.</p>
            <textarea name="" id=""></textarea>
        </div>
    )
}