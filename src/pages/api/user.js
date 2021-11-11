
//https://supertokens.io/docs/thirdpartyemailpassword/nextjs/session-verification/in-api

import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import { verifySession } from 'supertokens-node/recipe/session/framework/express'
import NextCors from "nextjs-cors";

/**
 * Recuerde que siempre que queramos usar cualquier función de la supertokens-nodebiblioteca,
 *  tenemos que llamar a la supertokens.initfunción en la parte superior de ese archivo de 
 * función sin servidor.
 */
import supertokens from 'supertokens-node'
import { backendConfig } from '../../../config/backendConfig'

supertokens.init(backendConfig())

export default async function user(req, res) {

    // NOTE: We need CORS only if we are querying the APIs from a different origin
    await NextCors(req, res, {
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        origin: "http://localhost:3000",
        credentials: true,
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    });

    // we first verify the session 
    await superTokensNextWrapper(
        async (next) => {
            return await verifySession()(req, res, next)
        },
        req, res
    )
    // if it comes here, it means that the session verification was successful


    return res.json({
        note: 'Fetch any data from your application for authenticated user after using verifySession middleware',

        time: req.session.getTimeCreated(),
        userId: req.session.getUserId(),
        sessionHandle: req.session.getHandle(),
        accessTokenPayload: req.session.getAccessTokenPayload(),

    })
}
