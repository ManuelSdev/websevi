export default async function handler(req, res) {
    // Run cors
    res.header("Access-Control-Allow-Origin", "https://stackoverflow.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "DELETE ,PUT");
    //console.log(req.url)
    // Rest of the API logic
    res.json({ message: 'Hello Everyone!' })
}