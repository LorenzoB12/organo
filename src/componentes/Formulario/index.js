import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        });
        limparCampos();
    }

    const limparCampos = () => {
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    const limparCamposTime = () => {
        setNomeTime("");
        setCorTime("");
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(event) => {
                event.preventDefault();
                cadastrarTime({nome: nomeTime, cor: corTime});
                limparCamposTime();
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do novo time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    tipo='color'
                    label='Cor' 
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar card' />
            </form>
        </section>
    )
}

export default Formulario