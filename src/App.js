import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      hasil:0,
      angka1:0,
      angka2:0,
      rumus:"persegi"
    };
  }

  changeHandler = (event) => {
    let value = event.target.value
    this.setState({[event.target.name]:value})
  }

  submitHandler = () => {
    let rumus = this.state.rumus
    let hasil= 0
    if(rumus==="persegi"){
      let angka1 = parseInt(this.state.angka1)
      hasil = angka1*angka1
    }else if(rumus==="persegi panjang"){
      let angka1 = parseInt(this.state.angka1)
      let angka2 = parseInt(this.state.angka2)
      hasil = angka1*angka2
    }else if(rumus==="lingkaran"){
      let angka1 = parseInt(this.state.angka1)
      hasil = 22/7*angka1*angka1
    }
    
    this.setState({
      hasil,
      submit:!this.state.submit
    })
  }

  backHandler = () => {
    this.setState({
      submit:!this.state.submit
    })
  }

  changeScreenHandler = (name, val) => {
    this.setState({
      [name]:val,
      submit:false
    })
  }

  render() {
    return (
      <div>
        <center>
         
        <ButtonGroup
              variant="contained"
              color="secondary"
              aria-label="full-width contained primary button group"
            >
          <Button  onClick={() => this.changeScreenHandler('rumus','persegi')} >Persegi</Button>
          <Button  onClick={() => this.changeScreenHandler('rumus','persegi panjang')}>Persegi Panjang</Button>
          <Button  onClick={() => this.changeScreenHandler('rumus','lingkaran')}>Lingkaran</Button>

          </ButtonGroup>
          {!this.state.submit ? (
            <div>
            {this.state.rumus === "persegi" &&
              <div>
                <h1>Rumus Persegi Adalah SisixSisi</h1>
                <TextField id="standard-basic"  type="number" name="angka1" placeholder="Sisi" onChange={this.changeHandler}/>
                <br/><br/>
                
                <Button variant="contained" color="secondary"  type="submit" onClick={() => this.submitHandler()}> Hasil </Button> 
              </div>
            }
            {this.state.rumus === "persegi panjang" &&
              <div>
                <h1>Rumus Persegi Panjang Adalah PanjangxLebar</h1>
                <TextField id="standard-basic"  type="number" name="angka1" placeholder="Panjang" onChange={this.changeHandler}/>
                <br/><br/>

                <TextField id="standard-basic"  type="number" name="angka2" placeholder="Lebar" onChange={this.changeHandler}/>
                <br/><br/>
                
                <Button variant="contained" color="secondary"  type="submit" onClick={() => this.submitHandler()}> Hasil </Button> 
              </div>
            }
            {this.state.rumus === "lingkaran" &&
              <div>
                <h1>Rumus Lingkaran Adalah 22/7xrxr</h1>
                <TextField id="standard-basic" type="number" name="angka1" placeholder="Radian" onChange={this.changeHandler}/>
                <br/><br/>
                
                <Button variant="contained" color="secondary"  type="submit" onClick={() => this.submitHandler()}> Hasil </Button> 
              </div>
            }
            </div>

          ):(

            <div>
              <h1>Hasil dari Luas {this.state.rumus} adalah {this.state.hasil} </h1> 
              
              <Button variant="contained" color="secondary"  type="submit" onClick={() => this.backHandler()}> Back To Home </Button> 
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default App;
