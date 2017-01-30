const list = document.querySelectorAll('.list input[type="checkbox"]');
let lastClicked = null;

const handleClick = (e) => {
  const isShift = e.shiftKey;
  let inBetween = false;
  if (isShift) {
    list.forEach((item) => {
      if (item === lastClicked || item === e.target) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        item.checked = e.target.checked;
      }
    });
  }
  lastClicked = e.target;
};

list.forEach(item => item.addEventListener('click', handleClick, true));
