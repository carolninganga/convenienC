import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const Team = () => (
  <Card
    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default Team;