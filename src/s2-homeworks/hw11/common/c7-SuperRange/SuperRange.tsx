import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = props => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        color: '#034ee3',
        '& .MuiSlider-thumb': {
          width: 20,
          height: 20,
          border: 1,
          borderColor: '#008bcc',
          background:
            'radial-gradient(at center, #0044cc 0%, #0063cc 20%, #fff 20%, #fff 100%)',
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
