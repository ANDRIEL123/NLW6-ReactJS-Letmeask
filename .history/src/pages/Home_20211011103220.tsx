import IlustrationImg from '../assets/images/illustration.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={IlustrationImg} alt="Ilustração" />
                <strong>Crie Salas de Q&A ao Vivo</strong>
            </aside>
        </div>
    )
}