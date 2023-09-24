const inputbtn = document.getElementById('input-btn');
let myleads = [];
const inputel = document.getElementById('input');
const ulel = document.getElementById('ul-el');
const delbtn=document.getElementById('delete-btn')
const fromLocalStorage=JSON.parse(localStorage.getItem('myleads'))
const tabBtn = document.getElementById("tab-btn");

if(fromLocalStorage){
    myleads=fromLocalStorage;
    renderLeads(myleads);
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads) )
        renderLeads(myleads)
    })
})

delbtn.addEventListener('click',function(){
    localStorage.clear()
    myleads=[]
    renderLeads(myleads)
})

inputbtn.addEventListener('click', function () {
    myleads.push(inputel.value);
    inputel.value = ''
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderLeads(myleads)
})


function renderLeads(leads) {
    let listitems = '';
    for (let i = 0; i < leads.length; i++) {

        listitems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]} 
         </a>
        </li>`;
    }
    ulel.innerHTML = listitems;

}