import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Divider,
} from '@mui/material';

function CaseDetails() {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams(); // Will be used when connecting to backend
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (newStep) => {
    setActiveStep(newStep);
  };

  const steps = [
    'Front Office Receipt',
    'Director Review',
    'Cadet Assignment',
    'Case Investigation',
    'Case Resolution',
    'Final Review',
    'Archived'
  ];

  // Mock data - would come from backend in real application
  const [caseData, setCaseData] = useState({
    referenceNumber: `DM-2023-${id || '001'}`, // Use the id in the reference number
    senderName: 'Keith Ngaira',
    receivingDate: '2023-05-15',
    subject: 'Emergency Assistance Required',
    countryOfOrigin: 'Kenya',
    distressedPersonName: 'Janelle Ngaira',
    natureOfCase: 'Emergency',
    caseDetails: 'Detailed description of the emergency situation...',
    assignedOfficer: 'Officer Smith',
    status: 'Under Investigation',
    directorInstructions: 'Please investigate and provide immediate assistance',
    progressNotes: [
      {
        date: '2023-05-15',
        officer: 'Officer Smith',
        note: 'Initial assessment completed. Contacting relevant authorities.'
      }
    ]
  });

  const handleAddProgressNote = (e) => {
    e.preventDefault();
    const newNote = {
      date: new Date().toISOString().split('T')[0],
      officer: caseData.assignedOfficer,
      note: e.target.note.value
    };
    
    setCaseData(prevData => ({
      ...prevData,
      progressNotes: [...prevData.progressNotes, newNote]
    }));
    
    e.target.note.value = ''; // Clear the input
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Case Details - {caseData.referenceNumber}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Basic Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Reference Number"
                    value={caseData.referenceNumber}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Sender's Name"
                    value={caseData.senderName}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Receiving Date"
                    value={caseData.receivingDate}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    value={caseData.subject}
                    disabled
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Case Status
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Current Status"
                    value={caseData.status}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Assigned Officer"
                    value={caseData.assignedOfficer}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Director's Instructions"
                    value={caseData.directorInstructions}
                    disabled
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Progress Notes
              </Typography>
              {caseData.progressNotes.map((note, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2">
                    {note.date} - {note.officer}
                  </Typography>
                  <Typography variant="body2">
                    {note.note}
                  </Typography>
                  <Divider sx={{ mt: 1 }} />
                </Box>
              ))}
              
              <Box component="form" onSubmit={handleAddProgressNote} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Add Progress Note"
                  name="note"
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Add Note
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CaseDetails;
