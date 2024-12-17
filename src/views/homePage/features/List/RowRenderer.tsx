import React from 'react';
import WaterFallCard, {RecyclerNFT} from '../WaterFallCard';

function RowRenderer(type: number | string, data: RecyclerNFT) {
  return <WaterFallCard row={data as RecyclerNFT} />;
}

export default RowRenderer;
