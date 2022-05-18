import './styles.css'

const renderSobre = (container: HTMLElement) => {
  const htmlContent = `
    <div id="sobre">
      <p>Esse site foi criado para exemplificar o uso de autenticação de usuários via e-mail e senha , ultilizando a API do Firebase</p>
      <a href="index.html">Home</a>
      <a href="logout.html">Sair</a>
      <span>@TSI IFMS Campus Aquidauana</span>
    </div>
  `

  container.innerHTML = htmlContent
}

const $ = document.querySelector.bind(document)
const app = <HTMLDivElement>$('#app')
const token = localStorage.getItem('token')
if (token) {
  renderSobre(app)
} else {
  window.location.href = 'login.html'
}

