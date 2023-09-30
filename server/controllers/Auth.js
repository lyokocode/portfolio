export const register = async (req, res, next) => {
    try {
        console.log("first")
    } catch (err) {
        next(err)
    }
}