const signupBtn = document.getElementById('signup');
const wrapper = document.querySelector('.wrapper');




const signupHandler = (e) => {
    e.preventDefault();
    const message = {
        message: this.message,
        btn: this.btn,
    }

    let email = document.getElementById('email');


    if (email.value === '') {
        alert(message.message = 'You should type your email!')
    } else {
        message.message = `Congratulations! You successful assign to the our company by email address: ${email.value}`;
        message.btn = 'Back to Signup';

        const popup = document.createElement("div")
        const insideTitle = document.createElement('h1');
        const backBtn = document.createElement('button');

        popup.className = 'popup';
        insideTitle.className = 'popup-title';
        backBtn.className = 'btn back-btn';
        backBtn.innerText = message.btn;
        insideTitle.innerText = message.message;

        wrapper.appendChild(popup);
        popup.appendChild(insideTitle);
        popup.appendChild(backBtn);

        backBtn.addEventListener('click', () => {
            wrapper.removeChild(popup);
            popup.removeChild(insideTitle);
            popup.removeChild(backBtn);

            email.value = '';
        });
    };


}




signupBtn.addEventListener('click', (e) => signupHandler(e));