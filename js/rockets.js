let rockets = [
  {
    id: "Explorer",
    img: "./img/rocketman.png",
    h3: "Explorer",
    p1: "$",
    p2: "Affordable Exploration",
  },
  {
    id: "Adventurer",
    img: "./img/rocketride.png",
    h3: "Adventurer",
    p1: "$$",
    p2: "Best Selling Rocket!",
  },
  {
    id: "Infinity",
    img: "./img/rocketlaunch.png",
    h3: "Infinity",
    p1: "$$$",
    p2: "Luxury Starship",
  },
];

const generatRockets = (arr) => {
  let items = "";
  arr.map((rocket) => {
    items += `<li
    class="flex w-2/3 flex-col items-center rounded-xl border border-solid border-slate-900 bg-white py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
    <img src="${rocket.img}" alt="${rocket.id}" class="mb-6 w-1/2" />
    <h3 class="text-center text-3xl text-slate-900 dark:text-white">
        ${rocket.h3}
    </h3>
    <p class="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
        ${rocket.p1}
    </p>
    <p class="dark:text-text-slate-400 mt-2 block text-center text-2xl text-slate-500 sm:hidden">
        ${rocket.p2}
    </p>
</li>`;
  });
  return items;
};

document.getElementById("rocketsList").innerHTML = generatRockets(rockets);
