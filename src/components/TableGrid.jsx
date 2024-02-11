import React from "react";
import { Checkbox, Table } from "rsuite";
import { Cell, Column, HeaderCell } from "rsuite-table";
import { invoiceData } from "../utils/util";

const TableGrid = () => {
  const data = invoiceData.invoices.data;
  return (
    <Table className="table" height={600} data={data}>
      <Column width={150} align="center" fixed>
        <HeaderCell>Action</HeaderCell>
        <Cell>
          <Checkbox
            inline
            // checked={checked}
            // indeterminate={indeterminate}
            // onChange={handleCheckAll}
          />
        </Cell>
      </Column>
      <Column width={150} align="center" fixed>
        <HeaderCell>Invoice Number</HeaderCell>
        <Cell dataKey="invoiceNumber" />
      </Column>

      <Column width={110}>
        <HeaderCell>Invoice Date</HeaderCell>
        <Cell dataKey="invoiceDate" />
      </Column>

      <Column width={110}>
        <HeaderCell>Due Date</HeaderCell>
        <Cell dataKey="dueDate" />
      </Column>

      <Column width={80}>
        <HeaderCell>Currency</HeaderCell>
        <Cell dataKey="currency" />
      </Column>

      <Column width={100}>
        <HeaderCell>Customer</HeaderCell>
        <Cell dataKey="contact.customer" />
      </Column>

      <Column width={100}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="contact.firstName" />
      </Column>
      <Column width={100}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="contact.lastName" />
      </Column>

      <Column width={200}>
        <HeaderCell>Company</HeaderCell>
        <Cell dataKey="contact.company" />
      </Column>

      <Column width={120}>
        <HeaderCell>Country</HeaderCell>
        <Cell dataKey="contact.country" />
      </Column>
      <Column width={100}>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="contact.city" />
      </Column>

      <Column width={150}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="contact.email" />
      </Column>
      <Column width={100}>
        <HeaderCell>Zip Code</HeaderCell>
        <Cell dataKey="contact.zipCode" />
      </Column>
      <Column width={160}>
        <HeaderCell>Phone</HeaderCell>
        <Cell dataKey="contact.phone" />
      </Column>

      <Column width={200}>
        <HeaderCell>Address</HeaderCell>
        <Cell dataKey="contact.address" />
      </Column>
    </Table>
  );
};

export default TableGrid;
