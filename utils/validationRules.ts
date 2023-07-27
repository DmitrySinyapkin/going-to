export const required = (v: string) => {
    return !!v || 'Field is required'
}

export const isEmail = (v: string) => {
    return /^\S+@\S+\.\S+$/.test(v) || 'Incorrect email'
}
