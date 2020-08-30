import tw,{TwStyle} from 'twin.macro'
import styled from '@emotion/styled/macro'
import React from 'react'
interface Props {
  onClick: Function;
  disabled?: boolean;
}
export const StyledButton = styled.button<{
  disabled: boolean;
}>`
  ${tw`font-sans p-2 capitalize text-black  bg-white focus:outline-none`}
  ${({ disabled }): string| TwStyle => (disabled ? tw`hover:opacity-75 focus:bg-main` : '')}
`
export const Button: React.SFC<Props> = ({
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <StyledButton onClick={(): void => onClick()} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
