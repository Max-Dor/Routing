import { useParams, useNavigate, useMatch, useLocation } from 'react-router-dom'
export  function Movie(){

    const id = useParams();
    // console.log(id)

    const navigate = useNavigate();
    // console.log(navigate);

    const value = useMatch();
    console.log(value);

    const value2 = useLocation();
    console.log(value2)


    return <>
        <h2>The some movie {id}</h2>
        <button className='btn'  onClick={()=> navigate('/')} >CLICK</button>
    </>
    
    
    
}