import './Login.css';


import { Grid, InputAdornment, TextField, Typography } from '@mui/material';

import { Button } from 'react-bootstrap';
import { RiAccountCircleFill } from 'react-icons/ri';
import { TbLockFilled } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    navigate("/client")
  }

  return (
    <main className="login">
      <div className="image-side" style={{ background: "url(/assets/image_generated_by_ai.png) no-repeat center center" }}></div>

      <div className="content-login">
        <form className='form' method={"POST"} onSubmit={handleSubmit}>

          <div className="form-text">
            <Link to="/"><img src="/logo-white.svg" alt="logo-estacioneja" className="logo" /></Link>
          </div>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Seu e-mail"
                type="email"
                variant="outlined"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                        <RiAccountCircleFill />
                      </InputAdornment>
                    ),
                  },
                }}

                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="senha"
                label="Sua Senha"
                variant="outlined"
                type='password'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                        <TbLockFilled />
                      </InputAdornment>
                    ),
                  },
                }}

                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <Button type='submit' className="btn btn-primary rounded-0" style={{ width: "200px", height: "40px" }}>Entrar</Button>
            </Grid>

            <Grid item xs={12}>
              <Link to="/login/esqueci-a-senha">Esqueci a Senha</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </main>
  )
}