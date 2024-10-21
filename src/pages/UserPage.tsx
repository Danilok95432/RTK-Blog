import { useParams } from "react-router-dom"
import { useGetUserQuery } from "../store/api"

const UserPage = () => {
  const { id } = useParams()
  const { data: user } = useGetUserQuery(id)
  console.log(user)
  return(
    <div>

    </div>
  )
}

export default UserPage