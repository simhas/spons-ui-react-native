import { useState, useEffect } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import * as Crypto from 'expo-crypto';

export const useAuthSetup = (supabase: SupabaseClient) => {

  const [state, setState] = useState<"sign-in" | "ok" | undefined>(undefined);

  useEffect(() => {

    async function setup() {
        var response = await supabase.from('profile').select('*').maybeSingle()

        if (!response.data) {

            var auth = await supabase.auth.getUser()
            if (auth.error || !auth.data.user) {
                setState('sign-in')
                return
            }

            const sha256Text = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                auth.data.user.email ?? "");

            var profile = await supabase.from('profile').insert({
                id: auth.data.user.id,
                user_id: auth.data.user.id,
                first_name: auth.data.user.user_metadata.given_name,
                last_name: auth.data.user.user_metadata.family_name,
                display_name: auth.data.user.user_metadata.name,
                email: auth.data.user.email,
                email_hash: sha256Text,
            })

            if (profile.error) {
                console.log("profile error: ", profile.error)
                setState('sign-in')
                return
            }
        }

        setState('ok')
    }

    setup()
}, [])

  return { state };
};
