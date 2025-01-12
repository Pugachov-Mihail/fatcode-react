import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import JwtService from '../../auth/services/jwtService';
import { Link } from 'react-router-dom';

function SignOutPage() {
  useEffect(() => {
    setTimeout(() => {
      JwtService.logout();
    }, 60000);
  }, []);

  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
      <Paper className="flex items-center w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <img className="w-48 hidden" src="assets/images/logo/logo.svg" alt="logo" />
          <img className='w-50 mx-auto' src='assets/images/logo/logo-text-on-dark.svg'/>

          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight text-center">
            Вы вышли!
          </Typography>

          <Typography className="mt-32 text-md font-medium text-center" color="text.secondary">
            <span>Забыли покормить кота?</span>
            <Link className="ml-4" to="/sign-in">
              вернуться
            </Link>
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default SignOutPage;
