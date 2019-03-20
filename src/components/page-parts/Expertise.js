import React, { Component } from 'react';
import styled from 'styled-components';
import Rellax from 'rellax';

import Button from '../common/Button'
import TechCard from '../common/TechCard'

const ExpertiseWrapper = styled.section`
	padding-top: 80px;

	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;

	@media ${props => props.theme.layout.tablet} {
		flex-wrap: initial;
		padding: ${props => props.theme.layout.wrapperPaddingDesktop};
  	}
`

const LeftWrapper = styled.div`
	
	@media ${props => props.theme.layout.tablet} {
		padding-right: 40px;
  	}
`

const RightWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 60px;

	@media ${props => props.theme.layout.tablet} {
		padding-top: 0px;
		justify-content: flex-end;
  	}
`

const Title = styled.h1`
	font-size: 1em;
  	margin: 0;
 	font-weight: 500;
	color: ${props => props.theme.color.title};
`

const Text = styled.div`
	padding-top: 20px;
	font-size: 13px;
	width: 75%;

	@media ${props => props.theme.layout.tablet} {
		width: 340px;
  	}

	@media ${props => props.theme.layout.laptop} {
		width: 380px;
  	}
`

const Resume = styled(Button)`
	margin-top: 40px;

	@media ${props => props.theme.layout.tablet} {
		margin-top: 80px;
  	}
`



class Expertise extends Component {
	constructor(props) {
		super(props)

		this.logos = ['js', 'react', 'gatsby', 'git', 'webpack', 'graphql']
	}

	componentDidMount() {
	    this.rellax = new Rellax('.rellax')
	}

  	render() {
	    return (
	      	<ExpertiseWrapper>
	      		<LeftWrapper className="animated fadeInUpSmall delay-2s">
	      			<Title>Expertise</Title>
	      			<Text>
	      				My specialization lies in web development with Javascript and React's ecosystem, including Styled components, Gatsby and GraphQL. Experience in Business analysis allows me to better understand what brings value to clients and what makes products great. 
	      			</Text>
	      			<Resume text="download resume" url="#">
	      				download resume
	      			</Resume>
	      		</LeftWrapper>
	      		<RightWrapper className="rellax animated fadeInUpSmall delay-2s" data-rellax-speed="-1" data-rellax-percentage="0.5">
	      			{this.logos.map(logo => <TechCard logo={logo} key={logo}/>)}	      			
	      		</RightWrapper>
	      	</ExpertiseWrapper>
	    );
  	}
}

export default Expertise;