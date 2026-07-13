import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="p-10">
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
};

export default Home;