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
	display();

	// function localData()
    // {
    //     if(!localStorage.getItem("buddyData"))
    //     {
    //         localStorage.setItem("buddyData", JSON.stringify(users));
    //     }
    //     display();
    // }
});

function display() 
{
	var buddyList = document.getElementById("root");
	buddyList.innerHTML = "";

	usersJSON.forEach(user => {
		buddyList.innerHTML += 
		`<div class="user">
			<div class="img-container">
				<img src="${user.profilePicture}" class='user-image ${status[user.presence]}' alt="user image" />
			</div>
			<div class="user-detail">
				<p class="user-name">${user.name}</p>
				<p class="user-message">${user.statusMessage}</p>
			</div>
			<div class='three-btn'>
				<div class="dropdown">
					<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
					<ul class="dropdown-menu">
						<li><button id='${user.userId}' onclick='deleteUser("${user.userId}")' class="dropdown-item">Delete</button></li>
						<li><button id='update-${user.userId}' onclick='updateUser("${user.userId}")' class="dropdown-item">Update</button></li>
					</ul>
				</div>
			</div>
		</div>`;

	});
}

function deleteUser(id) {
	// const buddy = document.getElementById(id);
	// buddy.style.display = "none";

	usersJSON = usersJSON.filter(user => user.userId !== id);
	display();
}

function addUser(event)
{
	event.preventDefault(event);
	const userForm = document.getElementById("addUserForm");

	const nameInput = document.getElementById("name").value;
	const msgInput = document.getElementById("statusMessage").value;
	const imgInput = document.getElementById("profilePicLink").value;
	const statusInput = document.getElementById("presence").value;
	

    const id = `USR${String(usersJSON.length + 1).padStart(4,'0')}`;
	let newUser = { 	
		"userId": id,
		"name": nameInput,
		"profilePicture": imgInput,
		"statusMessage": msgInput,
		"presence": statusInput}
	usersJSON.unshift(newUser);
	display();
	userForm.reset();
}

function updateUser(id) {
// 	console.log('Update item with id:', id);
	// Add your update logic here
	const user = usersJSON.find(user => user.userId === id);
	if(!user) 
		return;

	const addBtn = document.getElementById("add_button");
	addBtn.textContent = "Update User";
	// document.getElementById("add_update").replaceChild(addBtn, updateBtn);
	
	document.getElementById("name").value = user.name;
	document.getElementById("statusMessage").value = user.statusMessage;
	document.getElementById("profilePicLink").value = user.profilePicture;
	document.getElementById("presence").value = user.presence;



	addBtn.onclick = function(event)
	{
		event.preventDefault();
		user.name = document.getElementById("name").value;
		user.statusMessage = document.getElementById("statusMessage").value;
		user.profilePicture = document.getElementById("profilePicLink").value;
		user.presence = document.getElementById("presence").value;

		display();
		addBtn.textContent = "Add User";
		addBtn.onclick = addUser;
		document.getElementById("addUserForm").reset();
	}
}
	