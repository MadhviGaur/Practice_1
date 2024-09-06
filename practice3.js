 function press(){
        document.getElementById('btn2').addEventListener('click', function() {
            // Get the number of bulbs
            const bulbCount = document.getElementById('count').value;
            const bulbContainer = document.getElementById('div');
            
            // Clear any existing bulbs
            bulbContainer.innerHTML = '';
            
            // Create N bulbs
            for (let i = 0; i < bulbCount; i++) {
                
                const bulb = document.createElement('span');
                bulb.className = 'bulb';
                bulb.innerHTML = Off.png; // Light bulb emoji
                
                // Append the bulb to the container
                bulbContainer.appendChild(bulb);
            }
        });
} 
 
       