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

                <h1>Humedad</h1>

            </div>
        );
    }
}
