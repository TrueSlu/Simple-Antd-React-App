import React, { Component } from 'react';
import { Button, Col, message } from 'antd';

class App extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center', marginTop: '300px' }}>
				<Col span={8}/>
				<Col span={8}>
					<p>Hello! This is a blank Create React App w/ Ant Design!</p>
					<Button onClick={() => message.success("You clicked the button!")}>Button</Button>
				</Col>
				<Col span={8}/>
			</div>
		);
	}
}

export default App;
