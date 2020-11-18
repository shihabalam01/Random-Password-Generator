const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    input.value = GeneratePassword(16);
})
function GeneratePassword(length){
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!$:/?*';
    let password = '';
    for(var i = 0; i< length;i++){
        password +=charset[Math.floor(Math.random() * (charset.length))]
    }

    return password;
}