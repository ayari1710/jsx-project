import raf from "./assets/abc.jpg"
import './App.css'
function App() {
    return (
        <div style={{ border: 'solid 1px black', maxWidth: '100vw ' }} className="dav">

            <h1 className='title red'> bienvenu dans rafikshop </h1>
            <br />
            <img src="téléchargement.jpg" alt="as" className="tofou" />
            <br />
            <img src={raf} alt="af" className="tofo" />
            <br />
            <iframe width="640" height="360" src="https://www.youtube.com/embed/HHNgr1Ft-oc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}



export default App;
