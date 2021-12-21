import ProfileBar from "../elements/ProfileBar"
const sections = [
    'Mis datos',
    'Lista de deseos',
    'Valoraciones',
    'Pédidos',
    'Opciones de pago'
]


const UserBar = () => {

    return (
        <ProfileBar sections={sections}></ProfileBar>
    )
}
export default UserBar