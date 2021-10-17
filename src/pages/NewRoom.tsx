import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'
import { push, ref } from '@firebase/database'
import { useAuth } from '../hooks/useAuth'

export function NewRoom() {
    const { user } = useAuth()
    const history = useHistory()
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if (newRoom.trim() === '') {
            return;
        }

        const refRooms = ref(database, 'rooms')

        const firebaseRoom = await push(refRooms, {
            title: newRoom,
            authorId: user?.id
        })

        if (firebaseRoom) {
            console.log(`Sala inserida: ${firebaseRoom}`)

            history.push(`/rooms/${firebaseRoom.key}`)

        }

    }

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
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}