import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const styles = {
    grid : {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: '1rem',
    }
  }
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://learn.gomycode.co/043ad9d529ecb70be5b94d29a6b93ca5.png" width='90px' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">services</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                sign up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container my-4">
      <h1>Welcome to Bootstrap app</h1>

      <div style={styles.grid}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" />
      <Card.Body>
        <Card.Title>spider suv</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur quas explicabo molestias eum fugit reprehenderit atque rerum ratione sapiente. Molestiae, laboriosam aperiam nesciunt id aspernatur eligendi ipsum officia ab.
        </Card.Text>
        <Button variant="primary">book test drive</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body>
        <Card.Title>white stallion</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur quas explicabo molestias eum fugit reprehenderit atque rerum ratione sapiente. Molestiae, laboriosam aperiam nesciunt id aspernatur eligendi ipsum officia ab.
        </Card.Text>
        <Button variant="primary">book test drive</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " />
      <Card.Body>
        <Card.Title>yellow sports</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur quas explicabo molestias eum fugit reprehenderit atque rerum ratione sapiente. Molestiae, laboriosam aperiam nesciunt id aspernatur eligendi ipsum officia ab.
        </Card.Text>
        <Button variant="primary">book test drive</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>spider suv</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur quas explicabo molestias eum fugit reprehenderit atque rerum ratione sapiente. Molestiae, laboriosam aperiam nesciunt id aspernatur eligendi ipsum officia ab.
        </Card.Text>
        <Button variant="primary">book test drive</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>spider suv</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur quas explicabo molestias eum fugit reprehenderit atque rerum ratione sapiente. Molestiae, laboriosam aperiam nesciunt id aspernatur eligendi ipsum officia ab.
        </Card.Text>
        <Button variant="primary">book test drive</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>spider suv</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur quas explicabo molestias eum fugit reprehenderit atque rerum ratione sapiente. Molestiae, laboriosam aperiam nesciunt id aspernatur eligendi ipsum officia ab.
        </Card.Text>
        <Button variant="primary">book test drive</Button>
      </Card.Body>
    </Card>
      </div>
      </div>
    </>
  )
}

export default App



