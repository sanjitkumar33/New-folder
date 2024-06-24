// forgot password
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [loader,setloader] = useState(false);




let navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    setloader(true);
try {
  const response = await fetch(ENDPOINTS.FORGET_PASSWORD, {
    method: 'POST',
    headers: {
        accept: "application/json",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
        email
    }),
  });

  const data = await response.json();
  setMessage(data.message);
  setloader(false);
 
  
  }catch (error) {
  setMessage('Error sending reset email.');
}
};