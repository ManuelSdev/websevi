import Cors from 'cors'
import initMiddleware from '../../api/initMiddleware'

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS'],
    })
)

export default async function handler(req, res) {
    // Run cors
    //await cors(req, res)
    //console.log(req.url)
    // Rest of the API logic
    res.json({ message: 'Hello Everyone!' })
}

/*TEST EN CONSOLA DEL NAVEGADOR DESDE UN DOMINIO DIFERENTE

fetch('http://localhost:3000/api/cors')
  .then(res => res.json())
  .then(console.log)

  */