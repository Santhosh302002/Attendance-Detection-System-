window.onload = async function() {
	// Load attendance list from file
	const TotalStudent =['Santhosh','Hanush','Sudharsan','Gaurav']
	const attendanceName =[];
	const crypto = require("crypto");
    const fs = require("fs");

    const encryptedData = fs.readFileSync("encrypted_data.txt", { encoding: "utf-8",});
    const privateKey = fs.readFileSync("key.pem", { encoding: "utf-8" });

const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    // In order to decrypt the data, we need to specify the
    // same hashing function and padding scheme that we used to
    // encrypt the data in the previous step
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  Buffer.from(encryptedData, "base64")
);

fs.writeFileSync("decrypted_data.txt", decryptedData.toString("utf-8"), {
  encoding: "utf-8",
});
	
	await fetch('sample.txt')
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
			let count=0;
			// console.log(attendanceName)
			names.forEach(name => {
				if (name.trim() !== '' && !attendanceName.includes(name.replace('\r',''))) {
					console.log(name.replace('\r',''))
					const li = document.createElement('li');
					attendanceName[count]=name.replace('\r','');
					count++;
					li.textContent = name;
					attendanceList.appendChild(li);
					console.log(attendanceName)
				}
			});
		})
		.catch(error => {
			console.error('Error loading attendance list:', error);
		});
		console.log(attendanceName)
		console.log(TotalStudent)
        const attendanceList = document.getElementById('absent-list');
		TotalStudent.forEach(name =>{
			console.log(attendanceName.includes((name.replace('\r',''))))
			console.log(name.replace('\r',''))
			if(!attendanceName.includes((name.replace('\r','')))){
				const li = document.createElement('li');
				li.textContent = name;
				attendanceList.appendChild(li);
			}
		})
		// console.log(attendanceName)

	// Toggle dark mode when the dark mode toggle button is clicked
	const darkModeToggle = document.getElementById('dark-mode-toggle');
    // console.log(darkModeToggle)
	darkModeToggle.addEventListener('click', function() {
		const container = document.querySelector('.container');
        // console.log(container)
		if (darkModeToggle.checked) {
			container.classList.add('dark-mode');
            // console.log(container.classList.add('dark-mode'))
		} else {
			container.classList.remove('dark-mode');
		}
	});
};
