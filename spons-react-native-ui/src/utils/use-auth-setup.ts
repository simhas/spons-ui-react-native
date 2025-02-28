import { useState, useEffect } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';

export const useAuthSetup = (supabase: SupabaseClient) => {

  const [profileId, setProfileId] = useState<string | null | undefined>(undefined);
  const [userId, setUserId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    async function loadState(userId: string | null) {
      var profile = await supabase.from('profile').select().eq('id', userId).maybeSingle()
      if (!profile.data) {
        setProfileId(null)
      }
      else {
        setProfileId(profile.data?.id)
      }
    }

    if (userId !== null && userId !== undefined) {
      loadState(userId)
    }
  }, [userId])

  useEffect(() => {

    //supabase.auth.getSession().then(({ data: { session } }) => {
    //})

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUserId(session?.user?.id ?? null)
    })

    // Clean up by calling unsubscribe when component unmounts
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { profileId, userId };
};
