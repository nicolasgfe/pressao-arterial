import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      sistolica: " ",
      diastolica: " ",
      result: " "
    }
  }

  // onChangeSistolica(event) {
  //   this.setState({
  //     sistolica: event.target.value
  //   })
  // }
  // onChangeDiastolica(event) {
  //   this.setState({
  //     diastolica: event.target.value
  //   })
  // }





  // onChangeInput(event, field) {
  //   this.setState({
  //     [field]: event.target.value
  //   })
  // }


  onChangeInput(event) {
    const field = event.target.name
    this.setState({
      [field]: event.target.value
    })
  }


  verificarPressao() {
    let resultPressao;
    if (this.state.sistolica < 130 && this.state.diastolica < 85) {
      resultPressao = "Normal"
    } else if (this.state.sistolica < 140 && this.state.diastolica < 90) {
      resultPressao = 'Normal - Limítrofe'
    } else if (this.state.sistolica < 160 && this.state.diastolica < 100) {
      resultPressao = 'Hipertensão leve'
    } else if (this.state.sistolica < 180 && this.state.diastolica < 110) {
      resultPressao = ' Hipertensão moderada'
    } else {
      resultPressao = ' Hipertensão gravissima'
    }

    this.setState({
      result: resultPressao
    })
  }

  mostrarResultado() {
    if (this.state.result !== ` `) {
      return <p> Seu diagnóstico é: {this.state.result} </p>
    }
  }


  render() {

    return (
      <div>
        <h1>Controle de pressáo arterial</h1> <br></br>
        {/* 
        Pressão Sistólica: <br />
        <input type="text" onChange={(event) => this.onChangeSistolica(event)} />


        <br />
        <br />

        Pressão Diastólica: <br />
        <input type="txt" onChange={(event) => this.onChangeDiastolica(event)} />
        <br /><br />


         */}
        Pressão Sistólica: <br />
        <input type="text" name='sistolica' onChange={(event) => this.onChangeInput(event)} />


        <br />
        <br />

        Pressão Diastólica: <br />
        <input type="txt" name='diastolica' onChange={(event) => this.onChangeInput(event)} />
        <br /><br />

        <input type="button" value="Verificar"
          onClick={() => this.verificarPressao()} />

        <br></br>
        {/* {
          this.state.result !== ` `
            ? <p> Seu diagnóstico é: {this.state.result} </p>
            : null

        } */}

        {this.mostrarResultado()}

        {/* Resultado: {this.state.result}            */}
      </div>
    )

  }
}

export default App;
