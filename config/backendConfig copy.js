
import ThirdPartyEmailPasswordNode from 'supertokens-node/recipe/thirdpartyemailpassword'

import SessionNode from 'supertokens-node/recipe/session'
import { appInfo } from './appInfo'
import { createUserSP } from '../src/pages/api/users/createUser'

import EmailVerification from "supertokens-node/recipe/emailverification";

import { getUsersNewestFirst } from "supertokens-node";


export const backendConfig = () => {

    console.log('++++++++++++++++++++++++++', EmailVerification)
    async function getUsers() {

        // get the latest 100 users
        let usersResponse = await getUsersNewestFirst();

        let users = usersResponse.users;
        let nextPaginationToken = usersResponse.nextPaginationToken;

        // get the next 200 users
        usersResponse = await getUsersNewestFirst({
            limit: 200,
            paginationToken: nextPaginationToken,
        })

        users = usersResponse.users;
        nextPaginationToken = usersResponse.nextPaginationToken;

        // get for specific recipes
        usersResponse = await getUsersNewestFirst({
            limit: 200,
            paginationToken: nextPaginationToken,
            // only get for those users who signed up with ThirdPartyEmailPassword
            //includeRecipeIds: ["thirdpartyemailpassword"],
        })

        users = usersResponse.users;
        nextPaginationToken = usersResponse.nextPaginationToken;
        console.log('+++++++++++++++++++', users)
    }
    getUsers()
    // deleteUserForId()
    return {
        framework: "express",
        supertokens: {
            // try.supertokens.io is for demo purposes. Replace this with the address of your core instance 
            //(sign up on supertokens.io), or self host a core.
            //connectionURI: "https://try.supertokens.io",
            // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
            // connectionURI: 'https://f9c77d5143a811ecba169b72c9819ce6-eu-west-1.aws.supertokens.io:3570',
            //apiKey: 'rsISVaFVPhxvHCTBcdq7wdcvUPrvti',
            connectionURI: process.env.NEXT_PUBLIC_SUPERTOKENSCORE_CONNECT_URI,
            apiKey: process.env.NEXT_PUBLIC_SUPERTOKENSCORE_API_KEY

        },

        appInfo,
        recipeList: [
            EmailVerification.init({
                mode: "REQUIRED",
                override: {
                    apis: (originalImplementation) => {
                        return {
                            ...originalImplementation,
                            verifyEmailPOST: async function (input) {

                                if (originalImplementation.verifyEmailPOST === undefined) {
                                    throw Error("Should never come here");
                                }

                                // First we call the original implementation
                                let response = await originalImplementation.verifyEmailPOST(input);

                                // Then we check if it was successfully completed
                                if (response.status === "OK") {
                                    let { id, email } = response.user;
                                    // TODO: post email verification logic
                                }
                                return response;
                            }
                        }
                    }
                }
            }),
            ThirdPartyEmailPasswordNode.init({
                providers: [
                    // We have provided you with development keys which you can use for testsing.
                    // IMPORTANT: Please replace them with your own OAuth keys for production use.
                    ThirdPartyEmailPasswordNode.Google({
                        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
                        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
                        //clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                        // clientSecret: "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"
                    }),
                    ThirdPartyEmailPasswordNode.Github({
                        clientId: "467101b197249757c71f",
                        clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
                    }),
                    ThirdPartyEmailPasswordNode.Apple({
                        clientId: "4398792-io.supertokens.example.service",
                        clientSecret: {
                            keyId: "7M48Y4RYDL",
                            privateKey:
                                "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                            teamId: "YWQCXGJRJL",
                        },
                    }),
                    // ThirdPartyEmailPasswordNode.Facebook({
                    //   clientSecret: "FACEBOOK_CLIENT_SECRET",
                    //   clientId: "FACEBOOK_CLIENT_ID",
                    // }),
                ],

                //Sobreescribe callback para lanzar evento tras login o registro
                override: {
                    apis: (originalImplementation) => {
                        return {
                            ...originalImplementation,

                            // override the email password sign up API
                            emailPasswordSignUpPOST: async function (input) {
                                if (originalImplementation.emailPasswordSignUpPOST === undefined) {
                                    throw Error("Should never come here");
                                }

                                // TODO: some pre sign up logic

                                let response = await originalImplementation.emailPasswordSignUpPOST(input);

                                if (response.status === "OK") {
                                    // TODO: some post sign up logic
                                    createUserSP(response)
                                }

                                return response;
                            },

                            // override the email password sign in API
                            emailPasswordSignInPOST: async function (input) {
                                if (originalImplementation.emailPasswordSignInPOST === undefined) {
                                    throw Error("Should never come here");
                                }

                                // TODO: some pre sign in logic

                                let response = await originalImplementation.emailPasswordSignInPOST(input);

                                if (response.status === "OK") {
                                    // TODO: some post sign in logic
                                }

                                return response;
                            },
                            //TODO: BORRA USUARIOS DADOS DE ALTA EN SUPERTOKENS Y CREA SOLO EN MONGO CUANDO HAGAN SIGN UP EN SUPERTOKENS
                            // override the thirdparty sign in / up API
                            thirdPartySignInUpPOST: async function (input) {
                                if (originalImplementation.thirdPartySignInUpPOST === undefined) {
                                    throw Error("Should never come here");
                                }

                                // TODO: Some pre sign in / up logic

                                let response = await originalImplementation.thirdPartySignInUpPOST(input);

                                if (response.status === "OK") {
                                    if (response.createdNewUser) {
                                        //Cuando el usuario se crea en la bdd de supertokens
                                        // TODO: some post sign up logic
                                        createUserSP(response)
                                    } else {
                                        //Cuando el usuario ya existe en la bdd de supertokens
                                        // TODO: some post sign in logic
                                        createUserSP(response)
                                    }
                                }

                                return response;
                            }
                        }
                    }
                }
            }),
            //SessionNode.init(),

            SessionNode.init(
                {
                    override: {
                        functions: (originalImplementation) => {
                            return {
                                ...originalImplementation,
                                createNewSession: async function (input) {
                                    let userId = input.userId;
                                    console.log('####################', input.response)
                                    //gestion del rol admin 
                                    let admin = userId === 'c05864ca-8e53-4100-8f01-d0070f6e4a7e'

                                    input.accessTokenPayload = {
                                        ...input.accessTokenPayload,
                                        admin,
                                        userId
                                    };
                                    return originalImplementation.createNewSession(input);
                                },
                            };
                        },
                    },
                }
            ),

        ],
        isInServerlessEnv: true,
    }
}
