import { useState } from "react"
const AppHook = () => {

    const [sistolica, setSistolica] = useState('')
    const [diastolica, setDiastolica] = useState('')
    const [result, setResult] = useState('')




     const calcular = () => {
        if (sistolica < 130 && diastolica < 85) {
            setResult("Normal")
        } else if (sistolica < 140 && diastolica < 90) {
            setResult('Normal - Limítrofe')
        } else if (sistolica < 160 && diastolica < 100) {
            setResult('Hipertensão leve')
        } else if (sistolica < 180 && diastolica < 110) {
            setResult(' Hipertensão moderada')
        } else {
            setResult(' Hipertensão gravissima')
        }
    }




    return (
        <div>
            <h1>Controle de pressáo arterial</h1> <br></br>
            Pressão Sistólica: <br />
            <input type="text" name='sistolica' onChange={(event) => setSistolica(event.target.value)} />


            <br />
        <br />

            Pressão Diastólica: <br />
            <input type="txt" name='diastolica' onChange={(event) => setDiastolica(event.target.value)} />
            <br /><br />

            <input type="button" value="Verificar"
                    onClick={calcular} />

            <br></br>

            Resultado: {result}           
        </div>
    )

}
export default AppHook