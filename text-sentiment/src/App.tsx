import './App.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// A header with the app title.
// A main content area with two sections side-by-side on desktop and stacked on mobile:
// Text Analysis Panel: A text input box where users can enter text.
// Analysis Result Panel: Displays the sentiment analysis result of the entered text.

function App() {

  const handleTextChange = (e: any) => {
    const text = e.target.text;
    console.log(text)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100dvw',
        height: '100dvh',
        bgcolor: '#eee'
      }}
    >
      <Box sx={{ flex: 0, bgcolor: '#333', p: 3, color: 'white' }}>
        <h1>Text Sentiment</h1>
      </Box>
      <Box sx={{ flex: 1, p: 3 }} component="main">
        <Grid container spacing={2}>
          <Grid size={[12, 6]} sx={{ bgcolor: 'white', p: 2 }}>
            <h2>Text Analysis Panel</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                id="input-text"
                name="text"
                label="Text to analyse"
                multiline
                rows={4}
                onChange={handleTextChange}
              />
            </Box>
          </Grid>
          <Grid size={[12, 6]} sx={{ bgcolor: 'white', p: 2 }}>
            <h2>Analysis Result Panel</h2>
            <p>...result...</p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App
