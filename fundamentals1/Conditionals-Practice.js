let response;
let score = 75;
let machineActive = false;

if(machineActive) {
    switch (true) {
        case score < 0: 
        response = 'Not possible, error'
        break;
        case score <= 20 : 
        response = 'You suck'
        break;
        case score <= 40: 
        response = 'You suck a little less'
        break;
        case score <= 80: 
        response = 'You did okay'
        break;
        case score <= 100: 
        response = 'Well done'
        break;
        case score > 100: 
        response = 'Not possible, error'
        
    }
    
} else {
  response = 'The machine is turned off. Turn it on to process your score.';
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    