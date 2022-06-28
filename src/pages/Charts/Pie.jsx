import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject, AccumulationDataLabel, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { Header } from '../../components';

const Pie = () => {
  return (
    <div className='md:m-10 m-4 md:mt-24 mt-20 min-h-590'>
      <Header category='Pie' title='Project Cost breakdown' />
      <div className='w-full'>
      <AccumulationChartComponent
        id='pie-chart'
        title='Project Cost Breakdown'
        legendSettings={{
          visible: true,
          position: 'Top',
        }}
        enableSmartLabels={true}
      >
        <Inject 
          services={[PieSeries,AccumulationDataLabel, AccumulationLegend]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective 
          name='Project' 
          dataSource={pieChartData} 
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pie;