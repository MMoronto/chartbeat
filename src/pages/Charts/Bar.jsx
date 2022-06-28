import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries, DataLabel, ColumnSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id='bar-chart'
      height='420px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[BarSeries,DateTime, Legend, Category, Tooltip]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Bar