import {NumberComp} from './styles'

type numProps = {
    number: string
    margin?: string
    color?: string
    fontsize?: string
    padding?: string
}

export function Num({number, margin, color, padding, ...rest}: numProps){
    return(
        <NumberComp margin = {margin} color = {color}
        padding = {padding} {...rest}> {number}</NumberComp>
    )
}