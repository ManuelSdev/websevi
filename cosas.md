
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://laki:<password>@cluster0.nunzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


**RUTA DEL SignInHeader
/home/laki/tfg/websevi/node_modules/supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/signInAndUp/signInHeader.js