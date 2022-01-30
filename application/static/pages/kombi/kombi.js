function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:4000/admin/kombi/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allKombis = document.getElementById('getAllKombi');

            data.forEach( el => {
                allKombis.innerHTML += `<li>kombiId: ${el._id}, marka: ${el.marka}, 
                    model: ${el.model}, snaga: ${el.snaga}, kubikaza: ${el.kubikaza},
                    brojVrata: ${el.brojVrata},cenaPoDanu: ${el.cenaPoDanu}</li>`;
            });
        });

    document.getElementById('addKombi').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/kombi/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {

                // document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'kombi.html';
            });
    });

    document.getElementById('deleteKombi').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            kombiId: document.getElementById('kombiId').value
        };

        fetch('http://localhost:4000/admin/kombi/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'kombi.html';
            });
    });


    document.getElementById('updateKombi').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/kombi/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'kombi.html';
            });
    });


    document.getElementById('getKombi').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            kombiId: document.getElementById('kombiId').value
        };

        fetch('http://localhost:4000/admin/kombi/getOne', {
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
