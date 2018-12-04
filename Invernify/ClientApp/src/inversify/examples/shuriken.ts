import {injectable} from "inversify";
import {IThrowableWeapon} from "./example-interfaces";

@injectable()
export class Shuriken implements IThrowableWeapon {
    public throw() {
        return "hit with shuriken!";
    }
}