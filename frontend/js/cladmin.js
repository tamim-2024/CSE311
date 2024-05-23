fetch('http://localhost:3000/test-post_3', { 
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
    const tableBody = document.getElementById("classroomBody"); 
    data.result.forEach(classroom => { 
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${classroom.building}</td>
            <td>${classroom.room_number}</td>
            <td>${classroom.capacity}</td> 
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching data:', error));

console.log("after fetch");
