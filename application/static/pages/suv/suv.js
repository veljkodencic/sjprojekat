function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:4000/admin/suv/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allSuvs = document.getElementById('getAllSuv');

            data.forEach( el => {
                allSuvs.innerHTML += `<li>suvId: ${el._id}, marka: ${el.marka}, 
                    model: ${el.model}, snaga: ${el.snaga}, kubikaza: ${el.kubikaza},
                    brojVrata: ${el.brojVrata},cenaPoDanu: ${el.cenaPoDanu}</li>`;
            });
        });

    document.getElementById('addSuv').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/suv/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {

                // document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'suv.html';
            });
    });

    document.getElementById('deleteSuv').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            suvId: document.getElementById('suvId').value
        };

        fetch('http://localhost:4000/admin/suv/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'suv.html';
            });
    });


    document.getElementById('updateSuv').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/suv/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'suv.html';
            });
    });


    document.getElementById('getSuv').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            suvId: document.getElementById('suvId').value
        };

        fetch('http://localhost:4000/admin/suv/getOne', {
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
