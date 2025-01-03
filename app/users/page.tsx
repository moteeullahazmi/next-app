import axios from "axios"

async function Page(){

    const response = await axios.get("http://localhost:3000/api/v1/users/details/");

    
    const data = response.data

    
  return (
    <div>
      
      {data.name} <br />
      {data.email}
    </div>
  )
}

export default Page
