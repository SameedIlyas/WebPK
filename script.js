// Show/Hide Details
document.getElementById('showDetailsBtn')?.addEventListener('click', () => {
    const detailsSection = document.getElementById('detailsSection');
    if (detailsSection) {
        detailsSection.style.display = 'block';
    }
});
document.getElementById('hideDetailsBtn')?.addEventListener('click', () => {
    const detailsSection = document.getElementById('detailsSection');
    if (detailsSection) {
        detailsSection.style.display = 'none';
    }
});

// Background color change
let isCream = false; // Tracks the current background color

const changeBgBtn = document.getElementById('changeBgBtn');
if (changeBgBtn) {
    changeBgBtn.addEventListener('click', () => {
        if (isCream) {
            document.body.style.backgroundColor = 'white'; // Dark gray or black
        } else {
            document.body.style.backgroundColor = '#F5F5DC'; // Cream
        }
        isCream = !isCream; // Toggle the state
    });
}

// Dynamically add or remove entries
document.addEventListener('DOMContentLoaded', () => {
    const services = []; // Array to store dynamically added services

    // Add Service to Table
    const serviceForm = document.getElementById('serviceForm');
    if (serviceForm) {
        serviceForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('serviceName')?.value.trim();
            const price = parseFloat(document.getElementById('servicePrice')?.value).toFixed(2);
            const time = document.getElementById('turnaroundTime')?.value.trim();

            if (!name || isNaN(price) || !time) {
                alert('Please provide valid input for all fields!');
                return;
            }

            const service = { id: Date.now(), name, price, time };
            services.push(service); // Add new service
            addServiceRow(service); // Add new row without clearing the table
            serviceForm.reset();
        });
    }

    // Function to add a new row
    function addServiceRow(service) {
        const tableBody = document.getElementById('pricingTable')?.getElementsByTagName('tbody')[0];
        if (!tableBody) {
            console.error('Table body not found!');
            return;
        }

        const newRow = tableBody.insertRow();
        newRow.dataset.id = service.id; // Add a custom attribute to identify the row
        newRow.innerHTML = `
            <td>${service.name}</td>
            <td>$${service.price}</td>
            <td>${service.time}</td>
            <td>
                <button class="btn btn-danger btn-sm" data-id="${service.id}">Remove</button>
            </td>
        `;
    }

    // Remove Service
    const pricingTable = document.getElementById('pricingTable');
    if (pricingTable) {
        pricingTable.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
                const serviceId = parseInt(event.target.dataset.id);
                const index = services.findIndex((service) => service.id === serviceId);
                if (index !== -1) {
                    services.splice(index, 1); // Remove from the array
                    const row = document.querySelector(`tr[data-id="${serviceId}"]`);
                    if (row) row.remove(); // Remove row from the table
                }
            }
        });
    }
});

// Change Text Style
const changeTextStyleBtn = document.getElementById('changeTextStyleBtn');
if (changeTextStyleBtn) {
    changeTextStyleBtn.addEventListener('click', () => {
        const text = document.getElementById('dynamicText');
        if (text) {
            text.style.fontStyle = 'italic';
            text.style.color = 'red';
        }
    });
}

const resetTextStyleBtn = document.getElementById('resetTextStyleBtn');
if (resetTextStyleBtn) {
    resetTextStyleBtn.addEventListener('click', () => {
        const text = document.getElementById('dynamicText');
        if (text) {
            text.style.fontStyle = 'normal';
            text.style.color = 'black';
        }
    });
}

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const errors = [];
        const successSection = document.getElementById('success');
        const errorSection = document.getElementById('errors');

        // Clear previous messages
        errorSection.innerHTML = '';
        successSection.innerHTML = '';

        if (!name) errors.push('Name is required');

        if (!email || !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errors.push('A valid email address is required.');
        }

        if (!/^\d{10,}$/.test(phone)) {
            errors.push('Phone number must be at least 10 digits long and contain only numbers.');
        }

        if (errors.length > 0) {
            errorSection.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
        } else {
            successSection.innerHTML = '<p>Form submitted successfully!</p>';
            contactForm.reset();
        }
    });
}

// Toggle Menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
            console.log('Menu toggled!'); // Debugging: Check if this runs
        });
    } else {
        console.error('Toggle button or navbar links not found!');
    }
});

// Toggle Details Section Visibility
const detailsSection = document.getElementById('detailsSection');
if (detailsSection) {
    const showDetailsBtn = document.getElementById('showDetailsBtn');
    const hideDetailsBtn = document.getElementById('hideDetailsBtn');

    if (showDetailsBtn) {
        showDetailsBtn.addEventListener('click', () => {
            detailsSection.classList.remove('hidden');
        });
    }

    if (hideDetailsBtn) {
        hideDetailsBtn.addEventListener('click', () => {
            detailsSection.classList.add('hidden');
        });
    }
}

