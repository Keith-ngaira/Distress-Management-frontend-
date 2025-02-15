import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

function DistressForm() {
  const [formData, setFormData] = useState({
    senderName: '',
    receivingDate: new Date().toISOString().split('T')[0],
    referenceNumber: '',
    subject: '',
    countryOfOrigin: '',
    distressedPersonName: '',
    natureOfCase: '',
    caseDetails: '',
    attachments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      attachments: [...e.target.files]
    }));
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        New Distress Case Registration
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Sender's Name"
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="date"
              label="Receiving Date"
              name="receivingDate"
              value={formData.receivingDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Reference Number"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Country of Origin"
              name="countryOfOrigin"
              value={formData.countryOfOrigin}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Distressed Person's Name"
              name="distressedPersonName"
              value={formData.distressedPersonName}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Nature of Case</InputLabel>
              <Select
                name="natureOfCase"
                value={formData.natureOfCase}
                onChange={handleChange}
                label="Nature of Case"
              >
                <MenuItem value="emergency">Emergency</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
                <MenuItem value="standard">Standard</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Case Details"
              name="caseDetails"
              value={formData.caseDetails}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload Documents
              <input
                type="file"
                hidden
                multiple
                onChange={handleFileChange}
              />
            </Button>
            {formData.attachments.length > 0 && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {formData.attachments.length} file(s) selected
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setFormData({})}
              >
                Clear Form
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit Case
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default DistressForm;
