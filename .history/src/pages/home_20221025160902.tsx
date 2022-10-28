import { Num } from "../components/Num/num";
import { Text } from "../components/Texto";
import React, { useEffect, useState } from 'react';
import api from "../services/api";
import service from "../services/sorteio";
import { SorteioProps } from "../types/interface";
//import { IMaskInput } from 'react-imask';


export function Main() {
    const [sorteio, setSorteio] = useState();
    const [dataApuracao, setDataApuracao] = useState('');
    const [dataProximoConcurso, setProximoConcurso] = useState('');
    const [dezenasSorteadasOrdemSorteio, setDezenasSorteadasOrdemSorteio] = useState(['']);
    const [localSorteio, setLocalSorteio] = useState('');
    const [nomeMunicipioUFSorteio, setNomeMunicipioUFSorteio] = useState('');
    const [numero, setNumero] = useState(0);
    const [valorEstimadoProximoConcurso, setValorEstimadoProximoConcurso] = useState(0);
    const [isLoading, setIsLoading] = useState(true);



    function setInfo(sorteio: SorteioProps) {
        setDataApuracao(sorteio.dataApuracao)
        setProximoConcurso(sorteio.dataProximoConcurso)
        setDezenasSorteadasOrdemSorteio(sorteio.dezenasSorteadasOrdemSorteio)
        setLocalSorteio(sorteio.localSorteio)
        setNomeMunicipioUFSorteio(sorteio.nomeMunicipioUFSorteio)
        setNumero(sorteio.numero)
        setValorEstimadoProximoConcurso(sorteio.valorEstimadoProximoConcurso)

    }
    const list = async () => {
        let number = random(1, 2529)
        const response: any = await service.list(number.toString());
        if (!response.error) {
            setSorteio(response);
            setInfo(response);
            setIsLoading(false)

        }

    };

    React.useEffect(() => {
        list()
    }, []);

    function random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            {isLoading && (
                <div className="mt-5">
                    <Text description="Carregando..." color="#0066b3" fontSize="60px" fontWeight="700" />
                </div>
            )}
            {!isLoading && (

                <div>
                    <div className="mt-5">
                        <div>
                            <Text description="Resultado" color='#0066b3' fontWeight='normal' fontSize='40px' />
                            <Text description={`Concurso ${numero} (${dataApuracao})`} color='#776d7b' fontSize='25px' margin='17px 0px 0px 15px' />
                        </div>
                    </div>
                    <hr className='w-75'></hr>

                    <div className='mb-5 mt-5'>
                        <Text description={`Sorteio realizado no ${localSorteio} em ${nomeMunicipioUFSorteio}`} color='#777584' fontSize='20px' />
                    </div>

                    <div className='mb-5 mt-5 my-4'>
                        <Num number={dezenasSorteadasOrdemSorteio[0]} />
                        <Num number={dezenasSorteadasOrdemSorteio[1]} />
                        <Num number={dezenasSorteadasOrdemSorteio[2]} />
                        <Num number={dezenasSorteadasOrdemSorteio[3]} />
                        <Num number={dezenasSorteadasOrdemSorteio[4]} />
                        <Num number={dezenasSorteadasOrdemSorteio[5]} />
                    </div>

                    <div className='row mt-3'>
                        <div className='col-4 mt-3'>
                            <Text description={`Estimativa de prêmio do próximo concurso ${dataProximoConcurso}`} fontSize='17px' />
                        </div>
                        <div className='col-5 mt-3'>
                            <Text description={`R$ ${valorEstimadoProximoConcurso},00`} fontSize='35px' color="#344673" fontWeight="bold" />
                        </div>
                    </div>

                </div>

            )}
        </>
    )
}