import IlustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={IlustrationImg} alt="Ilustração" />
                <strong>Crie Salas de Q&A ao Vivo</strong>
                <p>Tire suas dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={LogoImg} alt="Logo letmeask" />
                </div>
            </main>
        </div>
    )
}