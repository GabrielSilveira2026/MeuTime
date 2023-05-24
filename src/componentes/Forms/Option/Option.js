import React from 'react'

function Option({opcao, opValue, opKey, opText}) {
    return (
        <option value={opcao[opValue]} key={opcao[opKey]}>{opcao[opText]}</option>
    )
}

export default Option