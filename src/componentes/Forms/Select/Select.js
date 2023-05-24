import Option from '../Option/Option';
import styles from './Select.module.css';

function Select({text, name, options, handleOnChange, opValue, opKey, opText}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select 
        name={name} 
        id={name} 
        onChange={handleOnChange}
      >
        <option>Selecione a opção</option>
        {options.map((opcao) => (
          <Option opcao={opcao} opValue={opValue} opKey={opKey} opText={opText}></Option>
          // <option value={opcao.name} key={opcao.name}>{opcao.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Select