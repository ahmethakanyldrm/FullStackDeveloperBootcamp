
let personels = [];


function save(event) {
    
    event.preventDefault(); // sayfa yenilenmesini tetiklenmesini önler;

	const firstNameInputElement = document.getElementById('firstname');
	const lastNameInputElement = document.getElementById('lastname');
	const professionInputElement = document.getElementById('profession');
	const salaryInputElement = document.getElementById('salary');
	const startdateInputElement = document.getElementById('startdate');

	const data = {
        firstname: firstNameInputElement.value,
        lastname: lastNameInputElement.value,
        profession: professionInputElement.value,
        startdate: startdateInputElement.value,
        salary: salaryInputElement.value
    };
    
    personels.push(data);
   // console.log(personels);
   setPersonelsToTable();

   firstNameInputElement.value = "";
   lastNameInputElement.value = "";
   professionInputElement.value = "";
   startdateInputElement.value = "2024-03-18";
   salaryInputElement.value = "17002";

   firstNameInputElement.focus();
}


function setPersonelsToTable() {
    const tbodyElement = document.querySelector("tbody");

    personels = personels.sort((a,b)=> {
        a.firstname.localeCompare(b.firstname);
    });
    let value = "";
    for (const index in personels){
       const date = new Date(personels[index].startdate);
       const newDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        const salary  = formatSalary(personels[index].salary);
        value += `
                    <tr>
                        <td>${+index + 1}</td>
                        <td>${personels[index].firstname}</td>
                        <td>${personels[index].lastname}</td>
                        <td>${personels[index].profession}</td>
                        <td>${newDate}</td>
                        <td>${salary}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-primary">Update</button>
                            <button class="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                        `;
    }
        
    
    tbodyElement.innerHTML = value;
}

function formatSalary(salaryString) {
    const salaryNumber = +salaryString;

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: "currency",
        currency: "TRY",
        minimumFractionDigits: 2
    });

    return formatter.format(salaryNumber);
}