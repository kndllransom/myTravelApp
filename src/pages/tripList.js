import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Trip Date', width: 130 },
  { field: 'country', headerName: 'Country', width: 130 },
  { field: 'region', headerName: 'Region', width: 130 },
  { field: 'activity', headerName: 'Activity', width: 130 },


  
  {
    valueGetter: (params) =>
      `${params.getValue('date') || ''} ${params.getValue('country') || ''} ${params.getValue('region') || ''}${params.getValue('activity') || ''}`,
  },
];
// instead of current grid, replace with user trip data



export default function DataTable() {
  const {tripList} = useSelector((state) => {
    
    return state.trip
  })
  
  // console.log(tripList)
  // console.log('page is rendering')
  
  const rows = tripList.map(item => {
    return {
        id:1,
        date: item.date,
        country: item.country,
        region: item.region,
        activity: item.activity,
      }
  })
  // for (const key in tripList) {
      
  //   }
  
  // console.log(test)
  // const newTripList = tripList.map(trip => trip)
  // console.log(newTripList)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}