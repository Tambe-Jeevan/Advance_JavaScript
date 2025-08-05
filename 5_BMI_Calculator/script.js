// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)
// const btn = document.querySelector('button')
// const result = document.querySelector('#result')

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        console.log("Please enter the valid weigth")
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
            //show the result
        result.innerHTML = `<span>${bmi}</span>`;
    }
});