import { Tela } from '../components/Tela';
import { Campo } from '../components/Campo';
import { Botao } from '../components/Botao';
import { Card } from '../components/Card';

export function CepScreen() {
    return (
        <Tela>
            <Campo
                label='CEP'
                placeholder='63700410'
            />
            <Botao 
                titulo='Buscar Endereço'
                cor='#E84848'
            />

            <Card 
                titulo='CEP 63700410'
                cor='#E84848'
            />
        </Tela>
    );
}