const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const menuData = {
  Monday: {
    title: "Monday",
    items: {
      "Rice": "Plain Rice",
      "Dal": "Arhar Dal",
      "Sabzi": "Palak Paneer",
      "Roti": "Chapati",
      "Pickle": "Pickle",
      "Salad": "Salad",
      "Sweetdish/Raita": "Sabudana Kheer"
    }
  },
  Tuesday: {
    title: "Tuesday",
    items: {
      "Rice": "Jeera Rice",
      "Dal": "Masoor Dal",
      "Sabzi": "Veg Kofta",
      "Roti": "Chapati",
      "Pickle": "Pickle",
      "Salad": "Sprout Salad",
      "Sweetdish/Raita": "Coconut Burffi"
    }
  },
  Wednesday: {
    title: "Wednesday",
    items: {
      "Rice": "Plain Rice",
      "Dal": "Kadhi Pakoda",
      "Sabzi": "South Indian Aloo",
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
      "Sabzi": "Methi Aloo",
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
      "Sweetdish/Raita": "Gajar Halwa"
    }
  },
  Saturday: {
    title: "Saturday",
    items: {
      "Rice": "Plain Rice",
      "Dal": "Black Channa",
      "Sabzi": "Sita Fal",
      "Roti": "Bedmi Poori",
      "Pickle": "Pickle",
      "Salad": "Mix Salad",
      "Sweetdish/Raita": "Balu Sahi"
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
  subTitle.textContent = isToday(dayName) ? "Today’s Lunch Menu" : `${dayName} Lunch Menu`;

  if (!data) {
    menuCard.innerHTML = `
      <div class="menu-head">
        <h2>${dayName}</h2>
      </div>
      <p class="muted">Menu not added yet.</p>
    `;
    return;
  }

  const entries = Object.entries(data.items || {});
  const itemsHtml = entries.map(([k, v]) => {
    return `
      <div class="item">
        <span>${k}</span>
        <span>${v || "-"}</span>
      </div>
    `;
  }).join("");

  menuCard.innerHTML = `
    <div class="menu-head">
      <h2>${data.title || dayName}</h2>
      ${isToday(dayName) ? `<div class="today-badge">TODAY</div>` : ""}
    </div>
    <div class="items">
      ${itemsHtml || `<p class="muted">No items available.</p>`}
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

