fetch('http://localhost:3000/test-post_2', { 
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
    const tableBody = document.getElementById("courseBody"); 
    data.result.forEach(course => { 
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.ID}</td>
            <td>${course.Title}</td>
            <td>${course.Department_Name}</td> 
            <td>${course.Credits}</td> 
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching data:', error));

console.log("after fetch");
