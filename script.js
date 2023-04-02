window.onload = function() {
	// Load attendance list from file
	fetch('attendance.txt')
		.then(response => {
			if (response.ok) {
				return response.text();
			} else {
				throw new Error('Error loading attendance list');
			}
		})
		.then(data => {
			const attendanceList = document.getElementById('attendance-list');
			const names = data.split('\n');
			names.forEach(name => {
				if (name.trim() !== '') {
					const li = document.createElement('li');
					li.textContent = name;
					attendanceList.appendChild(li);
				}
			});
		})
        
		.catch(error => {
			console.error('Error loading attendance list:', error);
		});

	// Toggle dark mode when the dark mode toggle button is clicked
	const darkModeToggle = document.getElementById('dark-mode-toggle');
    console.log(darkModeToggle)
	darkModeToggle.addEventListener('click', function() {
		const container = document.querySelector('.container');
        console.log(container)
		if (darkModeToggle.checked) {
			container.classList.add('dark-mode');
            console.log(container.classList.add('dark-mode'))
		} else {
			container.classList.remove('dark-mode');
		}
	});
};
