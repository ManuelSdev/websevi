
import ThirdPartyEmailPasswordReact from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'
import IconCorpName from "../src/components/elements/IconCorpName"
import Box from '@mui/system/Box'
import EmailVerification from 'supertokens-auth-react/lib/build/recipe/emailverification'

export const frontendConfig = () => {
    return {
        appInfo,
        recipeList: [
            ThirdPartyEmailPasswordReact.init({
                //TODO: QUITA onHandleEvent SI usas el callback del backend
                onHandleEvent: async (context) => {
                    if (context.action === "SESSION_ALREADY_EXISTS") {
                        // TODO:
                    } else {
                        let { id, email } = context.user;
                        if (context.action === "SUCCESS") {
                            if (context.isNewUser) {
                                // TODO: Sign up
                            } else {
                                // TODO: Sign in
                            }
                        }
                    }
                },
                signInAndUpFeature: {
                    providers: [
                        ThirdPartyEmailPasswordReact.Google.init(),
                        //  ThirdPartyEmailPasswordReact.Facebook.init(),
                        // ThirdPartyEmailPasswordReact.Github.init(),
                        // ThirdPartyEmailPasswordReact.Apple.init(),
                    ],
                    signInForm: {
                        formFields: [
                            {
                                id: "email",
                                label: "Correo electrónico",
                                placeholder: "Correo eléctrónico"
                            },
                            {
                                id: "password",
                                label: "Contraseña",
                                placeholder: "Contraseña"
                            }
                        ]
                    },
                    //Personaliza formulario de login
                    signUpForm: {
                        formFields: [
                            {
                                id: "email",
                                label: "Correo electrónico",
                                placeholder: "Correo eléctrónico"
                            },
                            {
                                id: "password",
                                label: "Contraseña",
                                placeholder: "Contraseña"
                            }
                        ]
                    },
                    style: {
                        button: {
                            backgroundColor: '#009CAC',
                            borderColor: '#009CAC'
                        }
                    }


                },
                //Personaliza tomando la key de un componente y pasándola a tu custom como prop
                override: {
                    components: {
                        ThirdPartySignInAndUpProvidersForm: ({ DefaultComponent, ...props }) => {
                            /**
                            * In this case, the <EmailPasswordSignInHeader> will render the default component
                            * wrapped in div with octocat picture above it.
                            */
                            return (
                                <DefaultComponent {...props} />
                            );
                        },
                        EmailPasswordSignInHeader: ({ DefaultComponent, ...props }) => {
                            /**
                            * In this case, the <EmailPasswordSignInHeader> will render the default component
                            * wrapped in div with octocat picture above it.
                            */

                            return (
                                <Box>
                                    <IconCorpName
                                        viewBox="0 0 381.17 68.88"

                                        sx={{ mb: 4, fill: "blue", height: "100%", fontSize: 250 }}
                                    ></IconCorpName>
                                    <DefaultComponent {...props} />
                                </Box>
                            );
                        },
                        EmailPasswordSignUpHeader: ({ DefaultComponent, ...props }) => {
                            /**
                            * In this case, the <EmailPasswordSignInHeader> will render the default component
                            * wrapped in div with octocat picture above it.
                            */
                            return (
                                <Box>
                                    <IconCorpName
                                        viewBox="0 0 381.17 68.88"

                                        sx={{ mb: 4, fill: "blue", height: "100%", fontSize: 250 }}
                                    ></IconCorpName>
                                    <DefaultComponent {...props} />
                                </Box>
                            );
                        },
                    },
                    /*
                    emailVerification: {
                        components: {
                            // Please refer to overriding email verification components below
                        }
                    }
                    */
                }
            }),
            EmailVerification.init(),
            SessionReact.init(),
        ],
    }
}
