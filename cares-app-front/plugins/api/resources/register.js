class Register{
    constructor(axios){
        this.axios = axios
    }

    async register(user){
        try {
            const response = await this.axios.post("/users", user)
            
            return response.data
        }catch(error){
            throw error
        }
    }
}

export default Register