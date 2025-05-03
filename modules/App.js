export function authLinks(isloggedin) {
    const auth_div = document.querySelector('.auth');
    const guest_div = document.querySelector('.guest');

    if (isloggedin) {
        auth_div.style.display = 'block';  
        guest_div.style.display = 'none'; 
    } else {
        auth_div.style.display = 'none'; 
        guest_div.style.display = 'block';  
    }
}

export function renderOrders(orders) {
    orders = JSON.parse(orders);
    let orders_html = `
    <table class="min-w-full border border-amber-600 bg-amber-100" style="margin-left:390px; margin-top:20px;">
        <thead>
            <tr>
                <th class="border border-amber-600 px-6 py-2">User</th>
                <th class="border border-amber-600 px-6 py-2">Address</th>
                <th class="border border-amber-600 px-6 py-2">Dog Breed</th>

            </tr>
        </thead>
        <tbody>
    `;

    // Check if there are any orders
    if (orders.length > 0) {
        for (let order of orders) {
            // Only render orders for users who have items in their order
            if (order.items && order.items.length > 0) {
                let items_html = '';

                // Create rows for each item in the order
                for (let item of order.items) {
                    items_html += `
                    <tr>
                        <td class="border border-amber-600 px-6 py-2" style="padding:10px">${item.name}</td>
                        
                    </tr>

                    

                    `;
                }

                // Add user and address with their corresponding items to the main order table
                orders_html += `
                <tr>
                    <td class="border border-amber-600 px-6 py-2" style="padding:10px">${order.user}</td>
                    <td class="border border-amber-600 px-6 py-2" style="padding:10px">${order.address}</td>
                    <td class="border border-amber-600 px-6 py-2" style="padding:10px">
                    
                        <table>
                            ${items_html}
                        </table>
                    </td>
                </tr>
                `;
            }
        }
    }

    // Close the table
    orders_html += `
        </tbody>
    </table>`;

    return orders_html;
}
