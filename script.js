const h2 = document.createElement('h2');
h2.textContent = "JS test";

document.querySelector('body').appendChild(h2);

const h1 = document.getElementById('h1');
h1.addEventListener('mouseenter', function(){
    h1.style = '5px dotted orange';
});

/*const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript"; 
document.querySelector('body').appendChild(h2); */