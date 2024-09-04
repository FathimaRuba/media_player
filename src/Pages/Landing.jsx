import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='container-fluid'>
        <Row style={{height:'90vh'}} className='d-flex align-items-center'>
          <Col className='p-5' sm={12} md={6}>
          
            <h3 className='mt-2'><i className="fa-solid fa-music" bounce style={{color: "#ff0000",}} />{' '}Media Player</h3>
            <p style={{textAlign:"justify"}} className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eveniet? Quisquam nulla quas voluptatum accusamus deserunt corrupti, ad tenetur unde debitis quis incidunt porro inventore beatae explicabo expedita, et consectetur.</p>
            <div className='d-grid'>
              <Link to={'/log'} className='btn btn-danger mt-3 rounded-pill p-2'>Lets Go</Link>
            </div>
          </Col>
          <Col className='py-3' sm={12} md={6}>
            <img src="https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_960_720.png" className='img-fluid' alt="hero-section-image" />
          </Col>
        </Row>
      </div>
      <div>
        <h2 className='text-center my-3'>Features</h2>
        <div className='d-flex flex-row justify-content-around my-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height='200px' src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif" />
            <Card.Body>
              <Card.Title>Upload Youtube Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height='200px' src="https://cdn.dribbble.com/users/539800/screenshots/2892313/dribble_category_icons.gif" />
            <Card.Body>
              <Card.Title>Add & Manage Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height='200px' src="https://imgvisuals.com/cdn/shop/products/animated-load-time-gradient-ui-icon-941101.gif?v=1697071131" />
            <Card.Body>
              <Card.Title>Track Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="p-5">
        <Row>
          <Col sm={12} md={6}>
          <h3>Simple And Faster</h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perferendis reiciendis at, nesciunt culpa vero obcaecati molestiae deserunt magnam sed nisi iure fugiat exercitationem est accusantium atque? Tenetur, culpa facilis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui exercitationem voluptates aut! Odit, porro libero reiciendis doloremque numquam mollitia ipsam, similique necessitatibus, modi aliquid corrupti facere non dolore consequatur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, unde. Deleniti quia ad, assumenda autem numquam voluptas quaerat quae labore ipsa enim voluptates molestias ab, maiores ex ipsum nihil nostrum.
        </p>
          </Col>
          <Col sm={12} md={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RVFAyFWO4go?si=_Mj8OWXqOyA2WCq6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing