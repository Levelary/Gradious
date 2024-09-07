// Name
// Occupation
// Contact
// Education

document.addEventListener("DOMContentLoaded", function () {
    const Employee = {
        James: {
            firstName: "James",
            lastName: "Yates",
            occupation: "Web Designer",
            contact: "+63 983 0962 971",
            education: "NY University"
        },
        Matthew: {
            firstName: "Matthew",
            lastName: "Wasil",
            occupation: "Graphic Designer",
            contact: "+02 020 3994 929",
            education: "London College"
        },
        Sampson: {
            firstName: "Sampson",
            lastName: "Murphy",
            occupation: "Mobile Dev",
            contact: "+01 352 1125 0192",
            education: "Senior High"
        },
        Gaspar: {
            firstName: "Gaspar",
            lastName: "Semenov",
            occupation: "Illustrator",
            contact: "+92 020 3994 929",
            education: "College"
        },
        Rebecca: {
            firstName: "Rebecca",
            lastName: "Smith",
            occupation: "Data Scientist",
            contact: "+44 207 1234 567",
            education: "MIT"
        },
        Lucas: {
            firstName: "Lucas",
            lastName: "Johnson",
            occupation: "Software Engineer",
            contact: "+1 415 555 2671",
            education: "Stanford University"
        },
        Olivia: {
            firstName: "Olivia",
            lastName: "Brown",
            occupation: "Product Manager",
            contact: "+1 312 555 8392",
            education: "Harvard Business School"
        },
        Ethan: {
            firstName: "Ethan",
            lastName: "Davis",
            occupation: "Network Engineer",
            contact: "+1 718 555 3748",
            education: "Carnegie Mellon University"
        },
        Sophia: {
            firstName: "Sophia",
            lastName: "Wilson",
            occupation: "UX Designer",
            contact: "+1 213 555 2903",
            education: "California College of the Arts"
        },
        Daniel: {
            firstName: "Daniel",
            lastName: "Garcia",
            occupation: "AI Researcher",
            contact: "+1 646 555 7829",
            education: "University of Cambridge"
        }
    };

    function localData()
    {
        if(!localStorage.getItem("tableData"))
        {
            localStorage.setItem("tableData", JSON.stringify(Employee));
        }
        fillTable();
    }

    function fillTable()
    {
        var table_data = JSON.parse(localStorage.getItem("tableData"));
        var employee_table = document.querySelector("#employee_table");
        
        // head
        var head_row = document.createElement("div");
        head_row.classList.add("row","header");
        head_row.innerHTML = 
            `<span class="cell">Name</span>
            <span class="cell">Occupation</span>
            <span class="cell">Contact</span>
            <span class="cell">Education</span>`;
        employee_table.appendChild(head_row);

        // data
        for(var key in table_data) 
        {
            if(table_data.hasOwnProperty(key))
            {
                const emp = table_data[key];
                const row = document.createElement("div");
                row.classList.add("row");

                const name_cell = document.createElement("span");
                name_cell.classList.add("cell");
                name_cell.textContent = `${emp.firstName} ${emp.lastName}`;
                row.appendChild(name_cell);

                const occupation_cell = document.createElement("span");
                occupation_cell.classList.add("cell");
                occupation_cell.textContent = emp.occupation;
                row.appendChild(occupation_cell);

                const contact_cell = document.createElement("span");
                contact_cell.classList.add("cell");
                contact_cell.textContent = emp.contact;
                row.appendChild(contact_cell);

                const education_cell = document.createElement("span");
                education_cell.classList.add("cell");
                education_cell.textContent = emp.education;
                row.appendChild(education_cell);

                employee_table.appendChild(row);
            }
        }
    }
    localData();
});