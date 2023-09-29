import './campo.css'

const Campo = ({ tipo = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo campo-${tipo}`}>
        <label>{label}</label>
        <input type={tipo} value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default Campo