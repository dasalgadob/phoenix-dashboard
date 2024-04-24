import { disabledDate } from '@/app/constants';
import {  Space, Button, Modal, DatePicker, Radio } from 'antd';



const CustomDateButtonFilter=(props) => {
return (
  <>
  <Button type="primary" onClick={props.showModalDate} style={props.filterType === 'custom' && {background: '#2d3f7c'}}>CUSTOM DATE</Button>
          <Modal title="Date Range" open={props.isModalOpenDate} onOk={props.handleOkDate} onCancel={props.handleCancelDate}>
  <Space direction="vertical" size={12}>
    <Radio.Group onChange={props.onChangeRadio} value={props.valueRadio}>
      <Radio value={1}>Quarter</Radio>
      <Radio value={2}>Month</Radio>
    </Radio.Group>
    {props.valueRadio === 1 ? (
      <DatePicker
      onChange={props.onChangeDatePicker}
      picker="quarter"
      disabledDate={disabledDate}
    />
    ) : (
      <DatePicker
      onChange={props.onChangeDatePicker}
      picker="month"
      disabledDate={disabledDate}
      
/>
    )}
  </Space>
</Modal>
</>
)
}
export default CustomDateButtonFilter