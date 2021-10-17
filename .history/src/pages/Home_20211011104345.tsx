import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import './styles/auth.scss'

export function Home() {
    return (
        <div>
            <aside>
                <img src={ilustrationImg} alt="Ilustração" />
                <strong>Crie Salas de Q&A ao Vivo</strong>
                <p>Tire suas dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Logo letmeask" />
                </div>
                <button>
                    <img src={googleIconImg} alt="Icone do Google" />
                    Crie sua sala com o Google
                </button>
                <div>Ou entre em uma sala</div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite o código da sala"
                    />
                    <button type="submit">
                        Entrar na sala
                    </button>
                </form>
            </main>
        </div>
    )
}