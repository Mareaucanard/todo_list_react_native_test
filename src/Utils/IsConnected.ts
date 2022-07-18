function IsConnected(token: string | undefined | null): boolean {
    if (!token) {
        return false
    }
    // Call refresh token route here
    return true
}

export default IsConnected
