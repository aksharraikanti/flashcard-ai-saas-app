'use client';

import { useState } from 'react';
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

export default function Home() {
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
        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">
          The easiest way to create flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {['Easy to use!', 'Practice with Flashcards!', 'Best to use to study!', 'Customizable Decks!', 'Progress Tracking!', 'Collaborate with Others!'].map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" align="center">
                    {feature}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pricing Section */}
      {/* Pricing Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {['Free Plan', 'Pro Plan', 'Enterprise Plan'].map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={plan}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    {plan}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {index === 0
                      ? 'Get started with our basic features for free.'
                      : index === 1
                      ? 'Unlock all features for individual use.'
                      : 'Customized solutions for teams and enterprises.'}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Button
                    variant="contained"
                    // color={selectedPlan === plan ? 'primary' : 'secondary'}
                    onClick={() => handleSelectPlan(plan)}
                  >
                    {/* {selectedPlan === plan ? 'Selected' : 'Choose Plan'} */}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Benefits
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {['Improve Retention', 'Save Time', 'Learn Anywhere', 'Enhance Collaboration'].map((benefit) => (
            <Grid item xs={12} sm={6} md={4} key={benefit}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" align="center">
                    {benefit}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          How It Works
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {['Create an Account', 'Add Your Content', 'Generate Flashcards', 'Start Learning'].map((step) => (
            <Grid item xs={12} sm={6} md={3} key={step}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" align="center">
                    {step}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}