export interface SigninCredencials {
    email: string,
    password: string
}

export interface SignupCredencials extends SigninCredencials{
    displayName: string
}

