import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LogoutIcon from '@mui/icons-material/Logout';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { authLogout } from '../app/store/authSlice';


export const userPageSections = [
    {
        name: 'Mis datos',
        path: 'mis-datos',
        icon: <PersonOutlineIcon fontSize="small" />
    },
    {
        name: 'Lista de deseos',
        path: 'lista-de-deseos',
        icon: <FavoriteBorderIcon fontSize="small" />
    },
    {
        name: 'Valoraciones',
        path: 'valoraciones',
        icon: <StarBorderIcon fontSize="small" />
    },
    {
        name: 'Pédidos',
        path: 'pedidos',
        icon: <ShoppingBagOutlinedIcon fontSize="small" />
    },
    {
        name: 'Opciones de pago',
        path: 'opciones-de-pago',
        icon: <PaymentOutlinedIcon fontSize="small" />
    },
    {
        name: 'Cerrar sesión',

        action: authLogout(),
        icon: <LogoutIcon fontSize="small" />
    }
]

export const adminPageSections = [
    {
        name: 'Pedidos',
        path: 'pedidos',
        icon: <ShoppingCartIcon fontSize="small" />
    },
    {
        name: 'Productos',
        path: 'productos',
        icon: <AssignmentIcon fontSize="small" />
    },
    {
        name: 'Crear producto',
        icon: <NoteAddIcon fontSize="small" />
    },
    {
        name: 'Crear categorías',
        icon: <CreateNewFolderIcon fontSize="small" />
    },
    {
        name: 'Importar catálogo',
        icon: <FileDownloadIcon fontSize="small" />
    },
    {
        name: 'Reiniciar estado',
        icon: <RestartAltIcon fontSize="small" />
    }
]