function render() {
  const a1 = document.getElementById('Angle1').checked;
  const a2 = document.getElementById('Angle2').checked;
  const a3 = document.getElementById('Angle3').checked;
  const a4 = document.getElementById('Angle4').checked;
  const list = [a1, a2, a3, a4];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === true) {
      // Then run the 3js code to render that camera view
    }
  }
}

document.getElementById('render_button').addEventListener('click', render);
