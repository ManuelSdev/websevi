
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

**Ruta para los botones 
supertokens-auth-react/lib/build/recipe/thirdparty/providers/index.js 

Busca "continue with", que es lo que sale en el botón

el componente en la consola react del navegador  se llama ThirdPartySignInAndUpProvidersForm
con esto lo sacas por consola
   override: {
                    components: {
                        ThirdPartySignInAndUpProvidersForm: ({ DefaultComponent, ...props }) => {
                            /**
                            * In this case, the <EmailPasswordSignInHeader> will render the default component
                            * wrapped in div with octocat picture above it.
                            */


                            console.log('+++', { DefaultComponent })



                            return (

                                <DefaultComponent {...props} />



                            );
                        },