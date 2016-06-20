jest.unmock("../../../src/components/Table/Main")
jest.unmock("../../../src/components/Table/Head")
jest.unmock("../../../src/components/Table/Body")
jest.unmock("../../../src/components/Table/Row")
jest.unmock("../../../src/components/Table/Cell/Head")
jest.unmock("../../../src/components/Table/Cell/Data/Main")
jest.unmock("../../../src/components/Table/Cell/Data/Title")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory" 
import Table from "../../../src/components/Table/Main"
import TableHead from "../../../src/components/Table/Head"
import TableBody from "../../../src/components/Table/Body"
import TableRow from "../../../src/components/Table/Row"
import CellHead from "../../../src/components/Table/Cell/Head"
import CellData from "../../../src/components/Table/Cell/Data/Main"
import CellDataTitle from "../../../src/components/Table/Cell/Data/Title"

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