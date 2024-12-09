const day = document.getElementById('userDay');
const mood = document.getElementById('userMood');
const submit = document.querySelector('button');

// Enter in the day and mood
// USER: type in the day and mood, press submit button
// Computer: When user presses the submit button
submit.addEventListener('click', fetchData);
async function fetchData() {
  // fetch our data
  const res = await fetch('data.json');
  const data = await res.json();

  // Do my comparision
  checkDayMood(day.value, mood.value, data);
}

function checkDayMood(userDay, userMood, data) {
  // Compairson
  console.log(data);
  data.date.forEach((item) => {
    if (userDay === item.day && userMood === item.mood) {
      alert('YO!');
      return;
    }
  });

  // alert('NO!');
  console.log(data);
  console.log(userDay);
  console.log(userMood);
}
//comparision
// If it matches alert some sort message
