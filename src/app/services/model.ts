export interface UserPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface UserDetails {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: number,
    website: string,
    company: Company
}

export interface UserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

export interface Geo {
    lat: number,
    lng: number
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}