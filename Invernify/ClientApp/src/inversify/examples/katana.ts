import {injectable} from "inversify";
import {IWeapon} from "./example-interfaces";

@injectable()
export class Katana implements IWeapon {
    public hit() {
        return "cut with katana!";
    }
}
