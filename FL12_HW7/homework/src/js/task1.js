const six = 6;
const five = 5;
const email = prompt('Enter your email: ', '');

if(!email) {
    alert('Canceled.');
} else if(email.length < five) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if(email.length > five && (email === 'user@gmail.com' || email === 'admin@gmail.com')) {
    let password = prompt('Enter your password ', '');
    if(!password) {
        alert('Canceled');
    } else if(email === 'user@gmail.com' && password === 'UserPass' 
            || email === 'admin@gmail.com' && password === 'AdminPass') {
        let chagePassword = confirm('Do you want to change your password?')
        if(chagePassword) {
            let oldPass = prompt('Enter your OLD password:', '')
            if(!oldPass) {
                alert('Canceled');
            } else {
                if(password !== oldPass) {
                    alert('Wrong password');
                } else {
                    let newPass = prompt('Enter a new password:', '');
                    if (newPass === null || newPass === '') {
                        alert('Canceled');
                    } else if(newPass.length < six) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        let newPassAgain = prompt('Enter a new password again:', '');
                        if(newPass !== newPassAgain) {
                            alert('You wrote the wrong password');
                        } else {
                            alert('You have successfully changed your password');
                        }
                    }
                }
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}