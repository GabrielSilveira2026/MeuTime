import styles from './Select.module.css';

function Select({text, name, options, handleOnChange, tipo}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select 
        name={name} 
        id={name} 
        onChange={handleOnChange}
      >
        <option>Selecione a opção</option>
        {
          tipo === "pais"?
          options.map((opcao) => (
            <option value={opcao.name} key={opcao.name}>{opcao.name}</option>
          ))
          :
          options.map((opcao) => (
            <option value={opcao?.league?.id} key={opcao?.league?.id}>{opcao?.league?.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select