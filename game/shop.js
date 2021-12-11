function shop(product){
    const gold = document.getElementById('gold');
    const can_lev = document.getElementById('can_lev');
    const energy_lev = document.getElementById('energy_lev');
    const fac_lev = document.getElementById('fac_lev');
    const seed_lev = document.getElementById('seed_lev');

    let can = can_lev.innerText;
    let energy = energy_lev.innerText;
    let fac = fac_lev.innerText;
    let seed = seed_lev.innerText;

    let cash = parseInt(gold.innerText);

    // 각 물건 가격 계산
    let can_price = parseInt(can_lev.innerText) * 150;
    let energy_price = parseInt(energy_lev.innerText) * 150;
    let fac_price = parseInt(fac_lev.innerText) * 150;
    let seed_price = parseInt(seed_lev.innerText) * 150;
    
    switch(product){
        case 'can_buy':
            if(cash >= can_price){
                can = parseInt(can)+1;
                cash = cash - can_price;
            }else{
                alert('골드가 부족합니다.');
            }
            break;
        case 'energy_buy':
            if(cash >= energy_price){
                energy = parseInt(energy)+1;
                cash = cash - energy_price;
            }else{
                alert('골드가 부족합니다.');
            }
            break;
        case 'fac_buy':
            if(cash >= fac_price){
                fac = parseInt(fac)+1;
                cash = cash - fac_price;
            }else{
                alert('골드가 부족합니다.');
            }
            break;
        case 'seed_buy':
            if(cash >= seed_price){
                seed = parseInt(seed)+1;
                cash = cash - seed_price;
            }else{
                alert('골드가 부족합니다.');
            }
            break;
    }

    can_lev.innerText = can;
    energy_lev.innerText = energy;
    fac_lev.innerText = fac;
    seed_lev.innerText = seed;
    gold.innerText = cash;
}