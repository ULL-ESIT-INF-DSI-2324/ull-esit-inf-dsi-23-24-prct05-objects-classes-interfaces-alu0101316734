import "mocha";
import { expect } from "chai";
import {Menu_instance,nutricion_decent,unhealth_ascend,Menu_solucion,dishes,racional_descend} from "../src/ejercicio-2"


describe('Ejercicio 2 - Menu saludable',() => {
    it('Comprobamos si funciona ordenando nutricionalmente',() => {
        const data:dishes =[[5,2],[6,3],[4,4]];
        const solcion =new Menu_solucion([[5,2],[6,3]]);
        const Menu = new Menu_instance(data,3);
        const platos_rodenados=Menu.ordenar_platos(new nutricion_decent);
        expect(solcion.check_is_correct(platos_rodenados)).to.be.equal(true);
    })
    it('Comprobamos si funciona ordenado no sanamenete',() => {
        const data:dishes =[[5,2],[6,3],[4,4]];
        const solcion =new Menu_solucion([[5,2],[6,3]])
        const Menu = new Menu_instance(data,3)
        const platos_rodenados=Menu.ordenar_platos(new unhealth_ascend);
        expect(solcion.check_is_correct(platos_rodenados)).to.be.equal(false);
    })
    it('Comprobamos si no funciona ordenando relacionalmente',() => {
        const data:dishes =[[5,2],[6,3],[4,4]];
        const solcion =new Menu_solucion([[5,2],[6,3]])
        const Menu = new Menu_instance(data,3)
        const platos_rodenados=Menu.ordenar_platos(new racional_descend);
        expect(solcion.check_is_correct(platos_rodenados)).to.be.equal(false);
    })
    it('Comprobamos si funciona ordenando relacionalmente',() => {
        const data:dishes =[[5,2],[6,3],[4,4]];
        const solcion =new Menu_solucion([[6,3],[5,2]])
        const Menu = new Menu_instance(data,3)
        const platos_rodenados=Menu.ordenar_platos(new racional_descend);
        expect(solcion.check_is_correct(platos_rodenados)).to.be.equal(true);
    })
});