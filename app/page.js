'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
} from '@mui/material';
import { SignedOut, UserButton, SignedIn } from '@clerk/nextjs';
import Head from 'next/head';
import axios from 'axios'; // Import axios for API requests

export default function Home() {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [showFlashcards, setShowFlashcards] = useState(false);

  // Handler for the "Get Started" button click
  const handleGetStarted = () => {
    setShowInput(true);
  };

  // Handler for the text input change
  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  // Handler for generating flashcards
  const generateFlashcards = async () => {
    try {
      const response = await fetch('/Users/aksharraikanti/code/headstarter/flashcard-ai-saas/app/api/generate/route.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      });
  
      if (!response.ok) throw new Error('Network response was not ok');
  
      const data = await response.json();
      setFlashcards(data.flashcards);
      setShowFlashcards(true);
    } catch (error) {
      console.error('Error generating flashcards:', error);
      alert('Failed to generate flashcards. Please try again.');
    }
    // try {
    //   const response = await axios.post('/api/generate/route.js', {
    //     messages: [{ role: 'user', content: prompt }],
    //   });
    //   setFlashcards(response.data.flashcards);
    //   setShowFlashcards(true);
    // } catch (error) {
    //   console.error('Error generating flashcards:', error.response.data);
    //   alert('Failed to generate flashcards. Please try again.');
    // }
  };  

  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Sign In
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        {!showInput && (
          <>
            <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
            <Typography variant="h5">
              The easiest way to create flashcards from your text
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleGetStarted}>
              Get Started
            </Button>
          </>
        )}

        {showInput && !showFlashcards && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5">Enter a prompt for your flashcards:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter your prompt"
              value={prompt}
              onChange={handleInputChange}
              sx={{ mt: 2 }}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={generateFlashcards}>
              Generate Flashcards
            </Button>
          </Box>
        )}

        {showFlashcards && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Your Flashcards
            </Typography>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {flashcards.map((flashcard, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {flashcard.front}
                      </Typography>
                      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                        {flashcard.back}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
}
