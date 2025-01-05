import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div className={css.container}>
        <h1 className={css.title}>
          Your phonebook welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
