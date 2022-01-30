function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:4000/admin/karavan/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allKaravans = document.getElementById('getAllKaravan');

            data.forEach( el => {
                allKaravans.innerHTML += `<li>karavanId: ${el._id}, marka: ${el.marka}, 
                    model: ${el.model}, snaga: ${el.snaga}, kubikaza: ${el.kubikaza},
                    brojVrata: ${el.brojVrata},cenaPoDanu: ${el.cenaPoDanu}</li>`;
            });
        });

    document.getElementById('addKaravan').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/karavan/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {

                // document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'karavan.html';
            });
    });

    document.getElementById('deleteKaravan').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            karavanId: document.getElementById('karavanId').value
        };

        fetch('http://localhost:4000/admin/karavan/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'karavan.html';
            });
    });


    document.getElementById('updateKaravan').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/karavan/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'karavan.html';
            });
    });


    document.getElementById('getKaravan').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            karavanId: document.getElementById('karavanId').value
        };

        fetch('http://localhost:4000/admin/karavan/getOne', {
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
