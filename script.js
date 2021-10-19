var currency = "usd"
var usdprice = 0


function changecurrency() {
    currencyelement = document.getElementById("currency")
    currencyvalue = currencyelement.options[currencyelement.selectedIndex].value
    currency = currencyvalue
    console.log(`trocou para ${currency}`)
}

const usdbrl = () => {
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
        .then(response => response.json())
        .then(preco => {
            usdprice = parseFloat(preco.USDBRL.high)
        })    
}

const getCoinPrices = () => {
    const pvuapi = `https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794`
    var precopvu = document.getElementById('precopvu')
    fetch(pvuapi)
        .then(response => response.json())
        .then(preco => {
            pvuprice = parseFloat(preco.data.price)
            if (currency == "usd") 
                precopvu.innerHTML = `$${pvuprice.toFixed(2)}`
            else
                precopvu.innerHTML = `R$${(pvuprice*usdprice).toFixed(2)}`
        })
    const bcoinapi = `https://api.pancakeswap.info/api/v2/tokens/0x00e1656e45f18ec6747f5a8496fd39b50b38396d`
    var precobcoin = document.getElementById('precobcoin')
    fetch(bcoinapi)
        .then(response => response.json())
        .then(preco => {
            bcoinprice = parseFloat(preco.data.price)
            if (currency == "usd") 
                precobcoin.innerHTML = `$${bcoinprice.toFixed(2)}`
            else
                precobcoin.innerHTML = `R$${(bcoinprice*usdprice).toFixed(2)}`
        })
    const ccarapi = `https://api.pancakeswap.info/api/v2/tokens/0x50332bdca94673f33401776365b66cc4e81ac81d`
    var precoccar = document.getElementById('precoccar')
    fetch(ccarapi)
        .then(response => response.json())
        .then(preco => {
            ccarprice = parseFloat(preco.data.price)
            if (currency == "usd") 
                precoccar.innerHTML = `$${ccarprice.toFixed(2)}`
            else
                precoccar.innerHTML = `R$${(ccarprice*usdprice).toFixed(2)}`
        })
    const cpanapi = `https://api.pancakeswap.info/api/v2/tokens/0x04260673729c5f2b9894a467736f3d85f8d34fc8`
    var precocpan = document.getElementById('precocpan')
    fetch(cpanapi)
        .then(response => response.json())
        .then(preco => {
            cpanprice = parseFloat(preco.data.price)
            if (currency == "usd") 
                precocpan.innerHTML = `$${cpanprice.toFixed(2)}`
            else
                precocpan.innerHTML = `R$${(cpanprice*usdprice).toFixed(2)}`
        })
    const darkapi = `https://api.pancakeswap.info/api/v2/tokens/0x12fc07081fab7de60987cad8e8dc407b606fb2f8`
    var precodark = document.getElementById('precodark')
    fetch(darkapi)
        .then(response => response.json())
        .then(preco => {
            darkprice = parseFloat(preco.data.price)
            if (currency == "usd") 
                precodark.innerHTML = `$${darkprice.toFixed(2)}`
            else
                precodark.innerHTML = `R$${(darkprice*usdprice).toFixed(2)}`
        })
    const gameapi = `https://api.pancakeswap.info/api/v2/tokens/0x66109633715d2110dda791e64a7b2afadb517abb`
    var precogame = document.getElementById('precogame')
    fetch(gameapi)
        .then(response => response.json())
        .then(preco => {
            gameprice = parseFloat(preco.data.price)
            if (currency == "usd") 
                precogame.innerHTML = `$${gameprice.toFixed(2)}`
            else
                precogame.innerHTML = `R$${(gameprice*usdprice).toFixed(2)}`
        })
        
}

setInterval(getCoinPrices, 5000)


/* DOLAR PRICE 



fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
        .then(response => response.json())
        .then(preco => {
            usdprice = parseFloat(preco.USDBRL.high)
            console.log(usdprice)
        })

*/