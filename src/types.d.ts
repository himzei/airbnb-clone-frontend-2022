export interface IRoomPhoto {
  pk: string;
  file: string;
  description: string;
}

export interface IRoomList {
  pk: string;
  name: string;
  country: string;
  city: string;
  price: string;
  rating: string;
  is_owner: boolean;
  photos: IRoomPhoto[];
}

export interface IRoomOwner {
  name: string;
  avatar: string;
  username: string;
}

export interface IAmenity {
  name: string;
  description: string;
}

export interface IRoomDetail extends IRoomList {
  created_at: string;
  updated_at: string;
  rooms: number;
  toilets: number;
  description: number;
  address: string;
  pet_friendly: boolean;
  kind: string;
  is_owner: boolean;
  is_liked: boolean;
  category: {
    name: string;
    kind: string;
  };
  owner: IRoomOwner;
  amenities: IAmenity[];
}

export interface IReview {
  user: IRoomOwner;
  payload: string;
  rating: number;
}

export interface IUsernameLoginVariables {
  username: string;
  password: string;
}
export interface IUsernameLoginSuccess {
  ok: string;
}
export interface IUsernameLoginError {
  error: string;
}
