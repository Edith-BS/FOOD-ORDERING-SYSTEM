let order = [];
let totalPrice = 0;

function addToOrder(itemName, itemPrice) {
    order.push({ name: itemName, price: itemPrice });
    updateOrderList();
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear the list

    totalPrice = 0;
    order.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        totalPrice += item.price;
        orderList.appendChild(listItem);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function submitOrder() {
    if (order.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert(`Order submitted! Total price: $${totalPrice.toFixed(2)}`);
    order = [];
    updateOrderList(); // Clear the order
}
