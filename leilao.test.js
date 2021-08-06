const Leilao = require('./Leilao');
const lance = require('./Lance');

beforeEach(() => {
    leilao = new Leilao('NTF'); //Non-fungible Token 
})

test('pegar maior lance aleatorio',

    () => {
        leilao.propoe(new lance('José', 100));
        leilao.propoe(new lance('Maria', 400));
        leilao.propoe(new lance('Joaquim', 200));
        leilao.avalia();

        expect(leilao.getMaiorLance().getValor()).toBe(400);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }
);

test('pega o maior lance em ordem crescente',
    () => {
        leilao.propoe(new lance('José', 100));
        leilao.propoe(new lance('Maria', 200));
        leilao.propoe(new lance('Joaquim', 300));
        leilao.avalia();

        expect(leilao.getMaiorLance().getValor()).toBe(300);
        expect(leilao.getMaiorLance().getNome()).toBe('Joaquim');
    }
);

test('pega o maior lance em ordem decrescente',

    () => {
        leilao.propoe(new lance('José', 400));
        leilao.propoe(new lance('Joaquim', 300));
        leilao.propoe(new lance('Maria', 200));
        leilao.avalia();

        expect(leilao.getMaiorLance().getValor()).toBe(400);
        expect(leilao.getMaiorLance().getNome()).toBe('José');
    }
);

test('pegar o menor lance de forma aleatoria',
    () => {
        leilao.propoe(new lance('José', 400));
        leilao.propoe(new lance('Joaquim', 300));
        leilao.propoe(new lance('Maria', 200));
        leilao.avalia();

        expect(leilao.getMenorLance().getValor()).toBe(200);
        expect(leilao.getMenorLance().getNome()).toBe('Maria');
    }
);


test('pegar o menor lance em ordem crescente',
    () => {
        leilao.propoe(new lance('José', 100));
        leilao.propoe(new lance('Joaquim', 200));
        leilao.propoe(new lance('Maria', 300));
        leilao.avalia();

        expect(leilao.getMenorLance().getValor()).toBe(100);
        expect(leilao.getMenorLance().getNome()).toBe('José');
    }
);


test('pegar o menor lance em orde decrescente',
    () => {
        leilao.propoe(new lance('José', 300));
        leilao.propoe(new lance('Joaquim', 200));
        leilao.propoe(new lance('Maria', 100));
        leilao.avalia();

        expect(leilao.getMenorLance().getValor()).toBe(100);
        expect(leilao.getMenorLance().getNome()).toBe('Maria');
    }
);



/*test('passar valor em string',

    ()=>{
        leilao.propoe('500');
        leilao.propoe('400');
        leilao.propoe('300');
        leilao.avalia();

        expect(leilao.getMaiorLance()).toBe(500);
        //se espera que falhe.
    }
);

test('passar valor negativo',

    ()=>{
        leilao.propoe(-500);
        leilao.propoe(-400);
        leilao.propoe(-300);
        leilao.avalia();

        expect(leilao.getMaiorLance()).toBe(500);
        //se espera que falhe.
    }
);
*/

