import style from './Logo.module.css'

function Logo() {
  return (
    <div className={style.logo}>
      <h1>Bem Vindo ao <span>Meu Time</span>, onde você fica por dentro de tudo do seu <span>Seu Time!</span></h1>
      <h3>Ainda não tem sua Key da API-Footbal? <br/> <a href="https://dashboard.api-football.com/register" target="_blank">Clique Aqui</a> e garanta já a sua!</h3>
    </div>
  )
}

export default Logo