location.hash = '';
let data;

async function fetchData(api, method) {
    try {
        const respose = await fetch(api, method);
        const data = await respose.json();
        return data;
    } catch(err) {
        console.log(err.message);
    }
}

let users = [];
async function getUsers() {
    const loader = document.getElementsByClassName('spinner');
    try {
        loader[0].classList.add('loader');
        const respose = await fetch('https://jsonplaceholder.typicode.com/users');
        data = await respose.json();
        loader[0].classList.remove('loader');
        console.log(data);
        users = data;
        data.forEach(el => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="user-information">
                <div class="user-information_main-info">
                    <img class="user-img" src="https://picsum.photos/100?random=${el.id} width="100" height="100" alt="user-img">
                    <div>
                        <div ><b>User:</b> <span class="edit-element user-name" role="name">${el.name}</span></div>
                        <div ><b>UserName: </b><span class="edit-element" role="username">${el.username}</span></div>
                        <div><b>Email: </b> <span class="edit-element" role="email" >${el.email}</span></div>
                    </div>
                    <div class="user-information_">
                        <div class="btn-container">
                            <button class="edit-btn" type='button'>EDIT</button>
                            <button class="save-btn hidden" type='button'>SAVE</button>
                            <button class="delete-btn" type='button'>DELETE</button>
                        </div>
                    </div>
                </div>
                <div class="user-information_minor-info">
                    <div>
                        <div class="adress-header">Adress</div>
                        <div><b>street: </b> <span class="edit-element" role="street">${el.address.street}</span></div>
                        <div><b>suit: </b> <span class="edit-element" role="suite">${el.address.suite}</span></div>
                        <div><b>city: </b> <span class="edit-element" role="city">${el.address.city}</span></div>
                        <div><b>zipcode: </b> <span class="edit-element" role="zipcode">${el.address.zipcode}</span></div>
                        <div><b>GEO</b></div>
                        <div><b>lat: </b> <span class="edit-element" role="lat">${el.address.geo.lat}</span></div>
                        <div><b>lng: </b> <span class="edit-element" role="lng">${el.address.geo.lng}</span></div>

                    </div>
                    <div class="user-information_contacts-info">
                        <div><b>phone: </b> <span class="edit-element" role="phone">${el.phone}</span></div>
                        <div><b>website: </b> <span class="edit-element" role="website">${el.website}</span></div>
                    </div>
                    <div class="user-information_company-info">
                        <div class="company-name">Company:</div>
                        <div><b>Name: </b><span class="edit-element" role="companyName">${el.company.name}</span></div>
                        <div><b>catchPhrase: </b><span class="edit-element" role="catchPhrase">${el.company.catchPhrase}</span> </div>
                        <div><b>bs: </b><span class="edit-element" role="bs">${el.company.bs}</span></div>
                    </div>
                </div>
            </div>
            `;
            li.classList.add('item');
            li.setAttribute('id', el.id);
            container[0].append(li);
          });

        loader[0].classList.remove('loader');


    } catch(err) {
        loader[0].textContent = "Something was happened... Plese try reload the page!";
        console.log(err.message);
    }
}

let listOfUsers = document.getElementsByClassName('list-wrapper_list')[0];

let hash = document.getElementsByClassName('hash'); 
setTimeout(() => {
    window.addEventListener("hashchange", () => {
        console.log('change');
        console.log(listOfUsers);
        let container = document.getElementsByClassName('list-wrapper')[0];
        if(document.getElementsByClassName('list-wrapper_list')[0]) {
            listOfUsers.remove();
        } else if(!document.getElementsByClassName('list-wrapper_list')[0] && location.hash === ''){
            container.append(listOfUsers);
        } 
        if(document.getElementsByClassName('post-container')[0]) {
            document.getElementsByClassName('post-container')[0].remove();
        }

        let containerForPosts = document.createElement('div');
        containerForPosts.className = "post-container";
        container.append(containerForPosts);
        let id;
        try {
            id = location.hash.slice(location.hash.match(/=/).index + 1);
        } catch {
            console.log('error');
        }

        Promise.all([fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`), fetch(`https://jsonplaceholder.typicode.com/comments`)]).then(responses => {
            Promise.all(responses.map(r => r.json())).then(data => {
                console.log(data[1]);
                for(let post of data[0]) {
                    console.log(post);
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = `
                        <div><b>Post</b> <span>${post.id}</span></div>
                        <div class="title"><b>${post.title}</b></div>
                        <div class="post-body">${post.body}</div>
                    `;
                     containerForPosts.append(newDiv);
                }
                
            });
        })
    }, false);
}, 0)

getUsers();

const container = document.getElementsByClassName('list-wrapper_list');
container[0].addEventListener('click', function(event) {
    let id = event.target.closest('li').getAttribute('id');
    if(event.target.classList.contains('edit-btn')) {
        console.log('edit');
        editUser(event.target.closest('li'))
    } else if(event.target.classList.contains('delete-btn')) {
        deleteUser(event.target.closest('li'))
    } else if(event.target.classList.contains('save-btn')) {
        event.target.className = 'edit-btn';
        event.target.textContent = 'EDIT';
        console.log('save');
        
        let body = data.find(el => el.id === +id);

        const spinerContainer = document.createElement('div');
        spinerContainer.className = "spinner-container";
        spinerContainer.innerHTML = '<div class="loader save-loader"></div>'
        event.target.closest('li').append(spinerContainer);

        fetch(`https://jsonplaceholder.typicode.com/posts/${+id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            spinerContainer.remove();
            let els =  event.target.closest('li').getElementsByClassName('edit-element-input');
            for(let i = 0; i < els.length; i++) {
                const paragraph = document.createElement('span');
                paragraph.className = "edit-element";
                paragraph.textContent = els[i].value;
                paragraph.setAttribute('role', els[i].getAttribute('name'));
                if(els[i].getAttribute('name') === 'name') {
                    paragraph.classList.add('user-name');
                }
                els[i].replaceWith(paragraph);
                i--;
            }
        });

    } else if(event.target.classList.contains('user-name')) {
        location.hash = `user/comments&posts/?id=${+id}`;
    }
});

function editUser(element) {
    let editedElement = data.find(el => el.id === +element.getAttribute('id'));
    
    let editBtn = element.getElementsByClassName('edit-btn')[0];
    editBtn.className = 'save-btn';
    editBtn.textContent = 'SAVE';

    let elements = element.getElementsByClassName('edit-element');
    const editInputField = document.createElement('input');

    for(let i = 0; i < elements.length; i++) {
        const editInputField = document.createElement('input');
        editInputField.setAttribute('size', 15);
        editInputField.addEventListener('change', function() {

            if(this.name === 'name') {
                editedElement.name = this.value;
            } else if(this.name === 'username') {
                editedElement.username = this.value;
            } else if(this.name === 'email') {
                editedElement.email = this.value
            } else if(this.name === 'street') {
                editedElement.address.street = this.value;
            } else if(this.name === 'suite') {
                editedElement.address.suite = this.value;
            } else if(this.name === 'city') {
                editedElement.address.city = this.value;
            } else if(this.name === 'zipcode') {
                editedElement.address.zipcode = this.value;
            } else if(this.name === 'lat') {
                editedElement.address.geo.lat = this.value;
            } else if(this.name === 'lng') {
                editedElement.address.geo.lng = this.value;
            } else if(this.name === 'phone') {
                editedElement.phone = this.value;
            } else if(this.name === 'website') {
                editedElement.website = this.value;
            } else if(this.name === 'companyName') {
                editedElement.company.name = this.value;
            } else if(this.name === 'catchPhrase') {
                editedElement.company.catchPhrase = this.value;
            } else if(this.name === 'bs') {
                editedElement.company.bs = this.value;
            }
        });
        editInputField.className = "edit-element-input";
        editInputField.setAttribute('name', elements[i].getAttribute('role'));
        editInputField.value = elements[i].textContent;
        elements[i].replaceWith(editInputField);
        i--;
    }
}

function deleteUser(element) {
    const spinerContainer = document.createElement('div');
    spinerContainer.className = "spinner-container";
    spinerContainer.innerHTML = '<div class="loader save-loader"></div>'
    element.append(spinerContainer);
    let ind;
    fetch(`https://jsonplaceholder.typicode.com/posts/${+element.getAttribute('id')}`, {
     method: 'DELETE'
    }).then(() => {
        let elForDelete = data.find((el, index) => {
            ind = index;
            return el.id === +element.getAttribute('id');
        });
        data.splice(ind, 1);
        element.remove();
    })
}
