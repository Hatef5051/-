// برای اضافه کردن اسلایدر یا ویژگی‌های جاوااسکریپت بیشتر اینجا می‌توانید کدها رو اضافه کنید
document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('.btn');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      alert('دوره مورد نظر به سبد خرید افزوده شد!');
    });
  });
});
