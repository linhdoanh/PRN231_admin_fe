import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import {employeesData, employeesGrid } from '../Data/dummy';
import {Header} from '../Components'
const Accounts = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Accounts" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search', 'Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width= 'auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Accounts;