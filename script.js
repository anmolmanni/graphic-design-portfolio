// Simple lightbox: click any portfolio piece to view it full size.
(function () {
  var box = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  if (!box || !img) return;

  document.querySelectorAll('.card img').forEach(function (pic) {
    pic.addEventListener('click', function () {
      img.src = pic.src;
      img.alt = pic.alt;
      box.hidden = false;
    });
  });

  function close() { box.hidden = true; img.src = ''; }
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
