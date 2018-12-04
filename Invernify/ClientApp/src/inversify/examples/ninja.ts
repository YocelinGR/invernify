import {inject, injectable} from "inversify";
import ExampleTypes from "./example-types";
import {IThrowableWeapon, IWarrior, IWeapon} from "./example-interfaces";

@injectable()
export class Ninja implements IWarrior {
    @inject(ExampleTypes.Weapon) private katana!: IWeapon;
    @inject(ExampleTypes.ThrowableWeapon) private shuriken!: IThrowableWeapon;

    public fight() {
        return this.katana.hit();
    };

    public sneak() {
        return this.shuriken.throw();
    };
}