import { AppBar, Container, Typography } from '@mui/material';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Typography variant="h6" noWrap>
            <Link href="/">DARION</Link>
          </Typography>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
