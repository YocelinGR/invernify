import {Container} from "inversify";
import getDecorators from "inversify-inject-decorators";
import ExampleTypes from "./examples/example-types";
import {Katana} from "./examples/katana";
import {Ninja} from "./examples/ninja";
import {Shuriken} from "./examples/shuriken";
import {IThrowableWeapon, IWarrior, IWeapon} from "./examples/example-interfaces";

const container = new Container();
container.bind<IWarrior>(ExampleTypes.Warrior).to(Ninja);
container.bind<IWeapon>(ExampleTypes.Weapon).to(Katana);
container.bind<IThrowableWeapon>(ExampleTypes.ThrowableWeapon).to(Shuriken);

export default container;

const {lazyInject} = getDecorators(container);

export {lazyInject};