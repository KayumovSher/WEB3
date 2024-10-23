import { Button, Navbar, Container, Form, Row, Col } from 'react-bootstrap';

import ProTouchIco from "./images/ProTouchIco.jpg"


export default function App() {
  return (
    <html className="dark">
      <header>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="{ProTouchIco}"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              ProTouch
            </Navbar.Brand>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Navbar>
      </header>

      <body>
        <div className="App">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          </div>
        </div>
      </body>
    </html >
  )
}

