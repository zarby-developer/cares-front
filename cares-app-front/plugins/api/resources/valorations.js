class Valorations{
    constructor(axios){
        this.axios = axios
    }

    async list(){
        try {

            const response = await this.axios.get("valorations");
            console.log(response)

            return response.data
        }catch(error){
            throw error
        }
    }
  

    async send(valoration){
        try {
            const response = await this.axios.post("valorations", valoration)

            return response.data
        }catch(error){
            throw error
        }
    }
   
}

export default Valorations