'use client'
export default function Form(){

    const [nome, setNome] = useState("Vitor");

    return(
        <div>
            <h2>Nome: {nome}</h2>
            <form> 
                <input 
                className="text-black"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}/>
            </form>
        </div>
    )
}