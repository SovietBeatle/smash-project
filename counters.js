document.addEventListener('DOMContentLoaded', function() {
    const marioRect = document.getElementById('marioRect');
    const peachRect = document.getElementById('peachRect');

    marioRect.addEventListener('click', function() {
        console.log('Mario clicked!');
        peachRect.setAttribute('fill', 'rgb(0, 250, 0)');
    });

    
});
