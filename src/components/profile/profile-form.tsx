"use client"

import { Tables } from "@/types/database"
import { createClient } from "@/utils/supabase/client"
import { type User } from "@supabase/supabase-js"
import { useCallback, useEffect, useState } from "react"
import Avatar from "./avatar"

interface IProfile
  extends Omit<Tables<"profiles">, "created_at" | "updated_at"> {}

export default function ProfileForm({ user }: { user: User | null }) {
  console.log("ProfileForm")
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<IProfile | null>(null)

  const userId = user?.id
  const getProfile = useCallback(async () => {
    if (!userId) {
      return
    }

    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from("profiles")
        .select()
        .eq("id", userId)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }
      console.log("profile: ", data, userId)

      if (data) {
        setProfile(data)
      }
    } catch (error) {
      console.error("Error loading user data!", error)
    } finally {
      setLoading(false)
    }
  }, [userId, supabase])

  useEffect(() => {
    getProfile()
  }, [userId, getProfile])

  async function updateProfile({
    name,
    avatar,
  }: {
    name: string | null
    avatar: string | null
  }) {
    if (!userId || !profile) {
      return
    }

    try {
      setLoading(true)

      const { error } = await supabase.from("profiles").upsert({
        id: profile.id,
        user_id: userId as string,
        updated_at: new Date().toISOString(),
        name,
        avatar,
      })
      if (error) {
        throw error
      }
      console.log("Profile updated!")
    } catch (error) {
      console.log("Error updating the data!", error)
    } finally {
      setLoading(false)
    }
  }

  //   https://volslymfkdeblzqdnfkp.supabase.co/storage/v1/object/public/avatars/ed5e39dc-409e-4671-91fc-8d86ac626e2b-0.21225383379750484.png
  console.log(profile)

  if (!profile) {
    return null
  }

  return (
    <div className="form-widget">
      <Avatar
        uid={user?.id ?? null}
        url={profile.avatar_url}
        size={150}
        onUpload={(url) => {
          console.log("huh ?", url)
          //   setAvatarUrl(url)
          //   setProfile({ ...profile, avatar: url })
          //   updateProfile({ name: profile.name, avatar: url })
        }}
      />
      <span>avatar: {profile.avatar_url}</span>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={profile.name || ""}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() =>
            updateProfile({
              name: profile.name,
              avatar: profile.avatar_url,
            })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}
