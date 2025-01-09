//example-8
//Dealing with Forms
document.getElementById('feedbackForm').
  addEventListener("submit", function (event) {
    event.preventDefault(); // for forms its default to do this step
    let feedback = document.getElementById('feedbackInput').value;
    document.getElementById('paraDisplay').
      textContent = `Feeback is :${feedback}`;
  })