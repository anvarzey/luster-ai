export interface SearchData {
  access_mode: string
  asset_id: string
  bytes: number
  created_at: string
  folder: string
  format: string
  height: number
  public_id: string
  resource_type: string
  secure_url: string
  type: string
  url: string
  version: number
  width: number
}

export type SearchResponse = SearchData[]
