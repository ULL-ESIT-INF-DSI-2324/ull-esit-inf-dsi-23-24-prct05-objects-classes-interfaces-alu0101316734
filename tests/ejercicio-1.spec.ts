import "mocha";
import { expect } from "chai";
import {TFG,TFM,Libro,Gestor_de_Referncias_Bibliograficas,Articulo,Congreso} from "../src/ejercicio-1"


describe('Gestor_de_Referncias_Bibliograficas', () => {
    it('Todo correcto en Referncias_Bibliograficas', () => {
        const fechaEsperada = new Date("2000-02-14");
        const referencia = new Gestor_de_Referncias_Bibliograficas(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            fechaEsperada,
            100,
            'Editorial'
        );

        const recopilacion = referencia.getrecopilacion();

        expect(recopilacion.length).to.be.equal(1);
        expect(recopilacion[0][0]).to.be.equal('Título');
        expect(recopilacion[0][1]).to.be.equal('Autor'); 
        expect(recopilacion[0][2]).to.deep.equal(['Palabra1', 'Palabra2']); 
        expect(recopilacion[0][3]).to.be.equal('Resumen'); 
        expect(recopilacion[0][4]).to.be.equal(fechaEsperada);
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
    });
});

describe('Articulo', () => {
    it('Probamos que funciona correctamente para Articulo', () => {
        const fechaEsperada = new Date("2000-02-14");
        const articulo = new Articulo(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            fechaEsperada,
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
        expect(recopilacion[0][4]).to.be.equal(fechaEsperada);
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
        expect(articulo.getrevista()).to.deep.equal(['Revista']);
        expect(articulo.getvolumen()).to.deep.equal(['Volumen']);
    });
});


describe('Congreso', () => {
    it('Probamos que funciona correctamente para Congreso', () => {
        const fechaEsperada = new Date("2000-02-14");
        const fechaDia = new Date("2000-02-18");
        const congreso = new Congreso(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            fechaEsperada,
            100,
            'Editorial',
            fechaDia
        );

        const recopilacion = congreso.getrecopilacion();

        expect(recopilacion.length).to.be.equal(1);
        expect(recopilacion[0][0]).to.be.equal('Título');
        expect(recopilacion[0][1]).to.be.equal('Autor'); 
        expect(recopilacion[0][2]).to.deep.equal(['Palabra1', 'Palabra2']); 
        expect(recopilacion[0][3]).to.be.equal('Resumen'); 
        expect(recopilacion[0][4]).to.be.equal(fechaEsperada);
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
        expect(congreso.getdia()[0]).to.be.equal(fechaDia);
    });
});

describe('Libro', () => {
    it('Probamos que funciona correctamente para Libro', () => {
        const fechaEsperada = new Date("2000-02-14");
        const libro = new Libro(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            fechaEsperada,
            100,
            'Editorial',
            ['Idioma1', 'Idioma2']
        );

        const recopilacion = libro.getrecopilacion();

        expect(recopilacion.length).to.be.equal(1);
        expect(recopilacion[0][0]).to.be.equal('Título');
        expect(recopilacion[0][1]).to.be.equal('Autor'); 
        expect(recopilacion[0][2]).to.deep.equal(['Palabra1', 'Palabra2']); 
        expect(recopilacion[0][3]).to.be.equal('Resumen'); 
        expect(recopilacion[0][4]).to.be.equal(fechaEsperada);
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
        expect(libro.getidiomas()).to.deep.equal([['Idioma1', 'Idioma2']]);
    });
});

describe('TFG', () => {
    it('Probamos que funciona correctamente para TFG', () => {
        const fechaEsperada = new Date("2000-02-14");
        const tfg = new TFG(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            fechaEsperada,
            100,
            'Editorial',
            'Departamento',
            'Grado'
        );

        const recopilacion = tfg.getrecopilacion();

        expect(recopilacion.length).to.be.equal(1);
        expect(recopilacion[0][0]).to.be.equal('Título');
        expect(recopilacion[0][1]).to.be.equal('Autor'); 
        expect(recopilacion[0][2]).to.deep.equal(['Palabra1', 'Palabra2']); 
        expect(recopilacion[0][3]).to.be.equal('Resumen'); 
        expect(recopilacion[0][4]).to.be.equal(fechaEsperada);
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
        expect(tfg.getgrado()).to.deep.equal(['Grado']);
        expect(tfg.getvolumen()).to.deep.equal(['Departamento']);
    });
});

describe('TFM', () => {
    it('Probamos que funciona correctamente para TFM', () => {
        const fechaEsperada = new Date("2000-02-14");
        const tfm = new TFM(
            'Título',
            'Autor',
            ['Palabra1', 'Palabra2'],
            'Resumen',
            fechaEsperada,
            100,
            'Editorial',
            'Departamento',
            'PostGrado'
        );

        const recopilacion = tfm.getrecopilacion();

        expect(recopilacion.length).to.be.equal(1);
        expect(recopilacion[0][0]).to.be.equal('Título');
        expect(recopilacion[0][1]).to.be.equal('Autor'); 
        expect(recopilacion[0][2]).to.deep.equal(['Palabra1', 'Palabra2']); 
        expect(recopilacion[0][3]).to.be.equal('Resumen'); 
        expect(recopilacion[0][4]).to.be.equal(fechaEsperada);
        expect(recopilacion[0][5]).to.be.equal(100);
        expect(recopilacion[0][6]).to.be.equal('Editorial');
        expect(tfm.getPostgrado()).to.deep.equal(['PostGrado']);
        expect(tfm.getvolumen()).to.deep.equal(['Departamento']);
    });
});
