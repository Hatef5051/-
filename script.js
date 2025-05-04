// انیمیشن تایپینگ
const texts = ["آموزش تدوین حرفه‌ای", "پروژه‌محور و کاربردی", "با تیم تدوینگر شو"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();

// اسکرول نرم به بخش‌ها
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// نمایش مودال
document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".modal-area").style.display = "flex";
  });
});
document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector(".modal-area").style.display = "none";
});

// اسلایدر دوره‌ها (بسیار ساده)
const slider = document.querySelector(".courses-slider");
if (slider) {
  let scrollAmount = 0;
  document.querySelector(".slide-next").addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
  });
  document.querySelector(".slide-prev").addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
  });
}

// افزودن به سبد خرید
let cart = [];
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const course = btn.dataset.course;
    cart.push(course);
    alert(`${course} به سبد خرید اضافه شد.`);
    updateCartUI();
  });
});

function updateCartUI() {
  const cartBox = document.querySelector(".cart-box");
  if (cartBox) {
    cartBox.innerHTML = "";
    if (cart.length === 0) {
      cartBox.innerHTML = "<p>سبد خرید خالی است.</p>";
    } else {
      cart.forEach((item, i) => {
        const el = document.createElement("p");
        el.textContent = `${i + 1}. ${item}`;
        cartBox.appendChild(el);
      });
    }
  }
}

// لاگین ساده (شبیه‌سازی)
document.querySelector("#loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  alert(`سلام ${username}، وارد شدید.`);
  window.location.href = "panel.html";
});
