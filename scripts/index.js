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
let sum = 0;

const seats = document.querySelectorAll('.seat-no');

for (const seat of seats) {
    // console.log(seat);
    seat.addEventListener('click', function (e) {

        const seatCount = elementById('seat-count');
        seatCount.innerText = count++;

        const leftSeat = elementById('left-seat');
        const leftInt = parseInt(leftSeat.innerText);
        leftSeat.innerText = leftInt - left;

        // color the seat
        e.target.style.backgroundColor = '#1DD100';

        const dynamicDiv = elementById('economy-div');
        const p = document.createElement('p');

        const p1 = document.createElement('p')
        p1.innerText = e.target.innerText;

        const p2 = document.createElement('p');
        p2.innerText = 'economy';

        const p3 = document.createElement('p');
        p3.innerText = 550;
        // dynamic paragraph styles
        p.style.display = 'flex';
        p.style.justifyContent = 'justify-between';
        p.style.gap = '110px';
        // append children in the p
        p.appendChild(p1);
        p.appendChild(p2);
        p.appendChild(p3);
        //  append child in the dynamic div
        dynamicDiv.appendChild(p);

        const total = 550 * seatCount.innerText;

        const costP = elementById('total-cost');
        costP.innerText = total;

        const applyBtn = elementById('apply-btn');
        applyBtn.addEventListener('click', function applyBtn() {
            // apply discount
            const coupon = elementById('coupon').value;
            console.log(coupon);
            const hideApplyBtn = elementById('hide-apply-btn');
            console.log(seatCount.innerText);
            
            if (parseFloat(seatCount.innerText) === 4) {
                if (coupon.toUpperCase() === 'NEW15') {
                    const discount = total * .15;
                    const grandTotal = total - discount;
                    const enterTotal = elementById('grand-total');
                    enterTotal.innerText = grandTotal;
                    hideApplyBtn.classList.add('hidden');
                }
                else if (coupon.toUpperCase() === 'COUPLE20') {
                    const discount = total * .20;
                    const grandTotal = total - discount;
                    const enterTotal = elementById('grand-total');
                    enterTotal.innerText = grandTotal;
                    hideApplyBtn.classList.add('hidden');
                }
                else {
                    alert('Please Type Your Coupon');
                }
            }
            else {
                return alert('Invalid Coupon');
            }

        })

    });
}



