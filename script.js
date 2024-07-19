
const data=document.querySelector(".placeholder")
const add_btn=document.querySelector(".add-btn")
const cros_btn=document.querySelector(".crossButton")
const clearBtn=document.querySelector(".clear-btn")


add_btn.addEventListener('click',(ele)=>{
    ele.preventDefault();
    
    if(data.value=="")
    {
        alert("Plz enter a valid schedule")
        return;
    }
    addNewTodo(data.value)
    data.value=""
})
function addNewTodo(todoData)
{
    const row=document.createElement('tr')
    row.className="newRows"
    row.style.backgroundColor=generteRandomColor()
    const rowData=document.createElement('td')
    rowData.innerHTML=todoData
    row.appendChild(rowData)
    const tableh=document.querySelector(".table")
    tableh.appendChild(row)

    const newSpan=document.createElement('button')
    newSpan.className="crossButton"
    newSpan.innerHTML="&#10006"
    row.appendChild(newSpan)
    // rowData.append(newSpan)
    // const table=document.querySelector(".table")
    // table.appendChild(rowData)
    // const tableStructure=document.querySelector(".table")
    // tableStructure.appendChild(row)
}
function generteRandomColor()
{
    const hex="0123456789ABCDEF"
    let strColor="#"
    for(let i=0;i<6;i++)
    {
        strColor +=hex[Math.floor(Math.random()*16)];
    }
    return strColor
}

const table = document.querySelector(".table");

// Event listener using event delegation to handle clicks on cross buttons
table.addEventListener('click', (event) => {
    if (event.target.classList.contains('crossButton')) {
        event.preventDefault();
        const row = event.target.closest('tr'); // Find the closest <tr> parent of the clicked button
        row.remove(); // Remove the entire row
    }
});
clearBtn.addEventListener('click',(event)=>{
    if(data.value=="")
    {
        alert("First Enter Some Data")
    }
    data.value=""
})