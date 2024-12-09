import Day from "./components/Day"
// Fake Weather App

// Sun - Sat
// Temp
// Weather
// Component for a day and weather
// Conditional Rendering your components based on the day, temp, weather

// Extra weekly forecast
// daily forecast
// hour forecast

// Test data example
const data = [
    {
        day: 'Sunday',
        averageTemp: 105,
        weather: 'sunny',
        percentageChance : 50
    },
    {
        day: 'Monday',
        averageTemp: 75,
        weather: 'rainy',
        percentageChance : 50
    },
    {
        day: 'Tuesday',
        averageTemp: 65,
        weather: 'rainy',
        percentageChance : 80
    },
    {
        day: 'Wednesday',
        averageTemp: 65,
        weather: 'thunder storm',
        percentageChance : 100
    },
    {
        day: 'Thursday',
        averageTemp: 85,
        weather: 'clear day',
        percentageChance : 40
    },
    {
        day: 'Friday',
        averageTemp: 95,
        weather: 'sunny',
        percentageChance : 50
    },
    {
        day: 'Saturday',
        averageTemp: 75,
        weather: 'cloudy',
        percentageChance : 50
    },
    // Add rest of the week
]
export default function Weather(){
    return (
        <div className="forecast">
            {data.map(day => <Day data={day} />)}
        </div>
    )
}