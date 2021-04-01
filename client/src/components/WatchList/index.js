// import react from "react"
import logo from "../../img/logo.png"
import "../../pages/style.css"

function WatchList() {
    return (
        <div className="d-flex flex-column float-right favorites shadow-lg bg-light" style={{ width: 250 }}>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center rounded shadow-lg" >
                <div className="container-fluid text-center">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="A-Lists" width="200" className="d-inline-block align-text-top" />
                    </a>
                    <hr />
                </div>
                <li className="nav-item" id="movieTitle">
                    <h3>Title:</h3>
                    <h5>Lord of The Rings</h5>
                    <hr />
                </li>
                <li className="nav-item">
                    <div className="rounded shadow-lg 250px">
                        <img id="movieImg" src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" width="225" height="300" />
                    </div>
                </li>
                <br />
                <li className="nav-item">
                    <h4>Description</h4>
                    <hr />
                </li>
                <hr />
            </ul>
        </div>
    )
}

export default WatchList()