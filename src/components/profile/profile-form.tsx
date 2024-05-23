"use client"
import { useCallback, useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { type User } from "@supabase/supabase-js"
import Avatar from "./avatar"
import { Tables } from "@/utils/supabase/database.types"

interface IProfile
  extends Omit<Tables<"profiles">, "created_at" | "updated_at"> {}

export default function ProfileForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  //   const [fullname, setFullname] = useState<string | null>(null)
  //   const [avatar, setAvatarUrl] = useState<string | null>(null)
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
        .select(`id, user_id, fullname, avatar`)
        .eq("user_id", userId)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }
      console.log("profile: ", data, userId)

      if (data) {
        // setFullname(data.fullname)
        // setAvatarUrl(data.avatar)
        setProfile(data)
      }
    } catch (error) {
      console.error("Error loading user data!")
    } finally {
      setLoading(false)
    }
  }, [userId, supabase])

  useEffect(() => {
    getProfile()
  }, [userId, getProfile])

  async function updateProfile({
    fullname,
    avatar,
  }: {
    fullname: string | null
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
        fullname,
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
      {/* <Avatar
        uid={user?.id ?? null}
        url={profile.avatar}
        size={150}
        onUpload={(url) => {
          //   setAvatarUrl(url)
          setProfile({ ...profile, avatar: url })
          updateProfile({ fullname: profile.fullname, avatar: url })
        }}
      /> */}
      <span>avatar: {profile.avatar}</span>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={profile.fullname || ""}
          onChange={(e) => setProfile({ ...profile, fullname: e.target.value })}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() =>
            updateProfile({
              fullname: profile.fullname,
              avatar: profile.avatar,
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
