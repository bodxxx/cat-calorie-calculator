var weightRange = document.getElementById("weightRange"); // Weight range
var weightNumber = document.getElementById("input-number"); // Weight number

// Final result 
const resultField = document.getElementById("result"); 
let result = 0;
resultField.innerHTML = result;

const assignValue = () => {
    weightNumber.value = weightRange.value;
}
weightRange.addEventListener('input', () => {
    assignValue();
})

const calcBtn = document.getElementById("calc-btn"); // Calc button
const overlay = document.getElementById("overlay"); // Modal window
const closeBtn = document.getElementById("close-btn"); //  Close button

// Open Modal window
calcBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    checkResult();
})

// Close modal window
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
})


// Get options
const ageOptions = document.getElementsByClassName("age-option");
const activityOptions = document.getElementsByClassName("activity-option");
const ageDots = document.getElementsByClassName("age-dot");
const activityDots = document.getElementsByClassName("activity-dot");

// Age options object
const ageOptionsCoeffs = {
    one: 2,
    two: 1.6,
    three: 1.2,
    four: 1
}
let currentAgeCoeff = ageOptionsCoeffs.four;

// Activity options object
const activityOptionsCoeffs = {
    one: 1,
    two: 1.1,
    three: 1.2
}
let currentActivityCoeff = activityOptionsCoeffs.one;

// Get option dots work
const activeAgeOption = age => {
    for(option of ageOptions) {
        option.classList.remove('active');
    }
    currentAgeCoeff = ageOptionsCoeffs[`${age}`];
    checkResult();
}
const activeActivityOption = activity => {
    for(option of activityOptions) {
        option.classList.remove('active');
    }
    currentActivityCoeff = activityOptionsCoeffs[`${activity}`];
    checkResult();
}
for(option of ageOptions) {
    option.addEventListener('click', e => {
        e.target.classList.add('active');
    });
}
for(option of activityOptions) {
    option.addEventListener('click', e => {
        e.target.classList.add('active');
    });
}

// Final Calculation
const checkResult = () => {
    result = Math.round((30 * weightRange.value + 70) * currentActivityCoeff * currentAgeCoeff);
    resultField.innerHTML = `${result} ккал/день`;
}

