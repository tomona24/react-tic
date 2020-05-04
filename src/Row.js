import React from 'react'
import styled from 'styled-components'

const TableCell = props => {
    const rowDatas = props.filledData.map((data) =>{
      const cellDatas = data.map(item => {
      return (
        <Td onClick={() => props.fillCell(item.index, item.letter)}>
        {item.letter}
        </Td>
      )
  
    })
    return <Tr>{cellDatas}</Tr>
    })
    return rowDatas
}


const Row  = props => {
    const { filledData, fillCell } = props
    return(
            <TableCell filledData={filledData} fillCell={fillCell}/>
    )
}

const Td = styled.td`
  font-size: 1.5em;
  text-align: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  padding: 0px;
  margin: 0px;
  `;

const Tr = styled.tr`
  padding: 0px;
  margin: 0px;
  `;

export default Row