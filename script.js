const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const menuData = {
  Monday: {
    title: "Monday",
    items: {
      "Rice": "-",
      "Dal": "-",
      "Sabzi": "-",
      "Roti": "-",
      "Pickle": "-",
      "Salad": "-",
      "Sweetdish/Raita": "-"
    }
  },

  Tuesday: {
    title: "Tuesday",
    items: {
      "Rice": "Jeera Rice",
      "Dal": "Rajmah Dal",
      "Sabzi": "Gobhi Aloo Matar",
      "Roti": "Chapati",
      "Pickle": "Pickle",
      "Salad": "Salad",
      "Sweetdish/Raita": "Boondi Raita"
    }
  },

  Wednesday: {
    title: "Wednesday",
    items: {
      "Rice": "Plain Rice",
      "Dal": "Kadhi Pakoda",
      "Sabzi": "Jeera Aloo",
      "Roti": "Chapati",
      "Pickle": "Pickle",
      "Salad": "Salad",
      "Sweetdish/Raita": "Jalebi"
    }
  },

  Thursday: {
    title: "Thursday",
    items: {
      "Rice": "Rice",
      "Dal": "Chole",
      "Sabzi": "South Indian Aloo",
      "Roti": "Bhature",
      "Pickle": "Pickle",
      "Salad": "Lachha Onion",
      "Sweetdish/Raita": "Boondi Raita"
    }
  },

  Friday: {
    title: "Friday",
    items: {
      "Rice": "Jeera Rice",
      "Dal": "Dal Makhani",
      "Sabzi": "Mix Veg",
      "Roti": "Chapati",
      "Pickle": "Pickle",
      "Salad": "Salad",
      "Sweetdish/Raita": "Suji Halwa"
    }
  },

  Saturday: {
    title: "Saturday",
    items: {
      "Rice": "Plain Rice",
      "Dal": "Mix Dal",
      "Sabzi": "Cabbage Matar",
      "Roti": "Tandoori Roti",
      "Pickle": "Pickle",
      "Salad": "Mix Salad",
      "Sweetdish/Raita": "Dahi"
    }
  },

  Sunday: {
    title: "Sunday",
    items: {
      "Rice": "-",
      "Dal": "-",
      "Sabzi": "-",
      "Roti": "-",
      "Pickle": "-",
      "Salad": "-",
      "Sweetdish/Raita": "-"
    }
  }
};

const dayPill = document.getElementById("dayPill");
const subTitle = document.getElementById("subTitle");
const menuCard = document.getElementById("menuCard");
const prevDayBtn = document.getElementById("prevDayBtn");
const nextDayBtn = document.getElementById("nextDayBtn");

function getTodayIndex() {
  const jsDay = new Date().getDay(); 
  return jsDay === 0 ? 6 : jsDay - 1;
}

let currentIndex = getTodayIndex();

function isToday(dayName) {
  return DAYS[getTodayIndex()] === dayName;
}

function renderDay(index) {
  const dayName = DAYS[index];
  const data = menuData[dayName];

  dayPill.textContent = dayName;
  subTitle.textContent = isToday(dayName)
    ? "Today’s Lunch Menu"
    : `${dayName} Lunch Menu`;

  if (!data) {
    menuCard.innerHTML = `<p class="muted">Menu not available.</p>`;
    return;
  }

  const itemsHtml = Object.entries(data.items).map(([key, value]) => `
    <div class="item">
      <span>${key}</span>
      <span>${value}</span>
    </div>
  `).join("");

  menuCard.innerHTML = `
    <div class="menu-head">
      <h2>${data.title}</h2>
      ${isToday(dayName) ? `<div class="today-badge">TODAY</div>` : ""}
    </div>
    <div class="items">
      ${itemsHtml}
    </div>
  `;
}

prevDayBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + DAYS.length) % DAYS.length;
  renderDay(currentIndex);
});

nextDayBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % DAYS.length;
  renderDay(currentIndex);
});

renderDay(currentIndex);
