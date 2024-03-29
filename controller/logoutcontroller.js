const logout = (req,res)=>{

    res.clearCookie('access_token')
    res.status(200).redirect('/')
}

module.exports = {logout}