function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:4000/admin/motor/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allMotors = document.getElementById('getAllMotor');

            data.forEach( el => {
                allMotors.innerHTML += `<li>motorId: ${el._id}, marka: ${el.marka}, 
                    model: ${el.model}, snaga: ${el.snaga}, kubikaza: ${el.kubikaza},
                    cenaPoDanu: ${el.cenaPoDanu}</li>`;
            });
        });

    document.getElementById('addMotor').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/motor/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {

                // document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'motor.html';
            });
    });

    document.getElementById('deleteMotor').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            motorId: document.getElementById('motorId').value
        };

        fetch('http://localhost:4000/admin/motor/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'motor.html';
            });
    });


    document.getElementById('updateMotor').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value,
        };

        fetch('http://localhost:4000/admin/motor/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'motor.html';
            });
    });


    document.getElementById('getMotor').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            motorId: document.getElementById('motorId').value
        };

        fetch('http://localhost:4000/admin/motor/getOne', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}

        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'user.html';
            });
    });

    document.getElementById('logout').addEventListener('click', e => {
        //document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}
