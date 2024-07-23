let userBtn = document.querySelector('.btn__start');

userBtn.addEventListener('click', (said) => {
    said.preventDefault();

    let window = document.createElement('div');
    window.classList.add('window');

    window.innerHTML = `
        <div class="window__header">
            <div class="window__header__1">
            <h1 class="window__title">VAQTNI TANLANG</h1>
                <select name="pets" id="pet-select">
                    <option value="3">3 MINUT</option>
                    <option value="5">5 MINUT</option>
                    <option value="7">7 MINUT</option>
                </select>

            </div>
            <div class="window__header__2">
            <h1 class="window__title">DARAJANI TANLANG</h1>
                <select name="pets" id="pet-select">
                    <option value="3">OSON</option>
                    <option value="5">O'RTA</option>
                    <option value="7">QIYIN</option>
                </select>
            </div>
        </div>
        <a href="./game.html">
            <button type="submit" class="window__main__btn">START</button>
        </a>
    `;
    document.body.appendChild(window);
    let menu1 = window.querySelector('.window__header__1__btn');
    menu1.addEventListener('click', (event) => {
        event.preventDefault();
        let menu = document.createElement('div');
        menu.classList.add('menu');
        menu.innerHTML = `
            <button class="menu__item menu__item__1">OSON</button>
            <button class="menu__item menu__item__2">O'RTA</button>
            <button class="menu__item menu__item__3">QIYIN</button>
        `;
        window.appendChild(menu);
        // Add event listeners for the new menu items
        menu.querySelector('.menu__item__1').addEventListener('click', () => {
            alert('ok')
        });
        menu.querySelector('.menu__item__2').addEventListener('click', () => {
            // Handle click for O'RTA
        });
        menu.querySelector('.menu__item__3').addEventListener('click', () => {
            // Handle click for QIYIN
        });
    });

    let menu2 = window.querySelector('.window__header__2__btn');
    menu2.addEventListener('click', (event) => {
        event.preventDefault();
        let menu = document.createElement('div');
        menu.classList.add('menu');
        menu.innerHTML = `
            <button class="menu__item">3 MIN</button>
            <button class="menu__item">5 MIN</button>
            <button class="menu__item">7 MIN</button>
        `;
        window.appendChild(menu);
            // Add event listeners for the new menu items
        menu.querySelector('.menu__item:nth-child(1)').addEventListener('click', () => {
            
        });
        menu.querySelector('.menu__item:nth-child(2)').addEventListener('click', () => {
            // Handle click for 5 MIN
        });
        menu.querySelector('.menu__item:nth-child(3)').addEventListener('click', () => {
            // Handle click for 7 MIN
        });
    });
});
