import React, {PropTypes} from 'react'
import {FormGroup, Radio, Button} from 'react-bootstrap'

const Footer = ({status, total, unfinished, onStatusChange, onCheckAllClick}) => {
  const radios = [
    {key: 'all', value: '全部'},
    {key: 'finished', value: '已完成'},
    {key: 'unfinished', value: '未完成'}
  ].map(({value, key}) => {
    return (<Radio
      key={key}
      inline
      name='status'
      value={key}
      checked={status === key}
      onChange={onStatusChange.bind(null, key)}
    >
      {value}({key === 'all' ? total : (key === 'unfinished') ? unfinished :  (total - unfinished)})
    </Radio>)
  })

  return (
    <FormGroup controlId='status' style={{paddingTop: '5px'}}>
      {radios}
      <Button className='pull-right' onClick={onCheckAllClick}>全部完成</Button>
    </FormGroup>
  )
}

Footer.propTypes = {
  status: PropTypes.oneOf(['all', 'finished', 'unfinished']).isRequired,
  onStatusChange: PropTypes.func,
  onCheckAllClick: PropTypes.func
}

export default Footer