export interface DataEnvelope<T> {
  data: T
  message?: string
  isSuccess: boolean
}

export interface DataListEnvelope<T> {
  data: T[]
  total: number
  isSuccess: boolean
}
