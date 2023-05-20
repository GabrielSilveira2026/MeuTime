import styles from './Button.module.css'

function Button({text, largura, onClick}) {
  return (
    <button className={`${styles.submitButton} ${styles[largura]}`} onClick={onClick}>
    {text}</button>
  )
}

export default Button