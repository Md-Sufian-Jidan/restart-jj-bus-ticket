// console.log('connected');

function setTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
// get a element by id
function elementById(elementId) {
    const element = document.getElementById(elementId);
    return element;
}

let count = 1;
let left = 1;

const seats = document.querySelectorAll('.seat-no');

for (const seat of seats) {
    // console.log(seat);
    seat.addEventListener('click', function (e) {

        console.log(e);

        const findSeat = elementById('seat-count');
        findSeat.innerText = count++;

        const leftSeat = elementById('left-seat');
        const leftInt = parseInt(leftSeat.innerText);
        leftSeat.innerText = leftInt - left;

        const dynamicDiv = elementById('economy-div');
        const p = document.createElement('p');

        const p1 = document.createElement('p')
        p1.innerText = e.target.innerText;

        const p2 = document.createElement('p');
        p2.innerText = 'economy';

        const p3 = document.createElement('p');
        p3.innerText = 550;

        p.style.display = 'flex';
        p.style.justifyContent = 'justify-between';
        p.style.gap = '110px';
        // append children in the p
        p.appendChild(p1);
        p.appendChild(p2);
        p.appendChild(p3);
        //  append child in the dynamic div
        dynamicDiv.appendChild(p);

        // <p>Seat<sup class="text-[#1dd100]" id="seat-count">0</sup></p>
        // <p>Class</p>
        // <p>Price</p>
    });
}



