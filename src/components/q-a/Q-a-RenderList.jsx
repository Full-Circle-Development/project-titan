// this component will go in Q-a.jsx
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RenderQuestions from '../q-a/Q-a-RenderQuestions.jsx';


class RenderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question_id: props.question_id
        }
    }
    // a method to set state to the question id?
    // create a method to pull in answers 
    render() {
        const items = this.props.questions.map((question, i) =>
        <Row className="layout" key={i}>
        <Col className="layout">
        <Row className="layout">Q:
        <Col className="layout" sm={9}>
        <Row className="layout">{question.question_body}</Row>
        </Col>
        <Col className="layout">
        <Row className="layout">Helpful? | Add answer</Row>
        </Col>
        </Row>
        <Row className="layout">A:
        <Col className="layout" sm={9}>
        <Row className="layout">
        <Col className="layout">
        <Row className="layout">Answer Text</Row>
        <Row className="layout">{new Date(question.question_date).toLocaleDateString("en-US", 
        {weekday: "long", 
        year: "numeric", 
        month: "short",  
        day: "numeric"})} | Helpful? {' Yes (' + question.question_helpfulness + ')'} | Report</Row>
        </Col>
        </Row>
        <Row className="layout">
        <Col className="layout">
        <Row className="layout">Answer to reply?</Row>
        <Row className="layout">IMAGES</Row>
        <Row className="layout">Date | Helpful | Report</Row>
        </Col>
        </Row>
        </Col>
        </Row>
        <Row>
        <Col>Load more answers</Col>
        </Row>
        </Col>
        </Row>
        )
        return (
            <div>
          <div> { items } </div>
          <RenderQuestions questions={this.props.questions}/>
          </div>
        )
    }
}


export default RenderList;