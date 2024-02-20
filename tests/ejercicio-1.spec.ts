import "mocha";
import { expect } from "chai";
import {TFG,TFM,Libro,Gestor_de_Referncias_Bibliograficas,Articulo} from "../src/ejercicio-1"


describe('Gestor_de_Referncias_Bibliograficas', () => {
    it('should create a reference and retrieve it correctly', () => {
        const referencia = new Gestor_de_Referncias_Bibliograficas(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            new Date("18-02-2000"),
            100,
            'Editorial'
        );

        const recopilacion = referencia.getrecopilacion();

        expect(recopilacion.length).to.be.equal(1);
        expect(recopilacion[0][0]).to.be.equal('Título');
        expect(recopilacion[0][1]).to.be.equal('Autor'); 
        expect(recopilacion[0][2]).to.deep.equal(['Palabra1', 'Palabra2']); 
        expect(recopilacion[0][3]).to.be.equal('Resumen'); 
        expect(recopilacion[0][4]).to.be.equal("18-02-2000");
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
    });
});

describe('Articulo', () => {
    it('should create an article reference and retrieve it correctly', () => {
        const articulo = new Articulo(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            new Date(),
            100,
            'Editorial',
            'Volumen',
            'Revista'
        );

        const recopilacion = articulo.getrecopilacion();

        expect(recopilacion.length).to.be.equal(1);
        expect(recopilacion[0][0]).to.be.equal('Título');
        expect(recopilacion[0][1]).to.be.equal('Autor'); 
        expect(recopilacion[0][2]).to.deep.equal(['Palabra1', 'Palabra2']); 
        expect(recopilacion[0][3]).to.be.equal('Resumen'); 
        expect(recopilacion[0][4]).to.be.equal("18-02-2000");
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
    });
});