fetch('http://localhost:3000/test-post_1', { 
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({}) 
})
.then(res => res.json())
.then(data => {
    console.log(data);
    const tableBody = document.getElementById("studentBody"); 
    data.result.forEach(student => { 
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.Name}</td>
            <td>${student.Department_Name}</td> 
            <td>${student.Total_Credit}</td> 
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching data:', error));

console.log("after fetch");