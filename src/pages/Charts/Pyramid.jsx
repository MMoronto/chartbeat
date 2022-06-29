import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Pyramid' title='Road Comparison Chart' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='area-chart'
          height='420px'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 }}}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[SplineAreaSeries,DateTime, Legend]}/>
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => 
            <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid