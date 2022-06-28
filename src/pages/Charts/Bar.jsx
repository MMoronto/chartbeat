import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, DataLabel, Category, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Bar' title='Medals Won - Rio ' />
      <ChartComponent
        id='bar-chart'
        height='420px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[ColumnSeries,DataLabel, Legend, Category, Tooltip]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar