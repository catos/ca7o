import { JwtPayload, sign, verify } from "jsonwebtoken"

type SignOptionType = {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: SignOptionType = {
  expiresIn: "1h",
}

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOptionType = DEFAULT_SIGN_OPTION
) {
  const key = process.env.JWT_SECRET
  const token = sign(payload, key!, options)
  return token
}

export function verifyJwt(token: string) {
  try {
    const key = process.env.JWT_SECRET
    const decoded = verify(token, key!)
    return decoded as JwtPayload
  } catch (error) {
    console.error(error)
    return null
  }
}
