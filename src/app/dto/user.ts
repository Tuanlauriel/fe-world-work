export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    address: string | null,
    phone: string | null
}