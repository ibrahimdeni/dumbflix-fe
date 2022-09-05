import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (

    <div className="bg-warning" style={{height:"100vh"}}>
        <div className="d-flex justify-content-center">
        <Form className="bg-dark mt-5 w-50">

            <h1 className="text-light text-center fw-bold mb-5">Premium</h1>

            <p className="text-light text-center">Bayar sekarang dan nikmati streaming film-film kekinian dari <spam className="fw-bold" style={{color:"red"}}>DUMBFLIX</spam></p>
            <p className="text-light text-center fw-bold"><spam className="fw-bold" style={{color:"red"}}>DUMBFLIX </spam>: 0981312323</p>

            <Form.Group className="mb-3 mt-5 w-50 mx-auto" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-5 w-50 mx-auto" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="w-100">
                <Button className="mb-3 w-50 mx-auto d-flex justify-content-center" variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
        </div>
    </div>
  );
}

export default BasicExample;