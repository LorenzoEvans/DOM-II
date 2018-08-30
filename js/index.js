// Your code goes here
/*


mouseenter

dblclick



click

*/
/*Default prevention.*/
let navLinks = document.querySelectorAll('.nav-link');
let adventureImg = document.querySelector('.img-content img');
console.log(navLinks);

navLinks.forEach(item => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        console.log(event);
    })
})

navLinks.forEach(item => {
    item.addEventListener('mouseenter', function(){
       if ( item.style.fontStyle === ''){
           item.style.fontStyle = 'italic' ;
       }

    })

    item.addEventListener('click', function(){
        item.style.fontStyle = 'bold';
    })
})

let fontColor = function(){
    this.style.color = 'purple'
}

navLinks.forEach(item => {
    item.addEventListener('click', fontColor);
})


adventureImg.addEventListener('dblclick', function(){
    
    adventureImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817_1280.jpg');
})

console.log(adventureImg);