export interface Error { error: string }

export interface SorteioProps {
    dataApuracao: string,
    dataProximoConcurso: string,
    dezenasSorteadasOrdemSorteio: string[],
    localSorteio: string,
    nomeMunicipioUFSorteio: string,
    numero: number,
    valorEstimadoProximoConcurso: number
}