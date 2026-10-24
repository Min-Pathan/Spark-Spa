import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function HomePage() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <Typography
        component="h1"
        variant="h3"
        color="primary"
        gutterBottom
      >
        Welcome to Spark Spa
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Your space to relax, refresh and recharge.
      </Typography>

      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography component="h2" variant="h5" gutterBottom>
          Care designed around you
        </Typography>

        <Typography color="text.secondary">
          Explore our salon and spa services in a calm,
          welcoming environment.
        </Typography>
      </Paper>
    </Container>
  );
}