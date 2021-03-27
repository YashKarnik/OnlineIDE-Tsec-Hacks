import React from 'react';
import { ReactComponent as LandingHumanComponent } from './landing.svg';
import { ReactComponent as DeleteSVGComponent } from './delete.svg';
import { ReactComponent as PencilComponent } from './edit.svg';
import { ReactComponent as GoogleComponent } from './google.svg';
import { ReactComponent as GithubComponent } from './github.svg';
export const LandingHuman = props => {
	return <LandingHumanComponent {...props} />;
};
export const DeleteSVG = props => {
	return <DeleteSVGComponent {...props} />;
};
export const PencilSVG = props => {
	return <PencilComponent {...props} />;
};
export const GoogleSvg = props => {
	return <GoogleComponent {...props} />;
};
export const GithubSVG = props => {
	return <GithubComponent {...props} />;
};
