import {expect} from 'chai';
import "reflect-metadata";
import container from "../inversify.config";
import ExampleTypes from "./example-types";
import {IWarrior} from "./example-interfaces";

const ninja = container.get<IWarrior>(ExampleTypes.Warrior);

describe('Dependency inversion demo', () => {
    it('Should work', () => {
        expect(ninja.fight()).eql("cut with katana!"); // true
        expect(ninja.sneak()).eql("hit with shuriken!"); // true
    });
});