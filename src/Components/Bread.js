import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Bread() {
    const navigate = useNavigate()

    const [bread, setBread] = useState(null)

    const { id } = useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            const URL = `${process.env.REACT_APP_BACKEND_URI}/breads/${id}`
            const response = await fetch(URL)
            const data = await response.json()
            setBread(data)
        }

        fetchData()
    }, [id])

    const deleteBread = async () => {
        const URL = `${process.env.REACT_APP_BACKEND_URI}/breads/${id}`
        const response = await fetch(URL, {
            method: 'DELETE'
        })
        if (response.status !==204) console.log('error') // add error handling later    
    }

     const display = bread && (
            <div>
                <h1>{bread.name}</h1>
                <p>Has Gluten: {bread.hasGluten.toString()}</p>
                <img src={bread.image} alt={bread.name} height={300} />
                <div>
                <button onClick={() => navigate(`/bread/update/${id}`)}>Edit</button>
                <button onClick={deleteBread}>Delete</button>
                </div>
            </div>
        )

    return (
        <div>
            {display}
        </div>
    )
}

export default Bread
