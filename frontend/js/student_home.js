const logediteacher=JSON.parse(window.localStorage.getItem('user'));
console.log(logediteacher);
if (logediteacher==null  )
{
  window.location.href = "./student_login.html";
}
function logout(){
    localStorage.removeItem('user');
    window.location.href = "./student_login.html";
}
fetch('http://localhost:3000/takes', { 
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ID:logediteacher.ID}) 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const tableBody = document.getElementById("takesBody"); 
        data.result.forEach(grade => { 
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${grade.ID}</td>
                <td>${grade.course_id}</td>
                <td>${grade.sec_id}</td> 
                <td>${grade.semester}</td>
                <td>${grade.year}</td> 
                <td>${grade.grade}</td> 
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

    console.log("after fetch");
