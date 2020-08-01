export type UpdateAuth = () => Promise<void>

export type SnackSeverity = 'success' | 'info' | 'warning' | 'error'

export type SetLoading = (loading: boolean) => Promise<void>

export type openSnack = (
  message: string,
  severity: SnackSeverity,
) => Promise<void>

export type Address = {
  address1: string
  address2: string | null | undefined
  city: string
  state: string
  zip: string
}
