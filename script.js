
function leftSeat()
{
    const getleftSeat = document.getElementById('leftSeatNum').innerText;
    const leftSeats = parseInt(getleftSeat);
    const leftSeat=leftSeats-1;

    const seatNum = document.getElementById('leftSeatNum');
    seatNum.innerText = leftSeat;
}

function totalSeat()
{
    const getTotalSeat = document.getElementById('totalSeatNum').innerText;
    const totalSeats = parseInt(getTotalSeat);
    const totalSeat=totalSeats+1;

    const seatNum = document.getElementById('totalSeatNum');
    seatNum.innerText = totalSeat;
}

function totalPrice()
{
    const totalPrice = document.getElementById('total').innerText;
    const totalPrices =parseInt(totalPrice);
    const price = totalPrices+550;

    const prices = document.getElementById('total');
    prices.innerText = price;

}
function SeatNam()
{
    const getTotalSeat = document.getElementById('SeatName').innerText;
    const totalSeats = parseInt(getTotalSeat);
    const totalSeat=totalSeats+1;

    const seatNum = document.getElementById('totalSeatNum');
    seatNum.innerText = totalSeat;
}

function seatBook()
{   
    // const seat = document.getElementsById('A1');
    // seat.classList.add('bg-[#1DD100]');
    leftSeat();
    totalSeat();
    totalPrice();
}
// document.addEventListener('click',seatBook);