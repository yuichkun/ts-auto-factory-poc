export type Organization = {
    name: string
    users: User[]
    location: Location
}

export type User = {
    id: number
    name: string
    isAdmin: boolean
    location: Location
    organization?: Organization
    phoneNumber?: string
    sns: SNS[]
}

export type Location = {
    lat: number
    name: string
}

export type SNS = {
    name: string
    url: string
}