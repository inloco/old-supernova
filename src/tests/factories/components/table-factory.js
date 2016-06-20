jest.unmock("../../../components/Table/Main")
jest.unmock("../../../components/Table/Head")
jest.unmock("../../../components/Table/Body")
jest.unmock("../../../components/Table/Row")
jest.unmock("../../../components/Table/Cell/Head")
jest.unmock("../../../components/Table/Cell/Data/Main")
jest.unmock("../../../components/Table/Cell/Data/Title")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory" 
import Table from "../../../components/Table/Main"
import TableHead from "../../../components/Table/Head"
import TableBody from "../../../components/Table/Body"
import TableRow from "../../../components/Table/Row"
import CellHead from "../../../components/Table/Cell/Head"
import CellData from "../../../components/Table/Cell/Data/Main"
import CellDataTitle from "../../../components/Table/Cell/Data/Title"

class TableFactory extends Factory{
  template() {
    return(
      <Table>
        <TableHead>
          <CellHead type="number">Id</CellHead>
          <CellHead type="title">Name</CellHead>
        </TableHead>
        <TableBody>
          <TableRow>
            <CellDataTitle href="#1">1</CellDataTitle>
            <CellData>Foo</CellData>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default TableFactory