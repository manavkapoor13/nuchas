document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Classic Beef Empanada', price: 3.99, image: 'assests/product.jpg' },
        { name: 'Chicken & Cheese Empanada', price: 3.99, image: 'assests/product1.jpg' },
        { name: 'Spinach & Feta Empanada', price: 3.99, image: 'assests/product5.jpg' },
        { name: 'Pulled Pork Empanada', price: 4.49, image: 'assests/product6.jpg' },
        { name: 'Buffalo Chicken Empanada', price: 2.89, image: 'assests/product1.jpg' },
        { name: 'Vegetable Curry Empanada', price: 3.69, image: 'assests/product5.jpg' },
        { name: 'Kali Mirch Empanada', price: 5.45, image: 'assests/product1.jpg' },
        { name: 'Methi Chicken Empanada', price: 3.67, image: 'assests/product.jpg' },
        { name: 'Saag Chicken Empanada', price: 4, image: 'assests/product6.jpg' },
        { name: 'Achari Chicken Empanada', price: 6.72, image: 'assests/product5.jpg' },
        { name: 'Karahi Goat Empanada', price: 4.76, image: 'assests/product.jpg' },
    ];


    const storeLocations = [
        { name: 'Nuchas Times Square', address: '1500 Broadway, New York, NY 10036' },
        { name: 'Nuchas Downtown', address: '100 Wall Street, New York, NY 10005' },
        { name: 'Nuchas Brooklyn', address: '345 Adams Street, Brooklyn, NY 11201' },
        { name: 'Nuchas Los Angeles', address: '123 Main St, Los Angeles, CA 90001' },
        { name: 'Nuchas Chicago', address: '456 Michigan Ave, Chicago, IL 60601' },
    ];

    const foodTruckSchedule = [
        { date: '2023-05-15', location: 'Central Park, NY', time: '11:00 AM - 3:00 PM' },
        { date: '2023-05-16', location: 'Bryant Park, NY', time: '12:00 PM - 4:00 PM' },
        { date: '2023-05-17', location: 'Washington Square Park, NY', time: '11:30 AM - 3:30 PM' },
        { date: '2023-05-18', location: 'Santa Monica Pier, CA', time: '12:00 PM - 6:00 PM' },
        { date: '2023-05-19', location: 'Millennium Park, Chicago', time: '11:00 AM - 5:00 PM' },
    ];

    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="btn">Add to Cart</button>
            `;
            productGrid.appendChild(productItem);
        });
    }

    const storeLocationsList = document.getElementById('store-locations');
    if (storeLocationsList) {
        storeLocations.forEach(location => {
            const listItem = document.createElement('li');
            listItem.textContent = `${location.name}: ${location.address}`;
            storeLocationsList.appendChild(listItem);
        });
    }

    const foodTruckScheduleDiv = document.getElementById('food-truck-schedule');
    if (foodTruckScheduleDiv) {
        foodTruckSchedule.forEach(schedule => {
            const scheduleItem = document.createElement('p');
            scheduleItem.textContent = `${schedule.date}: ${schedule.location} (${schedule.time})`;
            foodTruckScheduleDiv.appendChild(scheduleItem);
        });
    }
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
});
