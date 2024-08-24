import { Container, Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FeaturesPost from './components/FeaturesPost';
import { featuredPosts, sidebar } from './data/Data';
import PostCard from './components/PostCard';
import Main from './components/Main';
import SideBar from './components/SideBar'
import Footer from './components/Footer';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturesPost />
        <br />
        <Grid container spacing={4}>
          {
            featuredPosts.map((post) => (
              <PostCard post={post} key={post.title} />
            ))
          }
        </Grid>
        <Grid container spacing={5} sx={{
          marginTop: theme => theme.spacing(3),
        }}>
          <Main title="From the firehose" />
          <SideBar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
