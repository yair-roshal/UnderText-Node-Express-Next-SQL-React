import styled from "@emotion/styled"
// import styled from 'styled-components'

const Node = styled.div`
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
`

const Link = styled.div`
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
`

export const NodeStyledComponent = styled(Node)`
    background: lightblue;
    border-radius: 50%;
`
export const LinkStyledComponent = styled(Link)`
    background: lightblue;
`
