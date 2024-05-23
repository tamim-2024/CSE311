// function teacher() {
//   fetch('http://localhost:3000/test_post', {
//       method: 'post',
//       headers: {
//           'Accept': 'application/json, text/plain, */*',
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(res => res.json())
//   .then(data => {
//       const tableBody = document.querySelector('teacherTable tbody');
//       data.forEach(teacher => {
//           const row = document.createElement('tr');
//           row.innerHTML = `
//               <td>${teacher.id}</td>
//               <td>${teacher.name}</td>
//               <td>${teacher.num_sections}</td>
//               <td>$${teacher.salary}</td>
//               <td>${teacher.join_date}</td>
//           `;
//           tableBody.appendChild(row);
//       });
//   })
//   .catch(error => console.error('Error fetching data:', error));
// }
 
  fetch('http://localhost:3000/test-post', { 
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
      const tableBody = document.getElementById("teacherBody");
      data.result.forEach(teacher => { 
          const row = document.createElement('tr');
          const joinDate = new Date(teacher.Join_Date);
        const formattedJoinDate = joinDate.toDateString();
          row.innerHTML = `
              <td>${teacher.ID}</td>
              <td>${teacher.Name}</td>
              <td>${teacher.Department_Name}</td>
              <td>$${teacher.Salary}</td>
              <td>${formattedJoinDate}</td>
          `;
          tableBody.appendChild(row);
      });
    //   window.location.href = "./Tadmin.html";
  })
  .catch(error => console.error('Error fetching data:', error));
 
console.log("after fetch");
  


