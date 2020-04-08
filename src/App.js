import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Toast from "react-bootstrap/Toast";
import Moment from "react-moment";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import moment from "moment";
import clock from "./icons/clock.svg";
import alertcircle from "./icons/alert-circle.svg";
import calendar from "./icons/calendar.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLoadingUni: true,
      dataSourceArbeit: null,
      dataSourceUni: null,
      dataSourceUnistops: null,
      isLoadingDobben: true,
      isLoadingViertel: true,
      dataSourceDobben: null,
      dataSourceViertel: null,
      curTimemmddyyyy: new moment(new Date()).format("MM-DD-YYYY")
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
        this.state.curTimemmddyyyy +
        "&fromPlace=53.080968,8.796789&toPlace=53.072957,8.823597&time=" +
        this.state.curTime30s +
        "&mode=WALK,TRANSIT&maxWalkDistance=300"
    ) //viertel
      .then(res1 => res1.json())
      .then(responseJson1 => {
        this.setState({
          isLoadingViertel: false,
          dataSourceViertel: responseJson1.plan.itineraries,
          dataSourceViertelstops: responseJson1.plan.itineraries.legs
        });
      })
      .catch(error => {
        console.log(error);
      });
    setInterval(() => {
      fetch(
        "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
          this.state.curTimemmddyyyy +
          "&fromPlace=53.080968,8.796789&toPlace=53.072957,8.823597&time=" +
          this.state.curTime30s +
          "&mode=WALK,TRANSIT&maxWalkDistance=300"
      )
        .then(res1 => res1.json())
        .then(responseJson1 => {
          this.setState({
            isLoadingViertel: false,
            dataSourceViertel: responseJson1.plan.itineraries,
            dataSourceViertelstops: responseJson1.plan.itineraries.legs
          });
        })
        .catch(error => {
          console.log(error);
        });
    }, 120000);
    fetch(
      "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
        this.state.curTimemmddyyyy +
        "&fromPlace=53.080968,8.796789&toPlace=53.078571,8.823656&time=" +
        this.state.curTime30s +
        "&mode=WALK,TRANSIT&maxWalkDistance=300"
    ) //dobben
      .then(res1 => res1.json())
      .then(responseJson1 => {
        this.setState({
          isLoadingDobben: false,
          dataSourceDobben: responseJson1.plan.itineraries
        });
      })
      .catch(error => {
        console.log(error);
      });
    setInterval(() => {
      fetch(
        "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
          this.state.curTimemmddyyyy +
          "&fromPlace=53.080968,8.796789&toPlace=53.078571,8.823656&time=" +
          this.state.curTime30s +
          "&mode=WALK,TRANSIT&maxWalkDistance=300"
      )
        .then(res1 => res1.json())
        .then(responseJson1 => {
          this.setState({
            isLoadingDobben: false,
            dataSourceDobben: responseJson1.plan.itineraries
          });
        })
        .catch(error => {
          console.log(error);
        });
    }, 120000);
    fetch(
      "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
        this.state.curTimemmddyyyy +
        "&fromPlace=53.080968,8.796789&toPlace=53.105196,8.850887&time=" +
        this.state.curTime30s +
        "&mode=WALK,TRANSIT&maxWalkDistance=300"
    )
      .then(res1 => res1.json())
      .then(responseJson1 => {
        this.setState({
          isLoadingUni: false,
          dataSourceUni: responseJson1.plan.itineraries,
          dataSourceUnistops: responseJson1.plan.itineraries.legs
        });
      })
      .catch(error => {
        console.log(error);
      });
    setInterval(() => {
      fetch(
        "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
          this.state.curTimemmddyyyy +
          "&fromPlace=53.080968,8.796789&toPlace=53.105196,8.850887&time=" +
          this.state.curTime30s +
          "&mode=WALK,TRANSIT&maxWalkDistance=300"
      )
        .then(res1 => res1.json())
        .then(responseJson1 => {
          this.setState({
            isLoadingUni: false,
            dataSourceUni: responseJson1.plan.itineraries,
            dataSourceUnistops: responseJson1.plan.itineraries.legs
          });
        })
        .catch(error => {
          console.log(error);
        }); //uni süd
    }, 120000);
    fetch(
      "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
        this.state.curTimemmddyyyy +
        "&fromPlace=53.080968,8.796789&toPlace=53.087048,8.782718&time=" +
        this.state.curTime30s +
        "&mode=WALK,TRANSIT&maxWalkDistance=300"
    )
      .then(res => res.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSourceArbeit: responseJson.plan.itineraries
        });
      })
      .catch(error => {
        console.log(error);
      });
    setInterval(() => {
      fetch(
        "http://localhost:3000/api/api/routers/connect/plan?arriveBy=false&date=" +
          this.state.curTimemmddyyyy +
          "&fromPlace=53.080968,8.796789&toPlace=53.087048,8.782718&time=" +
          this.state.curTime30s +
          "&mode=WALK,TRANSIT&maxWalkDistance=300"
      )
        .then(res => res.json())
        .then(responseJson => {
          this.setState({
            isLoading: false,
            dataSourceArbeit: responseJson.plan.itineraries
          });
        }) //arbeit
        .catch(error => {
          console.log(error);
        });
    }, 120000);

    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
    setInterval(() => {
      this.setState({
        curTime30s: new Date().toTimeString().split(" ")[0],
        curTimemmddyyyy: new moment(new Date()).format("MM-DD-YYYY")
      });
    }, 30000);
  }

  render() {
    if (
      this.state.isLoading === true ||
      this.state.isLoadingDobben === true ||
      this.state.isLoadingUni === true ||
      this.state.isLoadingViertel === true
    ) {
      return <h4>Loading...</h4>;
    } else {
      let legsArbeit = this.state.dataSourceArbeit.map((val, key) => {
        let stopsArbeit = val.legs.map((legs, key) => {
          return (
            <Container>
              <Row>
                <Col>
                  <li>{legs.from.name}</li>
                </Col>
                <Col>
                  <Row className="center">
                    <Col className="center">
                      {parseInt(legs.distance / 1000)}km
                    </Col>
                    <Col>
                      <Badge pill variant="secondary">
                        {legs.route}
                      </Badge>
                      <Row className="center">
                        {(legs.endTime - legs.startTime) / 1000 / 60} min
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <li>{legs.to.name}</li>
              </Row>
            </Container>
          );
        });
        return (
          <Container fluid>
            <Toast>
              <Toast.Header>
                <img src="logo.svg" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Arbeit</strong>
                <small>{this.state.curTime}</small>
              </Toast.Header>
              <Toast.Body className="App">
                <Row>
                  <Col>
                    <img src={clock} alt=""></img>
                    {"  "}
                    {parseInt(val.duration / 60)}min
                  </Col>

                  <Col>
                    <img src={calendar} alt=""></img>
                    <Moment format="HH:mm:ss">{val.startTime}</Moment>
                  </Col>
                </Row>
                <Row>{stopsArbeit}</Row>
                <Col></Col>
                {val.startTime - new moment(new Date()).format("x") > 150000 ? (
                  <Badge pill variant="dark">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                ) : (
                  <Badge pill variant="danger">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                )}
                <Row className="center">
                  <Button variant="primary" className="center">
                    Richtung{" "}
                    <Badge variant="light">{val.legs[0].headsign}</Badge>
                  </Button>
                  <h2 className="center">
                    {val.legs[0].route === "3" ? (
                      <Badge pill variant="success">
                        {val.legs[0].route}
                      </Badge>
                    ) : (
                      <Badge pill variant="secondary">
                        {val.legs[0].route}
                      </Badge>
                    )}
                  </h2>
                </Row>
              </Toast.Body>
            </Toast>
          </Container>
        );
      });

      let legsUni = this.state.dataSourceUni.map((val, key) => {
        let stopsUni = val.legs.map((legs, key) => {
          return (
            <Container>
              <Row>
                <Col>
                  <li>{legs.from.name}</li>
                </Col>
                <Col>
                  <Row className="center">
                    <Col className="center">
                      {parseInt(legs.distance / 1000)}km
                    </Col>
                    <Col>
                      <Badge pill variant="secondary">
                        {legs.route}
                      </Badge>
                      <Row className="center">
                        {(legs.endTime - legs.startTime) / 1000 / 60} min
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <li>{legs.to.name}</li>
              </Row>
            </Container>
          );
        });
        return (
          <Container fluid>
            <Toast>
              <Toast.Header>
                <img src="logo.svg" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Uni-Süd</strong>
                <small>{this.state.curTime}</small>
              </Toast.Header>
              <Toast.Body className="App">
                <Row>
                  <Col>
                    <img src={clock} alt=""></img>
                    {"  "}
                    {parseInt(val.duration / 60)}min
                  </Col>

                  <Col>
                    <img src={calendar} alt=""></img>
                    <Moment format="HH:mm:ss">{val.startTime}</Moment>
                  </Col>
                </Row>

                <Row>{stopsUni}</Row>
                <Container></Container>
                {val.startTime - new moment(new Date()).format("x") > 120000 ? (
                  <Badge pill variant="dark">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                ) : (
                  <Badge pill variant="danger">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                )}
                <Row className="center">
                  <Button variant="primary" className="center">
                    Richtung{" "}
                    <Badge variant="light">{val.legs[0].headsign}</Badge>
                  </Button>
                  <h2 className="center">
                    {val.legs[0].route === "3" ? (
                      <Badge pill variant="success">
                        {val.legs[0].route}
                      </Badge>
                    ) : (
                      <Badge pill variant="secondary">
                        {val.legs[0].route}
                      </Badge>
                    )}
                  </h2>
                </Row>
              </Toast.Body>
            </Toast>
          </Container>
        );
      });
      let legsDobben = this.state.dataSourceDobben.map((val, key) => {
        let stopsDobben = val.legs.map((legs, key) => {
          return (
            <Container>
              <Row>
                <Col>
                  <li>{legs.from.name}</li>
                </Col>
                <Col>
                  <Row className="center">
                    <Col className="center">
                      {parseInt(legs.distance / 1000)}km
                    </Col>
                    <Col>
                      <Badge pill variant="secondary">
                        {legs.route}
                      </Badge>
                      <Row className="center">
                        {(legs.endTime - legs.startTime) / 1000 / 60} min
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <li>{legs.to.name}</li>
              </Row>
            </Container>
          );
        });
        return (
          <Container fluid>
            <Toast>
              <Toast.Header>
                <img src="logo.svg" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Dobben</strong>
                <small>{this.state.curTime}</small>
              </Toast.Header>
              <Toast.Body className="center">
                <Row>
                  <Col>
                    <img src={clock} alt=""></img>
                    {"  "}
                    {parseInt(val.duration / 60)}min
                  </Col>

                  <Col>
                    <img src={calendar} alt=""></img>
                    <Moment format="HH:mm:ss">{val.startTime}</Moment>
                  </Col>
                </Row>
                <Row>{stopsDobben}</Row>
                {val.startTime - new moment(new Date()).format("x") > 120000 ? (
                  <Badge pill variant="dark">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                ) : (
                  <Badge pill variant="danger">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                )}
                <Row className="center">
                  <Button variant="primary" className="center">
                    Richtung{" "}
                    <Badge variant="light">{val.legs[0].headsign}</Badge>
                  </Button>
                  <h2 className="center">
                    {val.legs[0].route === "3" ? (
                      <Badge pill variant="success">
                        {val.legs[0].route}
                      </Badge>
                    ) : (
                      <Badge pill variant="secondary">
                        {val.legs[0].route}
                      </Badge>
                    )}
                  </h2>
                </Row>
              </Toast.Body>
            </Toast>
          </Container>
        );
      });
      let legsViertel = this.state.dataSourceViertel.map((val, key) => {
        let stopsViertel = val.legs.map((legs, key) => {
          return (
            <Container>
              <Row>
                <Col>
                  <li>{legs.from.name}</li>
                </Col>
                <Col>
                  <Row className="center">
                    <Col className="center">
                      {parseInt(legs.distance / 1000)}km
                    </Col>
                    <Col>
                      <Badge pill variant="secondary">
                        {legs.route}
                      </Badge>
                      <Row className="center">
                        {(legs.endTime - legs.startTime) / 1000 / 60} min
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <li>{legs.to.name}</li>
              </Row>
            </Container>
          );
        });
        return (
          <Container fluid>
            <Toast>
              <Toast.Header>
                <img src="logo.svg" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Sielwall</strong>
                <small>{this.state.curTime}</small>
              </Toast.Header>
              <Toast.Body className="App">
                <Row>
                  <Col>
                    <img src={clock} alt=""></img>
                    {"  "}
                    {parseInt(val.duration / 60)}min
                  </Col>

                  <Col>
                    <img src={calendar} alt=""></img>
                    <Moment format="HH:mm:ss">{val.startTime}</Moment>
                  </Col>
                </Row>
                <Row>{stopsViertel}</Row>
                <Row>{}</Row>
                {val.startTime - new moment(new Date()).format("x") > 120000 ? (
                  <Badge pill variant="dark">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                ) : (
                  <Badge pill variant="danger">
                    Departure <Moment fromNow>{val.startTime}</Moment>
                  </Badge>
                )}
                <Row className="center">
                  <Button variant="primary" className="center">
                    Richtung{" "}
                    <Badge variant="light">{val.legs[0].headsign}</Badge>
                  </Button>
                  <h2 className="center">
                    {val.legs[0].route === "3" ? (
                      <Badge pill variant="success">
                        {val.legs[0].route}
                      </Badge>
                    ) : (
                      <Badge pill variant="secondary">
                        {val.legs[0].route}
                      </Badge>
                    )}
                  </h2>
                </Row>
              </Toast.Body>
            </Toast>
          </Container>
        );
      });

      return (
        <div className="div">
          <Row>
            <Col>{legsArbeit} </Col>
            <Col>{legsDobben}</Col>
            <Col>{legsViertel}</Col>
            <Col>{legsUni}</Col>
          </Row>
        </div>
      );
    }
  }
}

export default App;
