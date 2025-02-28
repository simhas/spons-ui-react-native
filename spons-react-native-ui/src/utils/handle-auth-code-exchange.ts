import { exchangeCodeAsync } from "expo-auth-session";
import { AccessTokenRequest } from "expo-auth-session";
import type { DiscoveryDocument } from "expo-auth-session";
import { SupabaseClient } from "@supabase/supabase-js";

export async function handleAuthCodeExchange(
    domain: string,
    code: string,
    clientId: string,
    redirectUri: string,
    codeVerifier: string,
    discovery: DiscoveryDocument,
    supabase: SupabaseClient
) {
    const accessToken = new AccessTokenRequest({
        code,
        clientId,
        redirectUri,
        scopes: ['openid'],//, 'offline_access', 'profile', 'email'],
        extraParams: {
            code_verifier: codeVerifier,
        },
    });

    var token = await exchangeCodeAsync(accessToken, discovery)
    const signInResponse = await supabase.auth.signInWithIdToken({
        provider: 'keycloak',
        token: token.idToken!,
        /* options: {
          data: {
            first_name: 'John'
          },
        } as any, */
    })

    try {
        await fetch(
            domain + `/protocol/openid-connect/logout?id_token_hint=${token.idToken!}`
        )
    } catch (e) {
        console.log("error: ", e)
    }


    return signInResponse
}

