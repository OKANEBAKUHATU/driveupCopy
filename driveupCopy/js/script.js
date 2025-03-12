// ヘッダーのMENUボタン------------------------------------------------
document.getElementById('menu-btn').addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('menu').classList.toggle('open');
});

// メイントップの画像のスライドショー--------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const slidesContainer = document.querySelector('.slides');
  let currentIndex = 0;
  const intervalTime = 3000; // 3秒ごとに切り替え
  let slideInterval;

  // `.slides` の幅をスライド数に合わせて変更
  slidesContainer.style.width = `${slides.length * 100}%`;

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}vw)`;

    // アクティブクラスの更新
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function startSlideShow() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, intervalTime);
  }

  // スライドショー開始
  showSlide(currentIndex);
  startSlideShow();

  // ドットをクリックしたら対応するスライドを表示
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      startSlideShow();
    });
  });
});




document.querySelectorAll(".course-card").forEach(div => {
  div.addEventListener("click", function() {
    window.location.href = this.getAttribute("#");
  });
});
document.querySelectorAll(".faq-question").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const isVisible = answer.style.display === "block";
    
    document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");

    answer.style.display = isVisible ? "none" : "block";
  });
});

// function areaPage() {
//   window.location.href = '.html';
// }

// お客様の声
let index = 0;
const slides2 = document.querySelectorAll('.testimonial');
const wrapper = document.querySelector('.testimonial-wrapper');
const totalSlides = slides2.length;
function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

function autoSlide() {
  showSlide(index + 1);
}
setInterval(autoSlide, 5000);

// function showSlide(n) {
//   const slider = document.getElementById('slider');
//   const slides = document.querySelectorAll('.customer-content');
//   if (n >= slides.length) index = 0;
//   if (n < 0) index = slides.length - 1;
//   slider.style.transform = `translateX(${-index * 100}%)`;
// }
// function nextSlide() {
//   index++;
//   showSlide(index);
// }
// function prevSlide() {
//   index--;
//   showSlide(index);
// }

// よくあるご質問

// document.addEventListener("DOMContentLoaded", function () {
//   const questions = document.querySelectorAll(".faq-question");
//   questions.forEach(question => {
//       question.addEventListener("click", function () {
//           const answer = this.nextElementSibling;
//           const toggleBtn = this.querySelector(".toggle-btn");
//           if (answer.classList.contains("open")) {
//               // 既に開いている場合は閉じる
//               answer.style.maxHeight = null;
//               answer.classList.remove("open");
//               toggleBtn.textContent = "＋";
//           } else {
//               // すべてのFAQを閉じる
//               document.querySelectorAll(".faq-answer").forEach(ans => {
//                   ans.style.maxHeight = null;
//                   ans.classList.remove("open");
//               });
//               document.querySelectorAll(".toggle-btn").forEach(btn => {
//                   btn.textContent = "＋";
//               });
//               // クリックしたものだけ開く
//               answer.style.maxHeight = answer.scrollHeight + "px";
//               answer.classList.add("open");
//               toggleBtn.textContent = "−";
//           }
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach(question => {
      question.addEventListener("click", function () {
          const answer = this.nextElementSibling;
          const toggleBtn = this.querySelector(".toggle-btn");

          if (!answer) {
              console.error("対応する .faq-answer が見つかりません！");
              return;
          }

          if (answer.classList.contains("open")) {
              answer.style.maxHeight = null;
              answer.classList.remove("open");
              toggleBtn.textContent = "＋";
          } else {
              document.querySelectorAll(".faq-answer").forEach(ans => {
                  ans.style.maxHeight = null;
                  ans.classList.remove("open");
              });
              document.querySelectorAll(".toggle-btn").forEach(btn => {
                  btn.textContent = "＋";
              });

              answer.style.maxHeight = answer.scrollHeight + 30 + "px"; // ここが大事！
              answer.classList.add("open");
              toggleBtn.textContent = "−";
          }
      });
  });
});




// 料金ページ
function openLesson() {
  document.getElementById("lesson").style.display = "flex";
}
function closeLesson() {
  document.getElementById("lesson").style.display = "none";
}

// function toggleContent(id) {
//   var areas = document.getElementById(id);
//   areas.style.display = areas.style.display === "none" ? "block" : "none";
// }
function toggleContent(id) {
  const areas = document.getElementById(id);
  if (!areas) {
    console.error("要素が見つかりません: " + id);
    return;
  }
  areas.style.display = areas.style.display === "none" ? "block" : "none";
}
