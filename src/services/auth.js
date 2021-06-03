

const authUsers =
    [
        { email: 'mohamed@instabug.com', password: '12345678' },
        { email: 'mohamed1@instabug.com', password: '12345678' },
        { email: 'mohamed2@instabug.com', password: '12345678' },
        { email: 'mohamed3@instabug.com', password: '12345678' },
        { email: 'mohamed4@instabug.com', password: '12345678' },
        { email: 'mohamed5@instabug.com', password: '12345678' },
        { email: 'mohamed6@instabug.com', password: '12345678' },
        { email: 'mohamed7@instabug.com', password: '12345678' },
    ]



export const isUserAuthenticated = (email, password) => {
    let authenticatedUser = null
    authUsers.forEach(user => {
        if (user.email == email && user.password == password) {
            authenticatedUser = user
        }
    })
    return authenticatedUser
}