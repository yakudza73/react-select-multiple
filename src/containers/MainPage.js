import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import LoginIcon from '@material-ui/icons/AccountBox';
import RegisterIcon from '@material-ui/icons/PermIdentity';
import titleimage from '../assets/title.jpg';
import SingIn from '../components/SingIn';
import FormDialog from '../components/FormDialog';
//actions
import { modalToggle } from '../actions/mainAction'
import { modalClose } from '../actions/mainAction'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  header:{
    backgroundColor: '#303f9f',
    color: '#fff'
  },
  header__btn:{
    background: 'transparent',
    color: '#fff'
  },
  main__container:{
    background: `url("${titleimage}") center center`,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main__title:{
    color: '#fff'
  },
  main__text:{
    color: '#fff'
  }
}));

const MainPage = (props) => {

  const classes = useStyles();

  const { main, modalToggleAction, modalCloseAction } = props
  const statusForm = main.registerModalState;
  const hostname = main.hostname;

  // handleRegisterFromOpen = () =>{
  //   modalToggleAction();
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default" className={classes.header}>
        <Toolbar>
            <Grid container spacing={3} justify="space-around" alignItems="center">
                <Grid item xs={6} justify="flex-start" alignItems="center" container>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Project Analitics
                    </Typography>
                </Grid>
                <Grid item xs={6} justify="flex-end" alignItems="center" container>
                    <Button variant="contained" className={classes.header__btn} onClick={modalToggleAction}>
                        <RegisterIcon />
                        <Typography variant="h5" color="inherit" noWrap>
                            Регистрация
                        </Typography>
                    </Button>
                    <FormDialog status={statusForm} handleClose={modalCloseAction} form_dialog='Регистрация' hostname={hostname} />
                    <Button variant="contained" className={classes.header__btn} >
                        <LoginIcon />
                        <Typography variant="h5" color="inherit" noWrap>
                            Войти
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.main__container}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom  className={classes.main__title}>
                Project Analitics - Управляйте своими проектами легко!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph  className={classes.main__text}>
                Оптимизируйте работу с Project Analitics
                Project Analitics — сервис-хэлпер для менеджеров и менеджеров проектов в бизнесе и IT-индустрии. Помогает управлять проектами: анализирует, сравнивает оценочные и фактически затраченные часы  и дает прогноз оценки на последующие проекты.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* <SingIn /> */}
        
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

const mapStateToProps = store => {
  return {
      main: store.main,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modalToggleAction: () => dispatch(modalToggle()),
    modalCloseAction: () => dispatch(modalClose()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)