import { FormEvent, SetStateAction, useState } from 'react'

import {
  StyledForm,
  StyledBtnPsquisar,
  StyledCampo
} from './FormVagas.module.js'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <StyledBtnPsquisar type="submit">Pesquisar</StyledBtnPsquisar>
    </StyledForm>
  )
}
export default FormVagas
