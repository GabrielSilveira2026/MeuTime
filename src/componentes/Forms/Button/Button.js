import styles from './Button.module.css'

function Button({text, largura}) {
  return (
    <button type='submit' className={`${styles.submitButton} ${styles[largura]}`}>
    {text}</button>
  )
}

export default Button