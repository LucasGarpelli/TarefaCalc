function addToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function clearDisplay() {
    document.getElementById('display').innerText = '0';
  }

  function calculate() {
    let display = document.getElementById('display');
    let result;
    try {
      result = eval(display.innerText);
      if (!Number.isFinite(result)) {
        throw new Error('Invalid input');
      }
    } catch (error) {
      result = 'Error';
    }
    display.innerText = result;
  }