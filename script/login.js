const IDpassword = document.getElementById('ipasswd')
const IDlogin = document.getElementById('ilogin')

const isa = {
    login: 'isabelli',
    password: 'isa1234@',
}

const manu = {
    login: 'emanuelle',
    password: 'unam',
}

const emilly = {
    login: 'emilly',
    password: 'emilly2011@',
}

const sigmadabaia = {
    login: 'adm',
    password: 'gordogay'
}

function entrar() {
    const password = IDpassword.value
    const Login = IDlogin.value
    const login = Login.toLowerCase()
    if(!(login == emilly.login || login == isa.login || login == manu.login || login == sigmadabaia.login)) {
        window.alert('[ERROR] Login incorreto ou inexistente') /*testa se o login existe*/ 
    } else {
       switch(login){
    case emilly.login:
        if(password !== emilly.password){
            window.alert('senha incorreta')
        } else {
            sessionStorage.setItem('user', 'Emilly')
            window.location.href = 'html/pag001.html'
        }
        break
    case isa.login:
        if(password !== isa.password){
            window.alert('senha incorreta')
        } else {
            sessionStorage.setItem('user', 'Isabelli')
            window.location.href = 'html/pag001.html'
        }
        break
    case manu.login:
        if(password !== manu.password){
            window.alert('senha incorreta')
        } else {
            sessionStorage.setItem('user', 'Emanuelle')
            window.location.href = 'html/pag001.html'
        }
        break
    case sigmadabaia.login:
        if(password !== sigmadabaia.password){
            window.alert('senha incorreta')
        } else {
            sessionStorage.setItem('user', 'Dev')
            window.location.href = 'html/pag001.html'
        }
        break
}

    }
}