import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
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
      <Inject services={[BarSeries,DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Bar