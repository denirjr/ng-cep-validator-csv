export interface SearchCep {
  status: number;
  ok: boolean;
  code: string;
  state: string;
  city: string;
  district: string;
  address: string;
  statusText: string;
}
