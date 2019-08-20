import React, { Component, Fragment } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'

class Index extends Component {



	render() {
	
		return (
			<Fragment>

				<Parallax ref={ref => (this.parallax = ref)} pages={3}>
						<ParallaxLayer offset={0} speed={0.1} factor={1} style={{ backgroundColor: '#805E73' }} />
						<ParallaxLayer offset={0.9} speed={0.1} factor={1} style={{ backgroundColor: '#87BCDE' }} />

						<ParallaxLayer offset={1.8} speed={0.1} factor={1} style={{ backgroundColor: '#dd6666' }}  />
				</Parallax>

			</Fragment>			
		);
	}
}

export default Index;
