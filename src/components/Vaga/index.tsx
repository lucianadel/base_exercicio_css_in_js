import styles from './Vaga.module.css'
import { StyledVaga, StyledVagaTitulo, StyledVagaLink } from './Vaga.module'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <StyledVaga>
    <StyledVagaTitulo>{props.titulo}</StyledVagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <StyledVagaLink href="#">Ver detalhes e candidatar-se</StyledVagaLink>
  </StyledVaga>
)

export default Vaga
