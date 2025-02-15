import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function CasesList() {
  const navigate = useNavigate();

  // This would typically come from your backend
  const mockData = [
    {
      id: 1,
      referenceNumber: 'DM-2023-001',
      senderName: 'Keith Ngaira',
      receivingDate: '2023-05-15',
      subject: 'Emergency Assistance Required',
      status: 'Active',
      assignedTo: 'Officer Smith',
    },
    // Add more mock data as needed
  ];

  const columns = [
    { field: 'referenceNumber', headerName: 'Reference Number', width: 180 },
    { field: 'senderName', headerName: 'Sender Name', width: 180 },
    { field: 'receivingDate', headerName: 'Date Received', width: 130 },
    { field: 'subject', headerName: 'Subject', width: 250 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'assignedTo', headerName: 'Assigned To', width: 180 },
  ];

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Distress Cases Dashboard
      </Typography>
      
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={mockData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          onRowClick={(params) => navigate(`/case/${params.id}`)}
        />
      </div>
    </Paper>
  );
}

export default CasesList;
