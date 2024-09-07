let status = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};


// localStorage.clear();
let usersJSON = [{
	"userId": "USR00001",
	"name": "Andrew Grudde",
	"profilePicture": "https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
	"statusMessage": "We become what we think about!",
	"presence": 1
	},
	{
	"userId": "USR00002",
	"name": "Steve Hughes",
	"profilePicture":  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
	"statusMessage": "A positive mindset brings positive things.",
	"presence": 2
	},
	{
	"userId": "USR00003",
	"name": "Kathy Smiley",
	"profilePicture": "https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
	"statusMessage": "One small positive thought can change your whole day",
	"presence": 3
	},
	{
	"userId": "USR00004",
	"name": "Steve Dunk",
	"profilePicture": "https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
	"statusMessage": "I am a rock star",
	"presence": 1
	},
	{
	"userId": "USR00005",
	"name": "Maria Dropola",
	"profilePicture": "https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
	"statusMessage": "I am using Gradious messenger",
	"presence": 4
}];

document.addEventListener("DOMContentLoaded", function () 
{

	function localData()
    {
        if(!localStorage.getItem("buddyData"))
        {
            localStorage.setItem("buddyData", JSON.stringify(users));
        }
        display();
    }

	function display() 
	{
		var buddyData = JSON.parse(localStorage.getItem("buddyData"));
		var buddyList = document.getElementById("root");

		buddyData.forEach(user => {
			
			const buddy = document.createElement("div");
			buddy.className = "user";
			buddy.id = user.userId;

			const buddyImg = document.createElement("div");
			buddyImg.className = "img-container";
			const img = document.createElement("img");
			img.className = "user-image + $status[user.presence]"; // +$status[presence]
			img.src = user.profilePicture;
			img.width = 50;
			img.height = 50;
			buddyImg.appendChild(img);
			buddy.appendChild(buddyImg);

			const buddyDetails = document.createElement("div");
			buddyDetails.className = "user-detail";
			// <div class="user-detail">
			// 		<p class="user-name">Abhi</p>
			// 		<p class="user-message">Hi There!</p>
			// </div>
			
			const buddyName = document.createElement("div");
			buddyName.className = "user-name";
			buddyName.textContent = user.name;
			buddyDetails.appendChild(buddyName);

			const buddyMsg = document.createElement("div");
			buddyMsg.className = "user-message";
			buddyMsg.textContent = user.statusMessage;
			buddyDetails.appendChild(buddyMsg);

			buddy.appendChild(buddyDetails);


			// 'three-btn'
			var threeBtnDiv = document.createElement('div');
			threeBtnDiv.className = 'three-btn';
			// <div class='three-btn'>
			// 	<div class="dropdown">
			// 		<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
			// 		<ul class="dropdown-menu">
			// 			<li><button id='USR0001' onclick='deleteItem("USR0001")'class="dropdown-item ">Delete</button></li>
			// 			<li><button  id='update-USR0001' onclick='updateItem("USR0001")'class="dropdown-item ">Update</button></li>
			// 		</ul>
			// 	</div>
			// </div>

			// dropdown div
			var dropdownDiv = document.createElement('div');
			dropdownDiv.className = 'dropdown';

			// anchor tag
			var anchor = document.createElement('a');
			anchor.href = '#';
			anchor.setAttribute('role', 'button');
			anchor.setAttribute('data-bs-toggle', 'dropdown');
			anchor.setAttribute('aria-expanded', 'false');
			anchor.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';

			dropdownDiv.appendChild(anchor);

			// dropdown menu
			var dropdownMenu = document.createElement('ul');
			dropdownMenu.className = 'dropdown-menu';

			// Delete button
			var deleteItem = document.createElement('li');
			var deleteBtn = document.createElement('button');
			deleteBtn.id = 'USR0001';
			deleteBtn.className = 'dropdown-item';
			deleteBtn.onclick = function() { deleteUser('USR0001'); };
			deleteBtn.textContent = 'Delete';
			deleteItem.appendChild(deleteBtn);

			// Update button
			var updateItem = document.createElement('li');
			var updateBtn = document.createElement('button');
			updateBtn.id = 'update-USR0001';
			updateBtn.className = 'dropdown-item';
			updateBtn.onclick = function() { updateUser('USR0001'); };
			updateBtn.textContent = 'Update';
			updateItem.appendChild(updateBtn);


			dropdownMenu.appendChild(deleteItem);
			dropdownMenu.appendChild(updateItem);


			dropdownDiv.appendChild(dropdownMenu);

			threeBtnDiv.appendChild(dropdownDiv);

			buddy.appendChild(threeBtnDiv);

			buddyList.appendChild(buddy);
		});

		}
	localData();
	
});

function deleteUser(id) {
	// const buddy = document.getElementById(id);
	// buddy.style.display = "none";

	usersJSON = usersJSON.filter(user => user.userId !== id);
	localData();
}

function addUser()
{
	const nameInput = document.getElementById("name").value;
	const msgInput = document.getElementById("statusMessage").value;
	const imgInput = document.getElementById("profilePicLink").value;
	const statusInput = document.getElementById("Presence").value;
	
	// const newBuddy = document.createElement("div");

	// buddyList.insertBefore(newBuddy, buddyList.firstChild);
	let newUser = { 	
		// "userId": ,
		"name": nameInput,
		"profilePicture": msgInput,
		"statusMessage": imgInput,
		"presence": statusInput}
	users.unshift(newUser);
	localData();

}

function updateUser(id) {
	console.log('Update item with id:', id);
	// Add your update logic here
	const updateBtn = document.createElement('button');
	updateBtn.className = "btn";
	updateBtn.textContent = "Update";
	const addBtn = document.getElementById("add_button");
	const addUpdate = document.getElementById("add_update");
	addUpdate.replaceChild(addBtn, updateBtn);

	const buddyName = document.getElementById("user-name");
	const buddyImg = document.getElementById("user-image");
	const buddyMsg = document.getElementById("user-message");
	const buddyStatus = document.getElementById("")

	document.getElementById("name").innerText = buddyName;
	document.getElementById("statusMessage").innerText = buddyMsg;
	const imgInput = document.getElementById("profilePicLink").innerText = buddyImg;
	const statusInput = document.getElementById("Presence").innerText = budd;



}
	