# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Suruchi")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    body.style.backgroundColor = e.target.id
  });
});

```

## project 2 solution

```javascript
const form = document.querySelector('form')


form.addEventListener('submit', function (e){
  e.preventDefault();
  const h = parseInt(document.querySelector('#height').value)
  const w = parseInt(document.querySelector('#weight').value)
  const res = document.querySelector('#results')

  if(h === '' || h<0 || isNaN(h)){
    res.innerHTML = `please add a valid height ${h}`
  }
  else if(w === '' || w<0 || isNaN(w)){
    res.innerHTML = `please add a valid weight ${w}`
  }
  else{
    const bmi = (w /((h*h)/10000)).toFixed(2);
    if(bmi < 18.6){
      res.innerHTML = `Your BMI is <span>${bmi}</span>.<br> You are Underweight.`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
      res.innerHTML = `Your BMI is <span>${bmi}</span>.<br>
       You are in the normal range.`;
    }
    else{
      res.innerHTML = `Your BMI is <span>${bmi}</span>.<br> You are Overweight.`;
    }
  }
});

```