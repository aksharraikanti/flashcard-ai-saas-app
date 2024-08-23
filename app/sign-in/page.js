import Head from 'next/head';
import { Container, Typography, Box, Card, CardContent, Grid, TextField, Button } from '@mui/material';
import {AppBar, Container, Typography, Box, Card, CardContent, Grid, TextField, Button} from '@mui/material';

export default function SignUpPage(){
    return (
        <Container maxWidth="sm">
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Sign up for Flashcard SaaS" />
            </Head>
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
                <Typography variant="h2">Sign Up</Typography>
                <Card>
                    <CardContent>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}