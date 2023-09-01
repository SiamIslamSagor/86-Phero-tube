/* const oneDay = 60 * 60 * 24;
const oneHour = 60 * 60;
const oneMinuit = 60;

const timeTextStyle = (formatTime, seconds) => {
  const formatResult = formatTime(seconds);
  console.log(formatResult);
    const div = document.createElement("div");
  div.innerHTML = `
  <p class = "p-1 rounded-md bg-black text-white font-medium">${formatResult}</p>
  `;
};

function formatTime(seconds) {
  const days = Math.floor(seconds / oneDay);
  const hours = Math.floor((seconds % oneDay) / oneHour);
  const minutes = Math.floor(((seconds % oneMinuit) * oneMinuit) / oneMinuit);

  let result = "";
  if (days > 0) {
    result += days + " days ";
  }
  if (hours > 0) {
    result += hours + " hrs ";
  }
  if (minutes > 0) {
    result += minutes + " min ";
  }

  return result + "ago";
} */

/* const seconds = 985930;
const formattedTime = formatTime(seconds);
console.log(formattedTime); */

/* const seconds = 498732;
timeTextStyle(formatTime, seconds); */

// const data = "10000k";
// const cut = data.slice(0, 3);
// const cutNumber = parseInt(cut);
// console.log(cutNumber);

// ================================

//time formatting:
const oneDay = 60 * 60 * 24;
const oneHour = 60 * 60;
const oneMinuit = 60;

const timeTextStyle = (formatTime, seconds) => {
  const formatResult = formatSecond(seconds);
  console.log(formatResult);
  /*   const div = document.createElement("div");
  div.innerHTML = `
  <p class = "p-1 rounded-md bg-black text-white font-medium">${formatResult}</p>
  `; */
};

function formatSecond(seconds) {
  console.log(seconds);
  const days = Math.floor(seconds / oneDay);
  console.log(days);
  const hours = Math.floor((seconds % oneDay) / oneHour);
  console.log(hours);
  const minutes = Math.floor(((seconds % oneMinuit) * oneMinuit) / oneMinuit);
  console.log(minutes);

  let result = "";
  if (days > 0) {
    result += days + " days ";
  }
  if (hours > 0) {
    result += hours + " hrs ";
  }
  if (minutes > 0) {
    result += minutes + " min ";
  }

  return result + "ago";
}

loadData();
handleCategory(1000);

function log(any) {
  console.log(any);
}
// <a></a>
// class="px-4 py-2 focus:bg-red-500 focus:text-white rounded-md bg-gray-100 font-semibold"
