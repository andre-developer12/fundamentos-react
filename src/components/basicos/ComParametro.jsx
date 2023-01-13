export default function ComParemtro(params){
    const status = params.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2><strong>{params.titulo}</strong></h2>
            <p>
                <strong>{params.nome} </strong> 
                tem nota 
                <strong> {params.nota} </strong>
                está
                <strong> {status}</strong>
            </p>
        </div>
    )
}