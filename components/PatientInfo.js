import { Card } from 'antd';
import React, { memo } from 'react';
import LineChart from './LineChart';
const PatientInfo = memo((props) => {
  const { content } = props;

  return (
    <>
      <div>
        <LineChart />
      </div>
    </>
  );
});

export default PatientInfo;
