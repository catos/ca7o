import { JwtPayload, sign, verify } from "jsonwebtoken"

interface ISignOption {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: ISignOption = {
  expiresIn: "1h",
}

export function signJwtAccessToken(
  payload: JwtPayload,
  options: ISignOption = DEFAULT_SIGN_OPTION
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
