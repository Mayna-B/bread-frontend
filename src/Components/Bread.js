import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Bread() {
    const [bread, setBread] = useState({})

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

    return (
        <div>
            <h1>{bread.name}</h1>
            <p>Has Gluten: {bread.hasGluten}</p>
            <img src={bread.image} alt={bread.name} height={300} />
        </div>
    )
}

export default Bread
