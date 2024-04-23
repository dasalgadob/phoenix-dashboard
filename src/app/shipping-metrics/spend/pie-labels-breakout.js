import { Col, Row,  } from 'antd';

const PieLabelsBreakout=(props) => {
return (
  <Row style={{marginTop: '15px'}}>
                <Col span={10}>
                <Row style={{border: `2px solid ${props.borderColor}`, backgroundColor: props.backgroundColor,
                              height: '15px', width: '40px', marginTop:'5px'}}></Row>
                </Col>
                <Col span={14}>
                  <p style={{ margin: '0px', fontSize: '16px', textTransform: 'capitalize', }}>{props.zone} </p>
                  <p style={{ margin: '0px'}}>Charge:&nbsp;{props.values.charge}</p>
                  <p style={{ margin: '0px'}}>$/lbs:&nbsp;{props.values.cost_per_lbs}</p>
                  <p style={{ margin: '0px'}}>#shipments:&nbsp;{props.values.number_of_shipments}</p>
                </Col>
             </Row> 
)
}
export default PieLabelsBreakout