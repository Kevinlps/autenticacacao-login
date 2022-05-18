import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { firebaseApp } from '../../config/firebase'

import './styles.css'

const $ = document.querySelector.bind(document)

const onSubmitCreateUserForm = (event: Event) => {
    event.preventDefault()
    const email = (<HTMLInputElement>$('#email')).value
    const password = (<HTMLInputElement>$('#password')).value

    const auth = getAuth(firebaseApp)

    createUserWithEmailAndPassword(auth,email,password)
        .then((_) => {
            const loginLink = <HTMLAnchorElement>document.createElement('a')
            loginLink.id = 'redirect-link'
            loginLink.innerText = 'Clique aqui para fazer o login'
            loginLink.href = 'login.html'

            const successMesage = <HTMLParagraphElement>document.createElement('p')
            successMesage.id = 'success-message'
            successMesage.innerText = 'Usuário criado com sucesso'

            const app = <HTMLDivElement>$('#app')
            app.insertAdjacentElement('beforeend' , successMesage)
            app.insertAdjacentElement('beforeend', loginLink)
        })
        .catch((_) => {
            const errorMesage = <HTMLParagraphElement>document.createElement('p')
            errorMesage.id = 'error-mesage'
            errorMesage.innerText = 'Ocorreu um erro ao criar o usuário'

            const app = <HTMLDivElement>$('#app')
            app.insertAdjacentElement('beforeend' , errorMesage)
        })
}

const renderCreateUserForm = (container: HTMLElement) => {
    const htmlContent = `
        <form >
            <div >
                <label for"email">E-mail</label>
                <input type="email" id="email" pleaceholder="E-mail" required>
            </div>
            <div >
                <label for"password">Senha</label>
                <input type="password" id="password" pleaceholder="Senha" required>
            </div>
            <button>Criar usuário</button>
        </form>
    `
    container.innerHTML = htmlContent
    const createUserForm = <HTMLFormElement>$('form')
    createUserForm.onsubmit = onSubmitCreateUserForm
}

export default renderCreateUserForm