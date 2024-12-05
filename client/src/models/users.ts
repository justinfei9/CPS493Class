import { loadScript, rest } from './myFetch'
import { ref } from 'vue'

interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: {
    lat: number
    lng: number
  }
  country: string
}

interface Hair {
  color: string
  type: string
}

interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

interface Company {
  department: string
  name: string
  title: string
  address: Address
}

interface Crypto {
  coin: string
  wallet: string
  network: string
}

export class User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
  crypto: Crypto
  role: string

  constructor(data: any) {
    this.id = data.id
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.email = data.email
    this.phone = data.phone
    this.password = data.password
    this.birthDate = data.birthDate
    this.image = data.image
    this.bloodGroup = data.bloodGroup
    this.height = data.height
    this.weight = data.weight
    this.eyeColor = data.eyeColor
    this.hair = data.hair
    this.ip = data.ip
    this.address = data.address
    this.macAddress = data.macAddress
    this.university = data.university
    this.bank = data.bank
    this.company = data.company
    this.ein = data.ein
    this.ssn = data.ssn
    this.userAgent = data.userAgent
    this.crypto = data.crypto
    this.role = data.role
  }
}

const session = ref({
  user: null as User | null,
  token: '',
  message: '',
  isLoading: false
})
export const refSession = () => session
export const useLogin = () => ({
  async login(email: string, password: string) {},
  async logout() {
    session.value.user = null
  },
  async googleLogin() {
    await loadScript('https://accounts.google.com/gsi/client')
    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: 'email',
      callback: async (response: any) => {
        console.log('response', response)
        if (response.access_token) {
          session.value.token = response.access_token

          const googleUser = await rest<any>(
            'https://www.googleapis.com/oauth2/v1/userinfo',
            undefined,
            'GET',
            {
              Authorization: `Bearer ${session.value.token}`
            }
          )

          console.log(googleUser)
          session.value.user = {
            firstName: googleUser.given_name,
            lastName: googleUser.family_name,
            email: googleUser.email,
            image: googleUser.picture
          }
          console.log(session.value.user)
        }
      }
    })
    tokenClient.requestAccessToken({})
  }
})

export async function getGoogleContacts() {
  const contacts = await rest<any>(
    'https://people.googleapis.com/v1/people/me/connections',
    undefined,
    'GET',
    {
      Authorization: `Bearer ${session.value.token}`
    }
  )
  return contacts
}

export async function getGooglePhotos() {
  const photos = await rest<any>(
    'https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=100',
    undefined,
    'GET',
    {
      Authorization: `Bearer ${session.value.token}`
    }
  )
  console.log(photos)
  return photos
}
