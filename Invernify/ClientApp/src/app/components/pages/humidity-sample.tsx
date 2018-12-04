import React from 'react';
import Helmet from "react-helmet";
import HumidityService from "../../../services/humidity-service";

export default class HumiditySample extends React.Component {
    async componentDidMount() {
        const service = new HumidityService();
        const x = await service.sampleHumidity();
        console.log({x});
    }

    public render() {
        return (
            <div>
                <Helmet>
                    <title>Humidity Sample</title>
                </Helmet>


                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"> <img src="./assets/zanahoria.png" alt=""/>Invernify</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Huertos</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#">Compras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Métricas</a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th colSpan={5}>
                        <h4><img src="./assets/tomatito.png" alt=""/> Huerto 1 tomatitos</h4>
                        </th>
                    </tr>

                    <tr>
                        <th className="semanas" scope="col">Métricas</th>
                        <th className="semanas" scope="col">Primera</th>
                        <th className="semanas" scope="col">Segunda</th>
                        <th className="semanas" scope="col">Tercera</th>
                        <th className="semanas" scope="col">Cuarta</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"><img src="./assets/humedad.png" alt=""/> Humedad</th>
                        <td><img src="./assets/feliz.png" alt=""/></td>
                        <td><img src="./assets/pregunta.png" alt=""/></td>
                        <td><img src="./assets/feliz.png" alt=""/></td>
                        <td><img src="./assets/emocionado.png" alt=""/></td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="./assets/temperatura.png" alt=""/> Temperatura</th>
                        <td><img src="./assets/feliz.png" alt=""/></td>
                        <td><img src="./assets/triste.png" alt=""/></td>
                        <td><img src="./assets/feliz.png" alt=""/></td>
                        <td><img src="./assets/emocionado.png" alt=""/></td>
                    </tr>
                    <tr>
                        <th scope="row">Tiempo</th>
                        <td><img src="./assets/semilla.png" alt=""/></td>
                        <td><img src="./assets/brote .png" alt=""/></td>
                        <td><img src="./assets/planta.png" alt=""/></td>
                        <td><img src="./assets/tomatito.png" alt=""/></td>

                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}
