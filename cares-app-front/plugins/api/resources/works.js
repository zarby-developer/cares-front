class Job{
    constructor(axios){
        this.axios = axios
    }

    async list(){
        try {

            const response = await this.axios.get("jobs");
            console.log(response)

            return response.data
        }catch(error){
            throw error
        }
    }
  

    async send(jobData){
        try {
            const response = await this.axios.post("jobs", jobData)

            return response.data
        }catch(error){
            throw error
        }
    }
    async delete(jobId){
        try{
            const response = await this.axios.delete(`jobs/${jobId}`)
            return response.data
        }catch(error){

        }
    }
}

export default Job