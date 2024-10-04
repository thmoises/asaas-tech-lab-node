import app from './src/app';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`servidor escutando na porta ${PORT}!`);
});
