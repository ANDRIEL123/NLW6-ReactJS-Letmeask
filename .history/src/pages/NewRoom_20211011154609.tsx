import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração" />
                <strong>Crie Salas de Q&A ao Vivo</strong>
                <p>Tire suas dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo letmeask" />

                    <h2>Crie uma sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <a href="www.google.com">Clique aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )
}