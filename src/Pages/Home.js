import React from 'react';
import '../App.css'

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly',  margin: 'auto'}}>
      <div style={{ width: 'fit-content' }}>
        <img src='https://i.pinimg.com/564x/e1/73/fc/e173fc9a32887f1891ae5107f0c1f88c.jpg' style={{ height: 500 }} />
      </div>
      <div style={{ width: 'fit-content' }}>
        <img src='https://i.pinimg.com/564x/18/a2/eb/18a2eb1759e243bca39fce2e8c25bd50.jpg' style={{ height: 500 }} />
      </div>
      <div style={{ width: 'fit-content' }}>
        <img src='https://i.pinimg.com/564x/f4/3a/ec/f43aec97e826299f2ae0fbe7e919491e.jpg' style={{ height: 500 }} />
      </div>
      <div style={{ width: 'fit-content' }}>
        <img src='https://i.pinimg.com/564x/3b/aa/f4/3baaf41738be5e1f05255d8df28f4efe.jpg' style={{ height: 500 }} />
      </div>
    </div>
  )
}

export default Home