// click để phát nhạc 
window.addEventListener('click',() => {
  document.getElementById("song").play();
})
// Lấy lớp phủ
const overlay = document.getElementById('overlay');

// Lắng nghe sự kiện click vào lớp phủ
overlay.addEventListener('click', function() {
  // Ẩn lớp phủ khi click vào
  overlay.style.display = 'none';
});
