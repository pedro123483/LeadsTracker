var myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');
const inputDelete = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');


tabBtn.addEventListener('click', () => {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads);

    })    
})


const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

inputDelete.addEventListener('dblclick', () => {

    localStorage.clear();
    myLeads = [];
    ulEl.innerHTML = '';
})


if(leadsFromLocalStorage){

    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


function render(leads){
    let listItems = '';
    for(let i = 0; i < leads.length; i++){
    
        listItems += `<li>
        <a href='http://youtube.com' target='_blank'>${leads[i]}</a>
        </li>`
        //ulEl.innerHTML += '<li>' + myLeads[i] + '</li>'
        //const li = document.createElement('li');
        //li.textContent = myLeads[i];
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems;
    }



inputBtn.addEventListener('click', () =>{

    if(inputEl.value !== ''){
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads);
}
})


