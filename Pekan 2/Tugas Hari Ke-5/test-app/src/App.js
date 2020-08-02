import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{alignContent:"center"}}>
      <div class="container" style={{width:"50%",border:2,borderColor:"black",borderStyle:"solid",borderRadius:20,textAlign:"left"}}>
        <form>
            <h1 style={{textAlign:"center"}}>Form Pembelian Buah</h1>
            <table style={{width: "70%", padding: "2%", marginLeft: "40px"}}>
              <tr>
               <td><strong>Nama Pelanggan </strong></td>
               <td><input type="text"></input></td>
              </tr>
              <tr>
              <td><strong>&nbsp;</strong></td>
              </tr>
              <tr>
              <td><strong></strong></td>
              <td> <input type="checkbox"></input>Semangka</td>
              </tr>
              <tr>
              <td><strong></strong></td>
              <td> <input type="checkbox"></input>Jeruk</td>
              </tr>
              <tr>
              <td><strong></strong></td>
              <td> <input type="checkbox"></input>Nanas</td>
              </tr>
              <tr>
              <td><strong></strong></td>
              <td> <input type="checkbox"></input>Salak</td>
              </tr>
              <tr>
              <td><strong>Daftar Item</strong></td>
              <td> <input type="checkbox"></input>Anggur</td>
              </tr>
              <tr>
              <td><strong></strong></td>
              </tr>
              <tr>
                <td><button style={{borderRadius:10,backgroundColor:"white"}}>Kirim</button></td>
              </tr>
            </table>
        </form>
      </div>
    </div>
  );
}

export default App;
