const tabitems=document.querySelectorAll('.tab-item')
const tabconitems=document.querySelectorAll('.tab-content-item')
//select tab content
function selectItem(e){
    removeBorder();
    removeshow()
    //this keyword points to curr clicked item
    this.classList.add('tab-border');
    const tabcontentitem=document.querySelector(`#${this.id}-content`)
    //add show class
    tabcontentitem.classList.add('show')
}
function removeBorder(){
    tabitems.forEach(item => item.classList.remove('tab-border'));
}
function removeshow(){
    tabconitems.forEach(item => item.classList.remove('show'))
}
tabitems.forEach(item => item.addEventListener('click',selectItem));


