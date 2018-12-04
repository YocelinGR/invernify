import Humidity from "../models/humidity";
import axios from 'axios';

export default class HumidityService {
    public async sampleHumidity(): Promise<Humidity[]> {
        return axios.get('api/iot/humidity').then(x => x.data);
    }
}