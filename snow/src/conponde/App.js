import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/button'
import Card from 'react-bootstrap/card'
import './white.css'
function app(){
return(
<>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav class="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link  href="#features">Hello Users</Nav.Link>
            <Nav.Link  href="#pricing">destination</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 <div class='cb1'>
  <div class='cf1'>
 <Card style={{ width: '18rem' }}>
  <div class='cnb'>
   <Card.Img variant="top"  className='C1' src="https://cdn.mos.cms.futurecdn.net/bwsDTWetLQuuwXQo44J5ZV.jpeg" />
   <Card.Body>
     <Card.Title class='bott'> Tower Of Seoul's</Card.Title>
     <Card.Text>
     Seoul Cultural Tourism Volunteer Guides are experts knowledgeable in Seoul's history and culture. 

They volunteer as guides to help tourists understand Seoul in a deeper way.
     </Card.Text>
     <Button variant="primary"> Click Me</Button>
   </Card.Body>
   </div>
  </Card>
</div>
 <div  class='cf1'>
 <Card style={{ width: '18rem' }}>
  <div class='cnb'>
   <Card.Img variant="top" className='C1'  src="https://images.bfmtv.com/WtNyM72XZaW72EbIsNsiZKUutyM=/0x40:768x472/768x0/images/La-tour-Eiffel-est-fermee-a-partir-de-ce-lundi-en-raison-d-une-greve-reconductible-ont-annonce-a-l-AFP-les-deux-organisations-syndicales-representatives-du-personnel-1808757.jpg" />
   <Card.Body>
     <Card.Title class='bott'>Eiffel Tower</Card.Title>
     <Card.Text>
     Originally 312 meters high, the Eiffel Tower remained the tallest monument in the world for 41 years. It is made up of 4 floors, the last of which at 279 meters high corresponds to the highest observation platform accessible to the public in the European Union.
     </Card.Text>
     <Button variant="primary">Click Me </Button>
   </Card.Body>
   </div>
 </Card>
 </div>
 </div>
 <div class='cf1-no-friend'>
 <Card style={{ width: '18rem' }}>
  <div class='cnb'>
   <Card.Img variant="top"   className='C1' src="https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium" />
   <Card.Body>
     <Card.Title class='bott'>Santorini</Card.Title>
     <Card.Text>
     The island of Santorini – also known as Thera in Greek – has been immortalized by countless poets and painters because of its unique light, colorful cliffs and breathtaking sunsets. breath. Welcome to one of the most beautiful Greek islands and the world.
     </Card.Text>
     <Button variant="primary">Click Me</Button>
   </Card.Body>
   </div>
 </Card>
 </div>
 </>
);
}
export default app;
