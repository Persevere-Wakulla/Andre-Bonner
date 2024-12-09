
export default function  Day({data}){

    const weatherSwitch = data.weather === 'sunny' ? '🌞' : data.weather === 'rainy' ? '🌧' : data.weather === 'cloudy' ? '☁' : data.weather === 'thunder storm' ? '⛈' : '🌤'

    return (
      <div className="day">
        <h1>{data.day}</h1>
        <h2>{weatherSwitch}</h2>
        {data.percentageChance > 50 && <p>Bring an ☔</p>}
        <h3>Average Temp {data.averageTemp}</h3>
        {data.averageTemp > 85 && <p>Gunna be Hot! 🥵</p>}
        {data.averageTemp < 85 && <p>Little Chilly</p>}
      </div>
    );
}