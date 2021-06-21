class User{
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
    async update(user){
        try {

            const response = await this.axios.put(`users/${user._id}`,user);
            return response.data
        } catch (error) {
            throw error
        }

    }
    async findById(userId){
        try {

            const response = await this.axios.get(`users/${userId}`);
            return response.data
        } catch (error) {
            throw error
        }

    }
    async list(){
        try {

            const response = await this.axios.get("users");
            console.log(response)

            return response.data
        }catch(error){
            throw error
        }
    }
}

export default User